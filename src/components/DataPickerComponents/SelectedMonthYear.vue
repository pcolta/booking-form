<template>
  <div>
    <i class="fas fa-chevron-left"></i>
    <div>{{ chosenMonth }}</div>
    <i class="fas fa-chevron-right"></i>
    </div>
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