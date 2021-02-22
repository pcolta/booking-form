<template>
  <div class="booking-form">
    <form>
      <RatingWidget :price="prices" :number-of-votes="numberOfVotes" :rating="rating"/>
      <DataPicker :available-dates="availableDates" :unavailable-dates="unavailableDates" :selected-dates="selectedDates" @submit="onSubmit"/>
    </form>
  </div>
</template>

<script>
import RatingWidget from "@/components/RatingWidget";
import DataPicker from "@/components/DatePicker";

export default {
  name: "BookingForm",

  components: {DataPicker, RatingWidget},

  props: ['prices', 'rating', 'numberOfVotes', 'availableDates', 'unavailableDates', 'selectedDates'],

  methods: {
    onSubmit(dataForm) {
      console.log(dataForm)
    }
  }
}
</script>