<template>
  <div id="app">
    <BookingForm :prices="298" :rating="4.5" :number-of-votes="123"/>
  </div>
</template>

<script>

import BookingForm from "@/components/BookingForm";

export default {
  name: 'App',

  components: {
    BookingForm
  }
}
</script>