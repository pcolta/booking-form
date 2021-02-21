<template>
  <div class="booking-form">
    <form>
      <RatingWidget :price="prices" :number-of-votes="numberOfVotes" :rating="rating"/>
      <DataPicker :available-dates="availableDates" :unavailable-dates="unavailableDates" :selected-dates="selectedDates"/>
    </form>
  </div>
</template>

<script>
import RatingWidget from "@/components/RatingWidget";
import DataPicker from "@/components/DataPicker";

export default {
  name: "BookingForm",

  components: {DataPicker, RatingWidget},

  props: ['prices', 'rating', 'numberOfVotes', 'availableDates', 'unavailableDates', 'selectedDates']
}
</script>