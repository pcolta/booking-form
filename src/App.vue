<template>
  <div id="app">
    <BookingForm :prices="298" :rating="4.5" :number-of-votes="123" :unavailable-dates="['2021-02-05']"/>
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