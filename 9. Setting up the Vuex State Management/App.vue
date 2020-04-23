<template>
  <div class="container">
      <app-header></app-header>
    <div class="row mt-5">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    appHeader: Header
  },
  created () {
    // this is for initilize the app initstocks is on module/stocks.js file
    this.$store.dispatch('initStocks')
  }
}
</script>

<style scoped>
 body{
   padding: 30px;

 }
</style>
