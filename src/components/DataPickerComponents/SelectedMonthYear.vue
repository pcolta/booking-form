<template>
  <div>{{ chosenMonth }}</div>
</template>

<script>
export default {
  name: "SelectedMonthYear",

  props: {
    chosenDay: Object
  },

  computed: {
    chosenMonth() {
      return this.chosenDay.format("MMMM YYYY")
    }
  }
}
</script>