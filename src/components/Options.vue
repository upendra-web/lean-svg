<template>
  <div class="bg-white" id="options">

    <h4 style="margin-left: 20px" class="mr3">Global Settings</h4>
    <a-option label="Show Original" v-model="showOriginal"></a-option>
    <a-option label="Prettify Markup" v-model="pluginsConfig.js2svg.pretty" @input="optionsChanged"></a-option>

    <div class="flex-c1" id="precision">
      <label class="mb2">Float precision <span class="ml2 fi white rounded">{{ pluginsConfig.floatPrecision }}</span></label>

      <input type="range" step="1" min="1" max="10" v-model="pluginsConfig.floatPrecision" id="float-prec" class="fit-w mb2"
        @input="optionsChanged">
    </div>

    <a-option label="Flatten SVG" v-model="flatten" @input="optionsChanged"> <span title="Experiment Feature! Use with Caution."
        class="caution rounded ml2">!</span></a-option>

    <h4 style="margin-left: 20px" class="mr3">Features</h4>
    <a-option v-for="(p, i) in pluginsDB" :key="i" :name="p.id" class="mr2" :label="p.name" v-model="pluginsConfig.plugins[i][p.id]"
      @input="optionsChanged"></a-option>

    <span class="btn btn-secondary ml2 mb3 mt2" @click="resetOptions">Reset all</span>
  </div>
</template>

<script>
  import {
    plugins,
    pluginsConfig
  } from '../assets/plugins'

  import aOption from './support/Option';

  import {
    SVGO
  } from '../assets/m-svgo/svgo';

  import flatten from '../assets/flatten';

  var svgo, intv;
  var orgConfig = require('../assets/plugins');

  export default {
    components: {
      aOption
    },

    store: ['showOriginal', 'oSvg', 'svg', 'reset', 'undo'],

    data() {
      return {
        pluginsDB: plugins,
        pluginsConfig: pluginsConfig,
        flatten: false,
        precision: 3,
        orgConfig: {},
        prev: ''
      }
    },

    watch: {
      oSvg: {
        handler(val) {
          var self = this;

          self.flatten = false;

          svgo.optimize(val).then(function (result) {
            self.svg = result.data;
          });

        }
      },

      reset: {
        handler(val) {
          var self = this;

          if (val)
            intv = setInterval(() => {
              self.reset = false;
            }, 5000);

        }
      },

      undo: {
        handler(val) {
          if (val) {
            console.log(val, this)
            clearInterval(intv)
            this.pluginsConfig = JSON.parse(JSON.stringify(this.prev));
            this.optionsChanged();
            this.undo = false;
            this.reset = false;
          }
        }
      }
    },

    mounted() {
      svgo = new SVGO(this.pluginsConfig);
      this.orgConfig = JSON.parse(JSON.stringify(pluginsConfig))
    },

    methods: {
      optionsChanged() {
        var self = this;
        var svg = self.oSvg;

        svgo = new SVGO(this.pluginsConfig);

        if (flatten) {
          flatten(document.querySelector('#output>svg'));
          self.svg = document.getElementById('output').innerHTML;
        }

        svgo.optimize(self.flatten ? self.svg : self.oSvg).then(function (result) {
          self.svg = result.data;
        });
      },

      resetOptions() {
        this.reset = true;
        this.prev = JSON.parse(JSON.stringify(this.pluginsConfig));
        this.pluginsConfig = JSON.parse(JSON.stringify(this.orgConfig));
        this.optionsChanged();
      },
    }
  }

</script>

<style>
  #options {
    height: 95%;
    transform: translateX(calc(100% + 20px));
    transition: .5s;
    overflow-y: auto
  }

  #options.active {
    transform: translateX(0);
  }

  #float-prec {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  #float-prec::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #6C5353;
    cursor: pointer;
  }

  #float-prec::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background-color: #6C5353;
    cursor: pointer;
  }

  #precision {
    padding: 15px 20px;
    font-size: 16px;
  }

  .fi {
    padding: 5px 10px;
    background-color: #6C5353;
    font-size: 14px
  }

  .caution {
    display: inline-block;
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 12px;
    color: #fff;
    font-weight: 800;
    background-color: #6C5353;
    text-align: center;
  }

</style>
