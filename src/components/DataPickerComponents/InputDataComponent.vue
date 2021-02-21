<template>
  <div class="input-date-component">
    <span class="dates">Dates</span>
    <div class="input-wrapper">
      <input @click="onShow"/>
      <i class="fas fa-arrow-right"></i>
      <input @click="onShow"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputDataComponent",

  methods: {
    onShow() {
      this.$emit('show')
    }
  }
}
</script>