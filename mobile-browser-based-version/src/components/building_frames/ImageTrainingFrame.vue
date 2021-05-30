<template>
  <div
    class="flex flex-col pt-4 items-right justify-start flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto"
  >
    <!-- Data Format Card -->
    <a id="overview-target">
      <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8">
        <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
          <!-- Card header -->
          <div
            class="flex items-center justify-between p-4 border-b dark:border-primary"
          >
            <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
              Data Format Information
            </h4>
            <div class="flex items-center">
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-card-checklist w-7 h-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                  />
                  <path
                    d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <!-- Descrition -->
          <div class="relative p-4 overflow-x-scroll">
            <span class="text-sm text-gray-500 dark:text-light">{{
              DataFormatInfoText
            }}</span>
          </div>
        </div>
      </div>
    </a>

    <!-- Data Example Card -->
    <a id="limitations-target">
      <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8">
        <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
          <!-- Card header -->
          <div
            class="flex items-center justify-between p-4 border-b dark:border-primary"
          >
            <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
              Data Example
            </h4>
            <div class="flex items-center">
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-file-earmark-ruled w-7 h-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div class="relative p-4 overflow-x-scroll">
            <span class="text-sm text-gray-500 dark:text-light">{{
              DataExampleText
            }}</span>
          </div>

          <!-- Data Point Example -->
          <div class="flex object-center">
            <img
              class="object-center"
              :src="getImage(DataExampleImage)"
              v-bind:alt="DataExampleImage"
            /><img />
          </div>
        </div>
      </div>
    </a>

    <!-- Upload Image Card -->
    <div class="p-4 grid grid-cols-1 space-y-2 lg:gap-2">
      <div class="container mx-width lg h-full">
        <!-- Card header -->
        <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
          <div
            class="flex items-center justify-between p-4 border-b dark:border-primary"
          >
            <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
              Upload My Data
            </h4>
            <div class="flex items-center">
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-cloud-upload w-7 h-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <!-- Upload Images-->
        <div class="relative pb-4">
          <ImageUploadFrame
            v-for="label in taskLabels"
            v-bind:key="label"
            :label="String(label)"
            :inputchangefunc="inputChange"
          />
        </div>
      </div>
    </div>

    <!-- Train Button -->
    <div class="flex items-center justify-center p-4">
      <button
        v-on:click="joinTraining(false)"
        type="button"
        class="text-lg border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none"
      >
        Train Alone
      </button>
      <button
        v-on:click="joinTraining(true)"
        type="button"
        class="text-lg border-2 border-transparent bg-green-500 ml-3 py-2 px-4 font-bold uppercase text-white rounded transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none"
      >
        Train Distributed
      </button>
    </div>

    <!-- Training Board -->
    <div>
      <TrainingInformationFrame
        v-bind:trainingInformant="trainingInformant"
        v-if="trainingInformant"
      />
    </div>

    <!-- Save the model button -->
    <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8">
      <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
        <div
          class="flex items-center justify-between p-4 border-b dark:border-primary"
        >
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
            Save the model
          </h4>
          <div class="flex items-center">
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-card-checklist w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                />
              </svg>
            </span>
          </div>
        </div>
        <!-- Descrition -->
        <div class="relative p-4 overflow-x-scroll">
          <span
            style="white-space: pre-line"
            class="text-sm text-gray-500 dark:text-light"
            >If you are satisifed with the performance of the model, don't
            forget to save the model by clicking on the button below. The next
            time you will load the application, you will be able to use your
            saved model.
          </span>
        </div>
        <div class="flex items-center justify-center p-4">
          <button
            id="train-model-button"
            v-on:click="saveModel()"
            class="text-lg border-2 border-transparent bg-primary ml-3 py-2 px-4 font-bold uppercase text-white rounded transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none"
          >
            Save My model
          </button>
        </div>
      </div>
    </div>

    <!-- Save the model button -->
    <div class="grid grid-cols-1 p-4 space-y-8 lg:gap-8">
      <div class="col-span-1 bg-white rounded-lg dark:bg-darker">
        <div
          class="flex items-center justify-between p-4 border-b dark:border-primary"
        >
          <h4 class="text-lg font-semibold text-gray-500 dark:text-light">
            Test the model
          </h4>
          <div class="flex items-center">
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-card-checklist w-7 h-7"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                />
              </svg>
            </span>
          </div>
        </div>
        <!-- Descrition -->
        <div class="relative p-4 overflow-x-scroll">
          <span
            style="white-space: pre-line"
            class="text-sm text-gray-500 dark:text-light"
            >Once you have finished training your model it might be
            a great idea to go test it.
          </span>
        </div>
        <div class="flex items-center justify-center p-4">
          <button
            id="train-model-button"
            v-on:click="goToTesting()"
            class="text-lg border-2 border-transparent bg-primary ml-3 py-2 px-4 font-bold uppercase text-white rounded transform transition motion-reduce:transform-none hover:scale-110 duration-500 focus:outline-none"
          >
            Test My model
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { TrainingInformant } from "../../helpers/training_script/training_informant";
import { CommunicationManager } from "../../helpers/communication_script/communication_manager";
import { TrainingManager } from "../../helpers/training_script/training_manager";
import TrainingInformationFrame from "./TrainingInformationFrame";
import ImageUploadFrame from "../building_frames/ImageUploadFrame";
import { checkData } from '../../helpers/data_validation_script/helpers-image-tasks';
// takes care of communication
var trainingManager = null;

