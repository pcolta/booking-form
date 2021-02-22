<template>
  <div class="calendar">
    <SelectedMonthYear :monthWithYear="currentMonth" @selectMonth="onSelectedMonth"/>
    <div class="calendar-month">
      <DaysOfWeek/>
      <DaysOfMonth :dateCheckIn="dateCheckIn" :dateCheckOut="dateCheckOut" :datesOfDaysMonth="calendarDays"
                   :today="today" :unavailable-dates="unavailableDates" @selectDay="onSelectDay"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DaysOfWeek from "@/components/DatePicker/DaysOfWeek";
import DaysOfMonth from "@/components/DatePicker/DaysOfMonth";
import SelectedMonthYear from "@/components/DatePicker/SelectedMonthYear";

export default {
  name: "CalendarComponent",

  components: {SelectedMonthYear, DaysOfMonth, DaysOfWeek},

  props: ['dateCheckIn', 'dateCheckOut', 'unavailableDates'],

  data() {
    return {
      currentMonth: moment().format("MMMM YYYY")
    }
  },

  computed: {
    today() {
      return moment().format("YYYY-MM-DD")
    },

    firstDayOfMonth() {
      return moment(this.currentMonth, "MMMM YYYY").startOf('month')
    },

    calendarDays() {
      return [...this.previousMonthsDays, ...this.currentMonthsDays, ...this.nextMonthDays]
    },

    previousMonthsDays() {
      let firstWeekdayOfCurrentMonth = this.firstDayOfMonth.isoWeekday() % 7
      let previousMonthDays = []
      if (firstWeekdayOfCurrentMonth !== 0) {

        for (let i = 1; i <= firstWeekdayOfCurrentMonth; i++) {
          previousMonthDays.unshift({
            date: moment(this.firstDayOfMonth).subtract(i, 'days'),
            isCurrentMonth: false
          })
        }
      }
      return previousMonthDays
    },

    currentMonthsDays() {
      let currentMonthDays = []
      for (let i = 0; i < moment(this.currentMonth, "MMMM YYYY").daysInMonth(); i++) {
        currentMonthDays.push({
          date: moment(this.firstDayOfMonth).add(i, 'days'),
          isCurrentMonth: true
        })
      }
      return currentMonthDays
    },

    nextMonthDays() {
      let nextMonthDays = []
      let lastDayOfMonth = moment(this.currentMonth, "MMMM YYYY").endOf('month')
      let lastWeekdayOfCurrentMonth = lastDayOfMonth.isoWeekday() % 7
      if (lastWeekdayOfCurrentMonth !== 6) {

        for (let i = 0; i < 6 - lastWeekdayOfCurrentMonth; i++) {
          nextMonthDays.push({
            date: moment(lastDayOfMonth).add(i, 'days'),
            isCurrentMonth: false
          })
        }
      }
      return nextMonthDays
    }
  },

  methods: {
    onSelectedMonth(newChosenMonth) {
      this.currentMonth = moment(newChosenMonth);
    },

    onSelectDay(day) {
      this.$emit('selectDate', moment(day).format("YYYY-MM-DD"))
    }
  }

}
</script>