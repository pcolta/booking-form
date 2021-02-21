<template>
  <div class="calendar">
    <SelectedMonthYear :chosenDay="chosenDay" @select-day="onSelectedDay"/>
    <div class="calendar-month">
      <DaysOfWeek/>
      <DaysOfMonth :datesOfDaysMonth="datesOfDaysMonth"/>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import DaysOfWeek from "@/components/DataPickerComponents/DaysOfWeek";
import DaysOfMonth from "@/components/DataPickerComponents/DaysOfMonth";
import SelectedMonthYear from "@/components/DataPickerComponents/SelectedMonthYear";

export default {
  name: "CalendarComponent",

  components: {SelectedMonthYear, DaysOfMonth, DaysOfWeek},

  data() {
    return {
      chosenDay: moment()
    }
  },

  computed: {
    today() {
      return this.chosenDay.format("DD-MM-YYYY");
    },

    month() {
      return this.chosenDay.format("M");
    },

    year() {
      return this.chosenDay.format("YYYY");
    },

    countDaysInMonth() {
      return this.chosenDay.daysInMonth();
    },

    datesOfDaysMonth() {
      let monthDays = []
      for (let i = 1; i < Number(this.countDaysInMonth); i++) {
        monthDays.push({
          date: moment(`${this.year}-${this.month}-${i}`).format("DD-MM-YYYY")
        })
      }
      return monthDays
    }
  },

  methods: {
    onSelectedDay(newChosenDay) {
      this.chosenDay = newChosenDay;
    }
  }

}
</script>