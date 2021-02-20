<template>
  <div>
    <InputDataComponent @show="onShow"/>
    <div v-if="show">
      <CalendarComponent />
    </div>
  </div>
</template>

<script>
import InputDataComponent from "@/components/DataPickerComponents/InputDataComponent";
import CalendarComponent from "@/components/DataPickerComponents/CalendarComponent";

export default {
  name: "DataPicker",

  components: {CalendarComponent, InputDataComponent},

  props: {
    availableDates: Array,
    unavailableDates: Array,
    selectedDates: Array
  },

  data() {
    return {
      show: false
    }
  },

  methods: {
    onShow() {
      this.show = !this.show;
    }
  }
}
</script>