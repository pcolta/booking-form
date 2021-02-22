<template>
  <ul class="days-of-week">
    <li v-for="dayOfWeek in daysOfWeek" :key="dayOfWeek">{{ dayOfWeek }}</li>
  </ul>
</template>

<script>
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default {
  name: "DaysOfWeek",

  data() {
    return {
      daysOfWeek
    }
  }
}
</script>