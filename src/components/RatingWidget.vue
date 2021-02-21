<template>
  <div class="rating">
    <span class="price">{{ price }} zł</span>
    <span class="stars" :style="calculatedStars"> </span>
    <span class="number-of-votes">{{ numberOfVotes }}</span>
  </div>
</template>

<script>
export default {
  name: "RatingWidget",

  props: {
    price: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0
    },
    numberOfVotes: {
      type: Number,
      default: 0
    }
  },

  computed: {
    calculatedStars() {
      return '--w: ' + this.rating * 20 + '%;'
    }
  },
}
</script>