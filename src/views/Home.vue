<template>
  <div class="home">
    <tradingview/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import tradingview from '@/pages/tradingview'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    tradingview
  }
}
</script>

<style>
.home {
  height: 80%;
  width: 80%;
}
</style>



