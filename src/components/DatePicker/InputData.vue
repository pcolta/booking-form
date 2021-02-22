<template>
  <div class="input-date-component">
    <span class="dates">Dates</span>
    <div class="input-wrapper">
      <input @click="onShow('checkIn')" placeholder="Check In" @input="onSelectDate($event.target.value)" v-model="dayCheckIn" required/>
      <i class="fas fa-arrow-right"></i>
      <input @click="onShow('checkOut')" placeholder="Check Out" @input="onSelectDate($event.target.value)" v-model="dayCheckOut" required/>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputDataComponent",

  props: ['dateCheckIn', 'dateCheckOut'],

  data() {
    return {
      dayCheckIn: '',
      dayCheckOut: ''
    }
  },

  methods: {
    onShow(inputElement) {
      this.$emit('show', inputElement)
    },

    onSelectDate(day) {
      this.$emit('selectDate', day)
    },

    setDayCheckIn(newValue) {
      this.dayCheckIn = newValue;
    },

    setDayCheckOut(newValue) {
      this.dayCheckOut = newValue;
    },
  },

  watch: {
    dateCheckIn(newValue) {
      if(newValue) {
        this.setDayCheckIn(newValue)
      }
    },

    dateCheckOut(newValue) {
      if(newValue) {
        this.setDayCheckOut(newValue)
      }
    }
  }
}
</script>