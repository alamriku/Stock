<template>
  <div class="col-sm-6 col-md-6">
    <div class="card">
      <div class="card-header bg-info font">
        {{stock.name}} : Price {{ stock.price }} |  Quantity {{ stock.quantity }}
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          >
          <button
            class="btn btn-danger ml-2 font"
            @click="sellStock"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          >Sell</button>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSellOrder(order)
    }

  }

}
</script>
<style scoped>
  .font{
    font-family: 'Cabin Condensed', sans-serif;
    font-weight: 700;
    color:white;
  }
</style>
