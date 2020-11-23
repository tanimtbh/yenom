<template>
  <q-layout view="hHr lpR lFr">
    <q-header>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
         Yenom Solution
        </q-toolbar-title>

        <q-btn class="absolute-right q-ma-sm"
          flat
          dense
          round
          icon="shopping_cart"
          aria-label="Cart"
          @click="rightDrawerOpen = !rightDrawerOpen"
        >
        <q-badge color="red" floating>{{totalCart}}</q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-grey-1">
        <q-tabs
        class="text-black"
        indicator-color="primary"
        dense
        active-color="primary"
        >
             
            <q-route-tab
            
            v-for="link in essentialLinks" 
            no-caps
             exact
            :key="link.title"
            :to="link.link"
            :icon="link.icon" 
            :label="link.title" />


        </q-tabs>

      </q-footer>

    <q-drawer
      
      :breakpoint="767"
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      elevated
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigations
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered >
      <!-- drawer content -->
        <q-btn
          flat
          round
          icon="forward"
          aria-label="Cart"
          @click="rightDrawerOpen = !rightDrawerOpen"
          content-class="bg-grey-1"
        />

        <q-item v-for="item in cart" :key="item.name">
        <q-item-section>
          <q-item-label>{{item.name}}</q-item-label>
          <q-item-label caption>
            <div class="row">
            <q-input
            dense
      v-model.number="item.qnts"
      type="number"
      filled
      style="max-width: 50px; max-hight:30px"
    />
    <span>X {{item.price}}</span>
            <q-btn-group dense outline class="col justify-end">
            <q-btn   icon="remove" />
            <q-btn @click="addToCart({id:item.id, name:item.name, price: item.price, qnts: 1})"  icon="add" />
            </q-btn-group>
            </div>
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-badge color="teal" :label="(item.price*item.qnts)" />
        </q-item-section>
      </q-item>
      <hr>
      <div class="row">
      <div class="q-ml-sm">
        Total
      </div>
      <q-space />
       <div class="q-mr-sm">
        {{totalPrice}} SEK
      </div>

      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { mapGetters } from "vuex";
import { mapActions } from "vuex";


const linksData = [
  {
    title: 'Home',
    caption: 'Some Hints will come here',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Menu',
    caption: 'Some Hints will come here',
    icon: 'menu_book',
    link: '/menu'
  },
    {
    title: 'Reservation',
    caption: 'Some Hints will come here',
    icon: 'event_seat',
    link: '/reservation'
  },
  {
    title: 'Gallery',
    caption: 'Some Hints will come here',
    icon: 'photo_library',
    link: '/gallery'
  },
    {
    title: 'Contact us',
    caption: 'Some Hints will come here',
    icon: 'contact_page',
    link: '/contact'
  },
  {
    title: 'About Developers',
    caption: 'Some Hints will come here',
    icon: 'groups',
    link: '/developers'
  },
  
];


export default {
  name: 'Layout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      essentialLinks: linksData,
      qnts: 1,
    }
  },
   computed: {
    ...mapGetters('items', ['cart']),
    ...mapGetters('items', ['totalCart']),
    ...mapGetters('items', ['totalPrice']),
    
  },

  methods:{
   ...mapActions('items',['addToCart'])
 
 }
}
</script>
<style scoped>
@media screen and (min-width: 768px) {
  .q-footer {
     display: none;
  }
}
</style>
