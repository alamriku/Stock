<template>
  <div class="container">
      <app-header></app-header>
    <div class="row mt-5">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
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
    // this is for initialize the app initstocks is on module/stocks.js file
    this.$store.dispatch('initStocks')
  }
}
</script>

<style scoped>
  body{
    padding: 30px;

  }

  .slide-enter-active{
    animation: slide-in 200ms ease-in-out;
  }

  .slide-leave-active{
    animation: slide-out 200ms ease-in-out;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
