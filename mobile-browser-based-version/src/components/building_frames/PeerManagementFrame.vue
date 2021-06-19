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
                    class="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
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
                          {{ this.pings.get(receiver) }}ms
                        </div>
                        <div class="cursor-pointer transform hover:scale-125">
                          <div
                            class="text-green-700 hover:text-green-500"
                            v-on:click="this.communicationManager.enableReceiver(receiver)"
                            v-if="this.communicationManager.isIdle(receiver)"
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
                            class="text-red-700 hover:text-red-500"
                            v-on:click="this.communicationManager.disableReceiver(receiver)"
                            v-if="this.communicationManager.isActive(receiver)"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                          </div>
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
  props: {
      communicationManager: Object,
  }
}
</script>
