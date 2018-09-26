<template>

  <!-- output where svg and markup are shown -->
  <div id="output-con" class="content flex-auto fit-a flex-r relative" style="outline: 0">

    <!-- the output of svg -->
    <transition name="fade" mode="out-in">
      <div class="div-center" id="out-c" style="outline: 0">
        <div id="output" class="flex-r div-center" v-html="showOriginal ? oSvg : svg || '<svg></svg>'" v-show="!showMarkup"
          ref="output"></div>
      </div>
    </transition>

    <!-- the markup of svg -->
    <transition name="fade">
      <div id="markup" class="fit-a absolute" v-show="showMarkup" key="code">
        <code v-html="markup"></code>
      </div>
    </transition>

    <!-- copy markup button -->
    <span class="btn btn-secondary absolute" id="copy-markup" title="Copy as text" @click="copyMarkup"><svg viewBox="0 0 24 24"
        class="icon">
        <path style="fill: #fff" d="M16 1H4C3 1 2 2 2 3v14h2V3h12V1zm3 4H8C7 5 6 6 6 7v14c0 1 1 2 2 2h11c1 0 2-1 2-2V7c0-1-1-2-2-2zm0 16H8V7h11v14z"></path>
      </svg></span>

    <!-- download button -->
    <span class="btn btn-secondary flex-r ls-download absolute" id="download" @click="save" title="Download SVG"></span>

    <!-- comparision -->
    <label class="absolute bg-white" id="size-comp">{{oLength}} → {{cLength}} <span class="ml2" :class="{'green': less, 'red': !less }">{{percent}}%</span></label>

  </div>

</template>

<script>
  import panZoom from 'panzoom';
  import Prism from 'prismjs';
  import '../assets/dracula.css';


  export default {
    store: ['filename', 'oSvg', 'svg', 'showMarkup', 'showOriginal'],

    data() {
      return {
        less: true
      }
    },

    methods: {
      // returning human readable file size
      humanFileSize(size) {
        var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
        return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
      },

      // saving file cross browser
      save() {
        var self = this;
        var filename = self.filename;

        var blob = new Blob([this.svg], {
          type: "image/svg+xml;charset=utf-8"
        });

        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          var elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        }
      },

      // copy markup
      copyMarkup() {
        const el = document.createElement('textarea');
        el.value = this.svg;
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
    },

    watch: {
      // disposing the previous event listener for preventing memory leak
      oSvg: {
        handler() {
          this.pz.dispose();

          this.pz = panZoom(this.$refs.output, {
            smoothScroll: false
          });
        }
      }
    },

    computed: {

      // updating markup when there is a change in svg
      markup() {
        if (!this.showOriginal)
          return Prism.highlight(this.svg, Prism.languages.markup, 'markup');
        return Prism.highlight(this.oSvg, Prism.languages.markup, 'markup');
      },

      // original svg length
      oLength() {
        return this.humanFileSize(this.oSvg.length);
      },

      // current svg length
      cLength() {
        return this.humanFileSize(this.svg.length);
      },

      // returning how much of original svg
      percent() {
        var percent = ((this.svg.length) / this.oSvg.length) * 100;

        if (this.svg.length < this.oSvg.length)
          this.less = true;
        else
          this.less = false;

        return (percent).toFixed(2)
      },
    },

    mounted() {
      // setting the pan and zoom event
      this.pz = panZoom(this.$refs.output, {
        smoothScroll: false
      });

    }
  }

</script>

<style>
  #output-con {
    opacity: 0;
    transition: .5s
  }

  #output-con.active {
    opacity: 1;
  }

  #download {
    bottom: 30px;
    right: 30px;
    padding: 0;
    height: 60px;
    width: 60px;
    font-weight: 300;
    font-size: 25px;
    z-index: 15;
  }

  #copy-markup {
    padding: 8px 10px;
    right: 38px;
    bottom: 105px;
    z-index: 15;
  }

  #copy-markup svg {
    height: 20px;
    width: auto;
  }

  #size-comp {
    bottom: 42px;
    right: 90px;
    font-size: 14px;
    padding: 7px 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    z-index: 10
  }

  #markup {
    overflow: auto;
    padding: 20px
  }

  #markup::-webkit-scrollbar {
    display: none;
  }

  #markup code {
    font-family: Inconsolata, monospace !important;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 15px;
    line-height: 25px
  }

  @media screen and (max-width: 750px) {
    #download {
      bottom: 0px;
    }

    #copy-markup {
      bottom: 0px;
      right: 105px;
    }

    #size-comp {
      background-color: #C9B9B9;
      bottom: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
    }

    .green,
    .red {
      color: #303030
    }
  }

  .div-center {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
