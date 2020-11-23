<template>
  <q-page class="padding">
  <div class="">
    <div class="row justify-center q-gutter-xs">
      <q-intersection
        v-for="index in 10"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card class="q-ma-xs">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
            <div class="text-subtitle2">by John Doe</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
  </q-page>
</template>
<style lang="sass" scoped>
.example-item
  height: 350px
  width: 350px
</style>

<script>
export default {

}
</script>
