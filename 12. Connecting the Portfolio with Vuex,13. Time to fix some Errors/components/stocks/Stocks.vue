<template>
  <div class="row">
    <app-stock v-bind:key="stock.id" v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock'
export default {

  components: {
    appStock: Stock
  },
  computed: {
    // this is to get the data after initialize of app from App.vue file, gettors.stokcs is in store/modules/stocks.js
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>
