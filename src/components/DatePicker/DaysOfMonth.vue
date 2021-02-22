<template>
  <ul class="days-of-month">
    <li v-for="day in datesOfDaysMonth" :key="String(day.date)" :class="isCurrentDayOrUnavailable(day)"
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
      if (this.checkedDays(day) === true) {
        if (moment(day.date).format("YYYY-MM-DD") === this.dateCheckIn) {
          return "isChecked checkIn";
        }
        if (moment(day.date).format("YYYY-MM-DD") === this.dateCheckOut) {
          return "isChecked checkOut";
        } else {
          return "isChecked";
        }
      }
      if (day.isCurrentMonth === false) {
        return ''
      }
      if (this.unavailableDates.includes(moment(day.date).format(("YYYY-MM-DD")))) {
        return "disabled"
      }
      return "isCurrentMonth"
    },

    checkedDays(day) {
      if (this.dateCheckIn && this.dateCheckOut && this.dateCheckIn < this.dateCheckOut) {
        if (this.dateCheckIn <= moment(day.date).format("YYYY-MM-DD") && moment(day.date).format("YYYY-MM-DD") <= this.dateCheckOut)
          return true
      }
      return false
    }
  }
}
</script>