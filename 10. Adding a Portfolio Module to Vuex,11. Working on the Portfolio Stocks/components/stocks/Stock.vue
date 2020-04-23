<template>
 <div class="col-sm-6 col-md-6">
   <div class="card">
     <div class="card-header bg-info font">
       {{stock.name}} : Price {{ stock.price }}
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
           @click="buyStock"
           :disabled="quantity <= 0 || !Number.isInteger(quantity)"
           >Buy</button>
       </div>

     </div>
   </div>
 </div>
</template>
<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
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
