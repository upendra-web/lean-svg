<template>
  <!-- our main app -->
  <div id="app" class="fit-a relative overflow-hidden">
    <a-header></a-header>
    <a-home></a-home>
    <a-main></a-main>
    <a-p-m></a-p-m>
    <a-credits></a-credits>

    <transition name="fade">
      <div id="loading" class="absolute left-0 bottom-0 bg-white flex-r fit-a" v-show="loading">
        <div id="l-box" class="bg-silver flex-r">
          <img src="/static/img/lean-s.png" alt="">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import aHome from './components/Home'
  import aHeader from './components/Header'
  import aMain from './components/Main'
  import aPM from './components/Markup'
  import aCredits from './components/Credits'

  export default {
    name: 'App',
    
    store: ['loading'],

    components: {
      aHome,
      aHeader,
      aMain,
      aPM,
      aCredits
    },

    mounted() {
      window.onload = ()=> {
        this.loading = false
      }
    }
  }

</script>

<style>
  #loading {
    z-index: 175;
  }

  #l-box {
    height: 150px;
    width: 150px;
    border-radius: 5px
  }

  #l-box img {
    height: 100px;
    width: auto;
    animation: blink .75s infinite alternate;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

</style>
