<template>
  <div>
    <input @click="onShow"/><input @click="onShow"/>
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