<template>
  <div
    class="flex flex-col pt-4 items-right justify-start flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto"
  >
    <div>
      <keep-alive>
      <DescriptionFrame
        v-bind:OverviewText="OverviewText"
        v-bind:LimitationsText="LimitationsText"
        v-bind:TradeOffsText="TradeOffsText"
        v-bind:Id="ModelId"
        v-bind:Task="Task"
        v-if="TradeOffsText"
      />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import DescriptionFrame from "../building_frames/DescriptionFrame";
import {defineComponent} from 'vue'

export default {
  name: 'MainDescriptionFrame', 
  props: {
    Id: String,
    Task: Object,
  },
  data() {
    return {
      OverviewText: "",
      LimitationsText: "",
      TradeOffsText: "",
      ModelId: "",
    };
  },
  components: {
    DescriptionFrame,
  },
  mounted() {
    this.OverviewText = this.Task.displayInformation.overview;
    this.LimitationsText = this.Task.displayInformation.limitations;
    this.TradeOffsText = this.Task.displayInformation.tradeoffs;
    this.ModelId = this.Task.trainingInformation.modelId;
    
  },
};
</script>
