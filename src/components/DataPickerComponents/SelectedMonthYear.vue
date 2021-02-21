<template>
  <div class="selected-month-year">
    <div @click="previousMonth">
      <i class="fas fa-chevron-left"/>
    </div>
    <div class="month-year">{{ formattedMonthWithYear }}</div>
    <div @click="nextMonth">
      <i class="fas fa-chevron-right"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "SelectedMonthYear",

  props: {
    monthWithYear: String
  },

  computed: {
    formattedMonthWithYear() {
      return moment(this.monthWithYear).format("MMMM YYYY")
    }
  },

  methods: {
    previousMonth() {
      let newSelectedDate = moment(this.monthWithYear).subtract(1, "months").format("MMMM YYYY");
      this.$emit("selectMonth", newSelectedDate);
    },

    nextMonth() {
      let newSelectedDate = moment(this.monthWithYear).add(1, "months").format("MMMM YYYY");
      this.$emit("selectMonth", newSelectedDate);
    }
  }
}
</script>