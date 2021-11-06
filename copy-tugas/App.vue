<template>
  <div id="app" class="container">
    <div class="row py-4">
      <cv-satu/>
      <biodata-dua/>
    </div>
  </div>
</template>

<script>
  import CvSatu from './components/CvSatu.vue'
  import BiodataDua from './components/BiodataDua.vue'

export default {
  name: 'app',
  components: {
    CvSatu,
    BiodataDua
  }
}
</script>