<template>

  <!-- modal for pasting markup -->
  <transition name="fade">
    <div id="markup-paste" class="modal-container flex-r" v-show="pasteMarkup" @click="pasteMarkup = false">
      <div id="paste-modal" class="modal" @click.stop>
        <textarea class="rounded" placeholder="Paste your SVG here, and remember SVG only :)" name="pm" id="markup-input"
          v-model="value" ref="pm"></textarea>
        <div id="pm-btns" class="flex-r2">
          <span class="ls-check btn btn-primary mr1" :class="{ 'is-disabled': !value }" id="send-markup" @click="setMarkup"></span>
          <span class="btn btn-primary ls-x" @click="pasteMarkup = false"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    store: ['pasteMarkup', 'main', 'oSvg'],
    data() {
      return {
        value: ''
      }
    },

    methods: {

      // adding markup
      setMarkup() {
        const val = this.value.trim();

        if (val.includes('</svg>')) {
          this.oSvg = this.value;
          this.pasteMarkup = false;
          this.main = true;
          this.value = '';
        }

      }
    }
  }

</script>

<style>
  #markup-paste {
    z-index: 170;
  }

  #markup-input {
    height: 60vh;
    width: 50vw;
  }

  #markup-paste textarea {
    padding: 10px;
    overflow: auto;
  }

  #markup-paste textarea:focus {
    border: 1px solid #886868;
    outline: 1px solid #886868;
  }

</style>
