<template>
  <div class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand font" to="/">Stock Trade</router-link>

        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav mr-auto">
            <router-link to="/portfolio" tag="li" class="nav-item" active-class="active"> <a class="nav-link font">Portfolio</a></router-link>
            <router-link to="/stocks" tag="li" class="nav-item" active-class="active"> <a class="nav-link font">Stocks</a></router-link>
          </ul>

          <ul class="navbar-nav navbar-right">
            <li class="nav-item"><a  @click="endDay" class="nav-link font">End Day</a></li>
            <li class="nav-item dropdown"  >
              <a class="nav-link dropdown-toggle font"
                 @click="changeValue"
                 role="button"
                 data-toggle="dropdown"
                 aria-haspopup="true"
                 aria-expanded="false">
                Save and Load
              </a>
              <div class="dropdown-menu"    :class="{show:isDropdownOpen}" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                <a class="dropdown-item" @click="loadData">Load Data</a>

              </div>
            </li>
          </ul>
          <strong class= 'font funds navbar-text navbar-right'>Funds: {{ funds | currency }}</strong>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizedStocks: 'randomizedStocks',
      Getdata: 'loadData'
    }
    ),
    endDay () {
      this.randomizedStocks()
    },
    changeValue () {
      this.isDropdownOpen = this.isDropdownOpen !== true
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.Getdata()
    }
  }
}
</script>
<style>
  .font{
    font-family: 'Cabin Condensed', sans-serif;
    font-weight: 700;
    color:white;
  }
  .funds{
    color: #000000 !important;
  }
</style>
