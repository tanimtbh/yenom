<template>
  <q-page class="">
    <div class="exp q-mt-sm q-mx-sm text-bold">
      <div class="txt">filter</div>
      <q-tabs
        v-model="tab"
        class="text-black"
      >
        <q-tab name="mails" label="All" />
        <q-tab name="alarms" label="Meat" />
        <q-tab name="movies" label="Oil" />
        <q-tab name="mails" label="All" />
        <q-tab name="alarms" label="Meat" />
        <q-tab name="movies" label="Oil" />
        <q-btn-dropdown auto-close stretch flat label="More...">
          <q-list>
            <q-item clickable @click="tab = 'blabla'">
              <q-item-section>Movies</q-item-section>
            </q-item>

            <q-item clickable @click="tab = 'vantilater'">
              <q-item-section>Photos</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-tabs>
    </div>
 <div class="q-pa-md">
    <div class="row justify-center q-gutter-xs">
      <item
      v-for="(item, key) in itemlist"
      :key="key"
      :item="item"
      :id="key"
      >
         
      </item>
    </div>
  </div>



   <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
      :direction-links="true"
    >
    </q-pagination>
  </div>

  </q-page>
</template>
<style lang="css">

.exp{
    height:auto;
    width:auto;
    border:1px dotted #29998e;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    background-color:#fafafa;
}

.txt{
    width:30px;
    color:#29998e;
    margin-top:-10px;
    margin-left:5px;
    background:white;
}


</style>

<script>
import { mapGetters } from "vuex";
export default {
  
  data () {
    return {
      tab: 'Rice',
      current: 3,
    }
  },
  computed: {
    ...mapGetters('items', ['itemlist'])
  },
  components:{
    'item': require('components/Item.vue').default

  }
}
</script>
