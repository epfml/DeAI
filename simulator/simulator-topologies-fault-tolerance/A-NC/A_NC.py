import sys
sys.path.append('..') 
from utils import *

def run_A_NC(train_loader, test_loader, comm_matrix, num_rounds, epochs, num_clients,
            net='net', optimizer='sgd', lr=0.1):
    """
    Runs a decentralized optimization algorithme for the given learning rate for
    a number of rounds, over some network. Outputs the accuracies and returns them.

    Params:
        train_loader (array): the list of all train datasets, one per client
        test_loader (array): the list of test datasets, one per client
        comm_matrix (numpy.array): the communication matric modeling the network
        num_rounds (int): the number of data exchanges between nodes
        epochs (int): the number of optimization steps between each communication (minimum 1)
        num_clients (int): the number of clients in the network
        net (string): the neural network framework we use
        optimizer (string): the chosen optimizer, SGD by default
        lr (double): the learning rate for the optimizaion algorithm

    Returns:
        accs (array): the corresponding accuracies, with the same shape as lrs
    """
    accs = []
    global_model, client_models = model_init(num_clients, net)
    opt = optimizer_init(client_models, lr, optimizer)

    loss, test_loss, acc = 0.0, 0.0, 0.0
    for r in range(num_rounds):
        loss = 0
        for i in range(num_clients):
            loss += client_update(client_models[i], opt[i], train_loader[i], epoch=epochs)
        diffuse_params(client_models, comm_matrix)
        average_models(global_model, client_models)
        test_loss, acc = evaluate(global_model, test_loader)

        print('%d-th round' % r)
        print('average train loss %0.3g | test loss %0.3g | test acc: %0.3f' % (loss / num_clients, test_loss, acc))
        accs.append(acc)
    return global_model, client_models, accs
