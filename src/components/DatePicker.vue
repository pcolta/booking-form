<template>
  <div>
    <InputDataComponent @show="onShow" :dateCheckIn="dayCheckIn" :dateCheckOut="dayCheckOut" @selectDate="onSelectDate"/>
    <div v-if="show">
      <CalendarComponent @selectDate="onSelectDate" :dateCheckIn="dayCheckIn" :dateCheckOut="dayCheckOut" :unavailable-dates="unavailableDates"/>
    </div>
    <button @click="onSubmit" type="submit" class="submit-form">Wyślij formularz</button>
  </div>
</template>

<script>
import InputDataComponent from "@/components/DatePicker/InputData";
import CalendarComponent from "@/components/DatePicker/Calendar";

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
      show: false,
      showCheckIn: false,
      showCheckOut: false,
      dayCheckIn: '',
      dayCheckOut: ''
    }
  },

  methods: {
    onShow(inputElement) {
      this.show = !this.show;
      if (this.show === false) {
        this.showCheckIn = false;
        this.showCheckIn = false;
      }
      if (inputElement === 'checkIn') {
        this.showCheckIn = true;
        this.showCheckOut = false;
      } else {
        this.showCheckIn = false;
        this.showCheckOut = true;
      }
    },

    onSelectDate(newValue) {
      if(this.showCheckIn === true) {
        this.dayCheckIn = newValue;
      } else {
        this.dayCheckOut = newValue;
      }
    },

    onSubmit() {
      if(this.dayCheckIn && this.dayCheckOut) {
        this.$emit('submit', {dayCheckIn: this.dayCheckIn, dayCheckOut: this.dayCheckOut})
      }
    }
  }
}
</script>