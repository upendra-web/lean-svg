<template>

  <!-- header component -->
  <header id="header" class="fit-w fixed top-0 left-0 bg-white flex items-center px3">

    <!-- the logo -->
    <img src="/static/img/logo.png" alt="" id="logo" @click="main = !main">

    <transition name="fade">
      <span class="btn btn-primary rounded ml3" @click="startTut" v-show="!main">Tutorial</span>
    </transition>

    <transition name="fade">
      <div id="main-options" class="ml3 flex items-center flex-auto" v-show="main" style="transition: .5s">
        
        <!-- add new svg -->
        <span class="s-btn ls-plus dropdown" id="new-svg">
          <div class="dropdown-content flex-r p1" id="add-svg">

            <!-- upload it -->
            <span class="ls-arrow-up btn btn-primary white mr2 relative overflow-hidden" title="Upload SVG">
              <input type="file" name="svgUpload" accept=".svg" class="fit-a left-0 top-0 absolute" @change="filesChange($event.target.files)"
                style="opacity: 0; z-index: 10" />
            </span>

            <!-- paste it -->
            <span class="ls-clipboard btn btn-primary white" title="Paste Markup" @click="pasteMarkup = true"></span>
          </div>
        </span>

        <!-- show svg -->
        <span class="s-btn ls-image" :class="{'active' : !showMarkup}" @click="showMarkup = false" title="Show SVG"></span>
        
        <!-- show markup -->
        <span class="s-btn ls-code" :class="{'active' : showMarkup}" @click="showMarkup = true" title="Show Markup"></span>

        <!-- set bkg of svg viewer -->
        <div id="bg-color" class="dropdown" :style="'background-color: '+ bgValue" title="Set Background of SVG Viewer">
          <div id="color-modal" class="dropdown-content flex-r p1">
            <input type="text" name="" value="#ccc" id="bg-value" @keydown.enter="setBg">
            <!-- <span class="ls-check btn btn-primary white ml2" @click="setBg"></span> -->
          </div>
        </div>

        <!-- show credits -->
        <span class="s-btn" @click="showCredits = true" title="Show Credits"><b>i</b></span>

      </div>
    </transition>
  </header>
</template>

<script>
  import tut from '../assets/tut'

  import aOption from './support/Option'
  import {
    readSVG
  } from '../assets/helpers';

  export default {
    store: ['bgValue', 'filename', 'oSvg', 'main', 'showMarkup', 'showOriginal', 'pasteMarkup', 'showCredits'],

    data() {
      return {
        tut: tut()
      }
    },

    components: {
      aOption
    },

    methods: {
      // for reading files
      filesChange(files) {
        var self = this;

        readSVG(files[0], function (fileInfo) {

          self.filename = fileInfo.name;
          self.oSvg = fileInfo.content;
          self.main = true;

        });
      },

      // for setting bkg of svg viewer
      setBg(e) {
        // console.log(e)
        this.bgValue = (this.showMarkup ? this.bgValue : e.target.value);
      },

      // to start tutorial
      startTut() {
        this.oSvg = this.tut;
        this.pasteMarkup = false;
        this.main = true;
      }
    }
  }

</script>

<style>
  #header {
    height: 70px;
    z-index: 150;
  }

  #logo {
    height: 60%;
    width: auto
  }

  #main-options>.s-btn {
    color: #6C5353;
    transition: .5s;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center
  }

  #main-options>span {
    margin-right: 10px
  }

  #main-options>.s-btn:hover,
  #main-options>.s-btn.active {
    color: #916F6F;
    background-color: rgba(0, 0, 0, 0.2)
  }

  #bg-color {
    display: block;
    height: 30px;
    width: 30px;
    border: 4px solid #bbb;
    margin-right: 10px;
    cursor: pointer;
    transition: .5s
  }

  #color-modal {
    top: calc(100% + 4px);
    left: -4px;
  }

  #bg-value {
    font-family: 'Muli';
    height: 36px;
    font-size: 18px;
    width: 100px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    position: absolute;
    opacity: 0;
    display: none;
    background-color: rgb(240, 240, 240);
    top: 100%;
    transform: translateX(calc(-50% + 13px));
    transition: opacity .5s;
    box-shadow: 3px 3px #916F6F;
    z-index: 10
  }

  .dropdown:hover .dropdown-content {
    display: flex;
    opacity: 1
  }

</style>
