<template>
  <div class="selected-month-year">
    <div @click="previousMonth">
      <i class="fas fa-chevron-left" />
    </div>
    <div class="month-year">{{ chosenMonth }}</div>
    <i class="fas fa-chevron-right" @click="nextMonth"/>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "SelectedMonthYear",

  props: {
    chosenDay: Object
  },

  computed: {
    chosenMonth() {
      return this.chosenDay.format("MMMM YYYY")
    }
  },

  methods: {
    previousMonth() {
      let newSelectedDate = moment().subtract(1, "month");
      this.$emit("selectDay", newSelectedDate);
    },

    nextMonth() {
      let newSelectedDate = moment().add(1, "month");
      this.$emit("selectDay", newSelectedDate);
    }
  }
}
</script>