<template>
  <ul class="days-of-month">
    <li :class="isCurrentDayOrUnavailable(day)" v-for="day in datesOfDaysMonth" :key="String(day.date)"
        @click="selectDay(day.date)"><span :class="classOfDay(day)">{{ dayFormat(day.date) }}</span></li>
  </ul>
</template>

<script>
import moment from 'moment'

export default {
  name: "DaysOfMonth",

  props: {
    datesOfDaysMonth: Array,
    dateCheckIn: String,
    dateCheckOut: String,
    today: String,
    unavailableDates: Array
  },

  methods: {
    dayFormat(day) {
      return moment(day).format("D")
    },

    selectDay(day) {
      if (!this.unavailableDates.includes(moment(day.date).format(("YYYY-MM-DD")))) {
        this.$emit('selectDay', day)
      }
    },

    classOfDay(day) {
      if (moment(day.date).format("YYYY-MM-DD") === this.dateCheckIn || moment(day.date).format("YYYY-MM-DD") === this.dateCheckOut) {
        return "checkDay";
      }
      if (moment(day.date).format("YYYY-MM-DD") === this.today) {
        return "today"
      }
    },

    isCurrentDayOrUnavailable(day) {
      if (day.isCurrentMonth === false) {
        return ''
      }
      if (this.unavailableDates.includes(moment(day.date).format(("YYYY-MM-DD")))) {
        return "disabled"
      }
      return "isCurrentMonth"
    }
  }
}
</script>