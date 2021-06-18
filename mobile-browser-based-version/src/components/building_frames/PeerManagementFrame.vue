<template>

        <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8">
          <!-- Card header -->
          <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
            <div
              class="flex items-center justify-between p-4 border-b dark:border-primary"
            >
              <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
                Training Peers
              </h4>
              <div class="flex items-center">
                <span aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="relative p-4 overflow-x-scroll">
              <span
                style="white-space: pre-line"
                class="text-sm text-gray-500 dark:text-light"
                >Some explication about this section.</span
              >
            </div>

            <!-- Display all the possible headers -->
            <div>
              <ul class="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-6">
                <li
                  class="border-gray-400"
                  v-for="receiver in this.receivers"
                  :key="receiver"
                >
                  <div
                    class="select-none p-2 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 hover:shadow-2xl border-primary-dark"
                  >
                    <div class="grid grid-cols-1 grid-rows-2 items-center">
                      <div class="pl-1">
                        <div class="font-medium">
                          <div class="flex flex-row justify-start">
                            {{ receiver }}
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between">
                        <div class="text-gray-400">
                          700ms
                        </div>
                        <div
                          class="hover:text-green-700"
                          v-on:click="this.activeReceivers.add(receiver);this.idleReceivers.delete(receiver)"
                          v-if="this.idleReceivers.has(receiver)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div
                          class="hover:text-red-700"
                          v-on:click="this.activeReceivers.delete(receiver);this.idleReceivers.add(receiver)"
                          v-if="this.activeReceivers.has(receiver)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>


</template>

<script>
export default {
  name: "PeerManagementFrame",
  data() {
    return {
    //communicationManager: Object,
    receivers: new Set([143128736,23123213123,3123213213,4544,555,66,7777]),
    activeReceivers: new Set([143128736,23123213123,3123213213,4544,555,66,7777]),
    idleReceivers: new Set(),
    }
  }
}
</script>
