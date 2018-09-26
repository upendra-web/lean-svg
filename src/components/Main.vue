<template>

  <!-- main component where code, svg and all other options are shown -->
  <transition name="su" @after-enter="moveOptions" @beforeLeave="moveOptions">

    <div id="main" class="absolute left-0 bottom-0 nowrap fit-w flex" key="main" :style="{ backgroundColor: bgValue }"
      v-show="main" :class="{'dark-main': showMarkup}">

      <!-- output panel -->
      <a-output></a-output>

      <!-- options panel -->
      <div class="col flex-r relative fit-h" id="options-container">
        <a-options></a-options>
      </div>

      <!-- reset message -->
      <transition name="fade">
        <a-msg v-show="reset">
          <div class="flex items-center justify-between">
            <span class="mr4">Settings reset</span>
            <div>
              <span class="mr2" @click="undo = true" id="undo-settings"><b>UNDO</b></span>
              <span class="ls-x" @click="closeReset"></span>
            </div>
          </div>
        </a-msg>
      </transition>
    </div>

  </transition>

</template>

<script>
  import anime from 'animejs';
  import aOptions from './Options';
  import aMsg from './support/Msg';
  import aOutput from './Output';

  export default {
    store: ['bgValue', 'main', 'svg', 'showMarkup', 'reset', 'undo'],

    components: {
      aOptions,
      aOutput,
      aMsg
    },

    methods: {

      // to move the options panel into view
      moveOptions() {
        var options = document.getElementById('options');
        var output = document.getElementById('output-con');
        if (this.main) {
          options.classList.add('active');
          output.classList.add('active');
        } else {
          options.classList.remove('active')
          output.classList.remove('active')
        }
      },

      // to close reset and set everything to original state
      closeReset() {
        this.undo = false;
        this.reset = false;
      }
    },

  }

</script>

<style>
  #main {
    z-index: 125;
    height: calc(100% - 70px);
    transition: .3s
  }

  .content svg {
    height: 75%;
    width: 75%;
  }

  #options-container {
    padding: 0 20px
  }

  #undo-settings {
    cursor: pointer;
  }

  .dark-main {
    background-color: #282936 !important;
  }

  @media screen and (max-width: 750px) {
    #main.flex {
      flex-direction: column
    }

    #options-container {
      padding: 0;
      width: 100%;
      height: 50%;
    }

    #options {
      width: 100%;
      height: 100% !important;
    }
  }

</style>
