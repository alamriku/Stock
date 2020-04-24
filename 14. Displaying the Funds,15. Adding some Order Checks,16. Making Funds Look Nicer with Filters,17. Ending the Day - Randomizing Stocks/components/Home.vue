<template>
  <div class="row">
    <div class="col-md-12">
      <h1 class="text-font">Trade or View your portfolio</h1>
      <h6 class="text-font">You may Save & Load your Data</h6>
      <h6 class="text-font">Click on "End Day" to begin in New Day! </h6>
      <hr class="text-font">
      <p class="text-font">Your Funds: {{ funds | currency }}</p>
    </div>

  </div>
</template>
<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>
<style>
  .text-font{
    font-family: 'Cabin Condensed', sans-serif;
    font-weight: 700;
    color:black;
  }
</style>
