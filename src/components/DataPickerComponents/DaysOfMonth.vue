<template>
  <ul class="days-of-month">
    <li class="day" v-for="day in datesOfDaysMonth" :key="day.date">{{ dayFormat(day) }}</li>
  </ul>
</template>

<script>
import moment from 'moment'

export default {
  name: "DaysOfMonth",

  props: {
    datesOfDaysMonth: Array
  },

  methods: {
    dayFormat(day) {
      return moment(day).format("D")
    }
  }
}
</script>