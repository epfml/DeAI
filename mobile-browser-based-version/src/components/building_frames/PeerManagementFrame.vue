<template>
  <div class="flex flex-1 h-screen overflow-y-scroll">
    <!-- Main Page Header -->
    <main class="flex-1 pt-4">
      <!-- Main Page Content -->
      <div
        class="flex flex-col pt-4 items-right justify-start flex-1 h-full min-h-screen overflow-y-auto"
      >

        <section class="flex-col items-center justify-center p-4 space-y-4">
          <div
            v-for="receiver in this.communicationManager.receivers"
            :key="receiver.peerjsId"
            class="grid grid-cols-1 gap-8 p-4 lg:grid-cols-1 xl:grid-cols-1"
          >
            <div
              class="group flex-col items-center justify-between p-4 bg-white rounded-md dark:bg-darker hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark"
              v-on:click="this.communicationManager.disableReceiver(receiver.peerjsId)"
            >
            </div>
            <div
              class="group flex-col items-center justify-between p-4 bg-white rounded-md dark:bg-darker hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark"
              v-on:click="this.communicationManager.enableReceiver(receiver.peerjsId)"
            >
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "PeerManagementFrame",
  props: {
    communicationManager: Object,
  },
}
</script>
