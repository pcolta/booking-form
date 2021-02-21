<template>
  <ul class="days-of-month">
    <li :class="day.isCurrentMonth === true ? 'isCurrentMonth' : ''" v-for="day in datesOfDaysMonth" :key="String(day.date)" @click="selectDay(day.date)"><span :class="classOfDay(day)">{{ dayFormat(day.date) }}</span></li>
  </ul>
</template>

<script>
import moment from 'moment'

export default {
  name: "DaysOfMonth",

  props: {
    datesOfDaysMonth: Array,
    dateCheckIn: String,
    dateCheckOut: String
  },

  methods: {
    dayFormat(day) {
      return moment(day).format("D")
    },

    selectDay(day) {
      this.$emit('selectDay', day)
    },

    classOfDay(day) {
      if(moment(day.date).format("YYYY-MM-DD") === this.dateCheckIn || moment(day.date).format("YYYY-MM-DD") === this.dateCheckOut) {
        return "checkDay";
      }
    }
  }
}
</script>