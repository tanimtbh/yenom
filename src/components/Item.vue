<template>
    <q-intersection
        transition="scale"
        class="example-item"
      >
        <q-card class="my-card" >
           
           <q-img :src="item.picture" basic >
           <div class="absolute-bottom row">
            <div class="column">
            <div class="text-h6 text-amber-1">{{item.name}}-{{id}}</div>
            <div class="item-end shadow-1 text-teal-1">Price: {{item.price}} SEK</div>
           </div>
           </div>
           </q-img>

      <q-card-section>
        {{item.description}}
        <hr>

        <div class="row">
        <q-btn color="grey-4 col"  text-color="primary" glossy unelevated icon="details" label="Detail" />
         <q-btn @click="addToCart({id:id, name:item.name, price: item.price, qnts: 1})" size="12px" color="grey-4 col q-ml-sm "  text-color="primary" glossy unelevated icon="add_circle" label="Add to Cart" />
        </div>
      </q-card-section>
        </q-card>
      </q-intersection>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'item',
    data () {
    return {
    }
  },
 props: ['item','id'],
 methods:{
   ...mapActions('items',['addToCart'])
 }

}
</script>

<style lang="css">
.example-item{
  height: 377px;
  width: 350px;
}

</style>