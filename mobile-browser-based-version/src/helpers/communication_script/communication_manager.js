import { makeid } from "./helpers"
import Peer from "peerjs";
import {
    PeerJS,
    handleData,
} from "./peer";

/**
 * Class that deals with communication with the PeerJS server.
 * Collects the list of receivers currently connected to the PeerJS server.
 */
export class CommunicationManager {
    /**
     * Prepares connection to a PeerJS server.
     * @param {Number} portNbr the port number to connect.
     */
    constructor(portNbr) {
        this.portNbr = portNbr;
        this.peerjsId = null;
        this.peer = null;
        this.peerjs = null;
        this.receivers = new Set();
        this.activeReceivers = new Set();
        this.idleReceivers = new Set();
        this.pings = new Map();
        this.isConnected = null;
        this.recvBuffer = null;
    }

    /**
     * Disconnection process when user quits the task.
     */
    disconect() {
        if (this.peer != null) {
            this.peer.disconnect();
            this.peer.destroy();
        }
    }

    /**
     * Initialize the connection to the server.
     * @param {Number} epochs the number of epochs (required to initialize the communication buffer).
     */
    async initializeConnection(epochs, environment) {
        // initialize the buffer
        this.recvBuffer = {
            trainInfo: {
                epochs: epochs,
            },
        };

        // create an ID used to connect to the server
        this.peerjsId = await makeid(10)

        // connect to the PeerJS server
        /*
        this.peer = new Peer(this.peerjsId, {
            host: "localhost",
            port: 9000,
            path: "/deai",
        });*/

        this.peer = new Peer(this.peerjsId,
            {
                host: '35.242.193.186', port: 9000, path: '/deai',
                config: {
                    'iceServers': [
                        { url: 'stun:stun.l.google.com:19302' },
                        { url: 'turn:35.242.193.186:3478', credential: 'deai', username: 'deai' }
                    ]
                }
            }
        )

        this.peer.on("error", (err) => {
            console.log("Error in connecting");
            this.isConnected = false;


            environment.$toast.error(
                "Failed to connect to server. Fallback to training alone."
            );
            setTimeout(environment.$toast.clear, 30000);
        });

        this.peer.on("open", async (id) => {

            this.isConnected = true;

            this.peerjs = await new PeerJS(this.peer, handleData, this.recvBuffer);

            environment.$toast.success(
                "Succesfully connected to server. Distributed training available."
            );
            setTimeout(environment.$toast.clear, 30000);
        });
    }

    /**
     * Updates the receivers' list.
     */
    async updateReceivers() {
        /*
        let queryIds = await fetch(
            "http://localhost:".concat(String(this.portNbr)).concat("/deai/peerjs/peers"
            )).then((response) => response.text());
        */

        let queryIds = await fetch(
            "http://35.242.193.186:".concat(String(this.portNbr)).concat("/deai/peerjs/peers"
          )).then((response) => response.json());

        console.log(queryIds);
        let allIds = queryIds;

        this.receivers.clear();
        allIds.forEach((value) => {
          if (value != this.peerjsId) {
              this.receivers.add(value);
          }
        });

        this.updateActiveReceivers();
        this.updateIdleReceivers();
    }

    async udpatePings() {
        this.activeReicevers.forEach((receiver) => {
            let startTime = performance.now();
            let endTime;
            // Very basic ping (even wrong) measurement, to enhance
            const conn = this.localPeer.connect(receiver);
            conn.on('open', () => {
                endTime = performance.now();
            });
            this.pings.set(receiver, endTime - startTime);
        });
    }

    updateIdleReceivers() {
        // Remove stale peers
        this.idleReceivers.forEach(receiver => {
            if (!this.receivers.has(receiver)) {
                this.idleReceivers.delete(receiver);
            }
        });
    }

    updateActiveReceivers() {
        // Peers are active by default
        this.receivers.forEach(receiver => this.activeReceivers.add(receiver));
        // Remove stale peers
        this.activeReceivers.forEach(receiver => {
            if (!this.receivers.has(receiver)) {
                this.activeReceivers.delete(receiver);
            }
        });
    }

    disableReceiver(peerId) {
        if (!this.activeReceivers.has(peerId)) {
            if (!this.idleReceivers.has(peerId)) {
                console.log(`Peer ${peerId} does not exist.`)
            } else {
                console.log(`Peer ${peerId} is already disabled.`)
            }
        } else {
            this.idleReceivers.add(peerId);
            this.activeReceivers.delete(peerId);
        }
    }

    enableReceiver(peerId) {
        if (!this.idleReceivers.has(peerId)) {
            if (!this.activeReceivers.has(peerId)) {
                console.log(`Peer ${peerId} does not exist.`)
            } else {
                console.log(`Peer ${peerId} is already enabled.`)
            }
        } else {
            this.activeReceivers.add(peerId);
            this.idleReceivers.delete(peerId);
        }
    }

    isActive(peerId) {
        return this.activeReceivers.has(peerId);
    }

    isIdle(peerId) {
        return this.idleReceivers.has(peerId);
    }
}