export default {
  name: "ImageTrainingFrame",
  props: {
    Id: String,
    Task: Object,
  },
  data() {
    return {
      // variables for general informations
      modelName: null,
      DataFormatInfoText: "",
      DataExampleText: "",
      DataExample: null,
      DataExampleImage:"",
      // different task labels 
      taskLabels: [],

      // give feedbacks when training
      trainingInformant: new TrainingInformant(
        10,
        this.Task.trainingInformation.modelId
      ),

      // take care of communication processes
      communicationManager: new CommunicationManager(9000), // TO DO: to modularize

      // Uploaded Files
      FILES: {},
    };
  },
  methods: {
    saveModel() {
      trainingManager.saveModel();
    },

    async joinTraining(distributed) {
      const filesElement = this.FILES;

      // Check that the user indeed gave a file
      if (filesElement.length == 0) {
        alert("Training aborted. No uploaded file given as input.");
      } else {
        this.$toast.success(`Thank you for your contribution. Image preprocessing has started`);
        setTimeout(this.$toast.clear, 30000)
  
        var processedData = await this.Task.dataPreprocessing(this.FILES);
        
        processedData.accepted = (await checkData(this.FILES)).accepted

        this.$toast.success(`Image preprocessing has finished and training has started`);
        setTimeout(this.$toast.clear, 30000)
        
        await trainingManager.trainModel(distributed, processedData);
      }
    },
    
    addFile: function (file, label) {
      const isImage = file.type.match("image.*"),
      objectURL = URL.createObjectURL(file);
      this.FILES[objectURL] = {label:label, name: file.name};
    },

    inputChange: function (e, label) {
      let counter = 0;
      for (const file of e.target.files) {
        this.addFile(file, label);
        counter += 1;
      }
      console.log(counter + " Files Added");
    },

    getImage(url) {
      if (url == ""){
        return null
      }

      var images = require.context('../../../example_training_data/', false)
      console.log(url)
      return images(url)
    },

    goToTesting() {
      this.$router.push({ 
          path: 'testing',
       });
    },
  },
  components: {
    ImageUploadFrame,
    TrainingInformationFrame,
  },
  async mounted() {
    console.log("Mounted" + this.Task.trainingInformation.modelId)
    console.log(trainingManager)

    // This method is called when the component is created
    this.$nextTick(async function () {
      // initialize information variables
      this.modelName = this.Task.trainingInformation.modelId;
      this.DataFormatInfoText = this.Task.displayInformation.dataFormatInformation;
      this.DataExampleText = this.Task.displayInformation.dataExampleText;
      this.DataExample = this.Task.displayInformation.dataExample;
      this.taskLabels = this.Task.trainingInformation.LABEL_LIST;
      this.DataExampleImage = this.Task.displayInformation.dataExampleImage
      
      // initialize the training manager
      trainingManager = new TrainingManager(this.Task.trainingInformation);

      // initialize training informant
      this.trainingInformant.initializeCharts();

      // initialize communication manager
      this.communicationManager.initializeConnection(
        this.Task.trainingInformation.epoch,
        this
      );

      // initialize training manager
      trainingManager.initialization(
        this.communicationManager,
        this.trainingInformant,
        this
      );
    console.log(trainingManager)

    });
  },
  async unmounted() {
    // close the connection with the server
    this.communicationManager.disconect();
  },
};
</script>