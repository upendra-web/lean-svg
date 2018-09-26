<template>

  <!-- home page -->
  <div id="home" class="fit-a flex-r">

    <!-- intro text section -->
    <div class="col col-5 fit-h flex-c1" id="intro-text">
      <h1 class="m0 mb2 tg-line">Less Lines</h1>
      <h1 class="m0 tg-line">Small Size</h1>

      <p>Fed up with the <b>useless lines</b> present in SVG files, or with large sizes of SVG files? Or worried with
        the <b>transforms</b> in SVG causing hindrance to animations?</p>

      <p>Don't you worry <b>Lean-SVG</b> is here!</p>

      <div class="flex" id="intro-btns">

        <div id="file-upload" class="relative overflow-hidden btn btn-big btn-primary mr2">
          <span class="ls-plus"></span> <b>Upload a SVG</b>
          <input type="file" name="svgUpload" accept=".svg" class="absolute" @change="filesChange($event.target.files)" />
        </div>

        <div class="btn btn-big" @click="pasteMarkup = true"><span class="ls-clipboard"></span> <b>Paste Markup</b></div>
      </div>
    </div>

    <!-- intro image section -->
    <div class="col col-7 fit-h flex-r relative" id="intro-img">

      <svg id="intro-svg" width="338.06mm" height="92.173mm" version="1.1" viewBox="0 0 338.06 92.173" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clipPath5124">
            <path d="m121.15 240.13a19.227 52.101 75 0 1-10.359 3.2359 19.227 52.101 75 0 1-10.594 2.3929l-2.1098 7.8734a26.727 59.601 75 0 0 14.645-3.0215 26.727 59.601 75 0 0 14.183-4.7166z"
              fill="#6c5353" />
          </clipPath>
          <clipPath id="clipPath1043">
            <path d="m124.12 217.47a19.227 52.101 75 0 1-10.359 3.2358 19.227 52.101 75 0 1-10.594 2.3929l-2.1098 7.8733a26.727 59.601 75 0 0 14.645-3.0215 26.727 59.601 75 0 0 14.183-4.7166z"
              fill="#c8b7b7" />
          </clipPath>
        </defs>
        <g id="the-lean">
          <path d="m184.06 53.434a30.883 83.685 75 0 1-16.639 5.1975 30.883 83.685 75 0 1-17.016 3.8435l-3.3888 12.646a42.929 95.732 75 0 0 23.523-4.8532 42.929 95.732 75 0 0 22.78-7.5759z"
            fill="#6c5353" />
          <g transform="matrix(1.6062 0 0 1.6062 -10.533 -332.26)" clip-path="url(#clipPath5124)" fill="#6c5353" stroke="#808080"
            stroke-linecap="round" stroke-width=".565">
            <path d="m112.78 250.67-0.94861-3.5402" />
            <path d="m109.19 251.58-0.1999-2.5532" />
            <path d="m116.32 249.56-1.1035-2.3111" />
            <path d="m105.5 252.43 0.13542-3.7383" />
            <path d="m119.99 248.47-2.0576-3.1371" />
            <path d="m123.37 247.37-1.6234-2.0476" />
            <path d="m102 252.98 0.5406-2.5772" />
          </g>
          <path d="m193.32 49.598a83.685 30.883 30 0 1-15.441-8.0905 83.685 30.883 30 0 1-14.75-9.3141l-11.339 6.546a95.732 42.929 30 0 0 20.065 13.201 95.732 42.929 30 0 0 21.465 10.751z"
            fill="#916f6f" />
          <path d="m188.83 17.052a30.883 83.685 75 0 1-16.639 5.1975 30.883 83.685 75 0 1-17.016 3.8435l-3.3888 12.646a42.929 95.732 75 0 0 23.523-4.8532 42.929 95.732 75 0 0 22.78-7.5759z"
            fill="#c8b7b7" />
          <g transform="matrix(1.6062 0 0 1.6062 -10.533 -332.26)" clip-path="url(#clipPath1043)" fill="#ccc" stroke="#f2f2f2"
            stroke-linecap="round" stroke-width=".565">
            <path d="m115.76 228.02-0.94861-3.5403" />
            <path d="m112.16 228.93-0.1999-2.5532" />
            <path d="m119.3 226.91-1.1035-2.3111" />
            <path d="m108.47 229.78 0.13542-3.7383" />
            <path d="m122.97 225.82-2.0576-3.1371" />
            <path d="m126.34 224.72-1.6234-2.0477" />
            <path d="m104.98 230.33 0.54059-2.5772" />
          </g>
        </g>
        <g id="left-total">
          <rect transform="translate(30.762 -171.54)" x="-29.39" y="172.91" width="89.43" height="89.43" rx="1.5358" ry="1.5358"
            fill="#241c1c" stroke="#241c1c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7432" />
          <g transform="translate(36.718 -173.63)">
            <rect x="-21.219" y="185.76" width="12.284" height="2.4568" fill="#ff8080" />
            <rect x="-21.219" y="192.31" width="27.519" height="2.4568" fill="#93aca7" />
            <rect x="8.8387" y="192.31" width="11.082" height="2.4568" fill="#f95" />
            <rect x="22.727" y="192.31" width="17.229" height="2.4568" fill="#fd5" />
            <rect x="-21.219" y="198.85" width="12.284" height="2.4568" fill="#ff8080" />
            <rect x="-5.6606" y="198.85" width="8.0079" height="2.4568" fill="#8dd35f" />
            <rect x="-21.219" y="205.4" width="24.846" height="2.4568" fill="#93aca7" />
            <rect x="6.2728" y="205.4" width="11.082" height="2.4568" fill="#f95" />
            <rect x="-21.219" y="211.95" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="-5.9338" y="211.95" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="9.6245" y="211.95" width="22.749" height="2.4568" fill="#fd5" />
            <rect x="-21.219" y="218.49" width="27.519" height="2.4568" fill="#ff8080" />
            <rect x="8.8387" y="218.49" width="11.082" height="2.4568" fill="#93aca7" />
            <rect x="22.727" y="218.49" width="17.229" height="2.4568" fill="#8dd35f" />
            <rect x="-21.219" y="225.04" width="12.284" height="2.4568" fill="#93aca7" />
            <rect x="-5.6606" y="225.04" width="8.0079" height="2.4568" fill="#93aca7" />
            <rect x="-21.219" y="231.58" width="24.846" height="2.4568" fill="#f95" />
            <rect x="6.2728" y="231.58" width="11.082" height="2.4568" fill="#fd5" />
            <rect x="19.906" y="231.58" width="11.082" height="2.4568" fill="#8dd35f" />
            <rect x="-21.219" y="244.67" width="24.846" height="2.4568" fill="#fd5" />
            <rect x="6.2728" y="244.67" width="7.8743" height="2.4568" fill="#93aca7" />
            <rect x="-21.219" y="251.22" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="-5.9338" y="251.22" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="9.6245" y="251.22" width="22.749" height="2.4568" fill="#ff8080" />
            <rect x="-21.219" y="238.13" width="12.284" height="2.4568" fill="#ff8080" />
          </g>
          <g transform="translate(30.762 -171.54)" id="left-svg">
            <rect x="-27.679" y="174.62" width="86.008" height="86.008" rx="0" ry="0" fill="#6c5353" stroke-width="0" />
            <g transform="matrix(.48494 -.48494 .48494 .48494 -142.18 165.89)" stroke="#241c1c">
              <path d="m64.011 197.78h90.07" fill="none" stroke-width="4" />
              <path transform="scale(1,-1)" d="m148.54-237.28a39.499 39.499 0 0 1-19.749 34.207 39.499 39.499 0 0 1-39.499-1e-5 39.499 39.499 0 0 1-19.749-34.207"
                fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
              <g fill="#c8b7b7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <circle cx="64.011" cy="197.78" r="4.9111" />
                <circle cx="154.08" cy="197.78" r="4.9111" />
                <rect x="64.439" y="232.17" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
                <rect x="143.44" y="232.17" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
                <rect x="103.94" y="192.67" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
              </g>
            </g>
          </g>
        </g>
        <g id="right-total">
          <rect transform="translate(30.762 -171.54)" x="216.5" y="172.91" width="89.43" height="89.43" rx="1.5358" ry="1.5358"
            fill="#241c1c" stroke="#241c1c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.7432" />
          <g transform="translate(41.314 -160.74)">
            <rect x="220.07" y="184.9" width="12.284" height="2.4568" fill="#ff8080" />
            <rect x="220.07" y="191.8" width="27.519" height="2.4568" fill="#93aca7" />
            <rect x="250.13" y="191.8" width="11.082" height="2.4568" fill="#f95" />
            <rect x="264.02" y="191.8" width="17.229" height="2.4568" fill="#fd5" />
            <rect x="220.07" y="198.7" width="12.284" height="2.4568" fill="#ff8080" />
            <rect x="235.63" y="198.7" width="8.0079" height="2.4568" fill="#8dd35f" />
            <rect x="220.07" y="205.6" width="24.846" height="2.4568" fill="#93aca7" />
            <rect x="247.57" y="205.6" width="11.082" height="2.4568" fill="#f95" />
            <rect x="220.07" y="212.5" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="235.36" y="212.5" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="250.92" y="212.5" width="22.749" height="2.4568" fill="#fd5" />
            <rect x="220.07" y="219.4" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="235.36" y="219.4" width="12.284" height="2.4568" fill="#8dd35f" />
            <rect x="250.92" y="219.4" width="15.945" height="2.4568" fill="#ff8080" />
            <rect x="230.59" y="226.3" width="24.846" height="2.4568" fill="#fd5" />
            <rect transform="scale(-1,1)" x="-227.95" y="226.3" width="7.8743" height="2.4568" fill="#93aca7" />
          </g>
          <g transform="translate(30.762 -171.54)" id="right-svg">
            <rect x="218.21" y="174.62" width="86.008" height="86.008" rx="0" ry="0" fill="#6c5353" stroke-width="0" />
            <g transform="matrix(.48494 -.48494 .48494 .48494 103.71 165.89)" stroke="#241c1c">
              <path d="m64.011 197.78h90.07" fill="none" stroke-width="4" />
              <path transform="scale(1,-1)" d="m148.54-237.28a39.499 39.499 0 0 1-19.749 34.207 39.499 39.499 0 0 1-39.499-1e-5 39.499 39.499 0 0 1-19.749-34.207"
                fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" />
              <g fill="#c8b7b7" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <circle cx="64.011" cy="197.78" r="4.9111" />
                <circle cx="154.08" cy="197.78" r="4.9111" />
                <rect x="64.439" y="232.17" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
                <rect x="143.44" y="232.17" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
                <rect x="103.94" y="192.67" width="10.217" height="10.217" rx="2.2395" ry="2.2395" />
              </g>
            </g>
          </g>
        </g>
        <path id="add-lean" d="m124.26 37.059c-0.22579 0-0.40756 0.18178-0.40756 0.40756v7.1152h-7.1152c-0.2258 0-0.40757 0.18177-0.40757 0.40757v2.1939c0 0.22579 0.18177 0.4077 0.40757 0.4077h7.1152v7.1152c0 0.2258 0.18177 0.40757 0.40756 0.40757h2.194c0.2258 0 0.40757-0.18177 0.40757-0.40757v-7.1152h7.1153c0.22578 0 0.40755-0.18191 0.40755-0.4077v-2.1939c0-0.2258-0.18177-0.40757-0.40755-0.40757h-7.1153v-7.1152c0-0.22578-0.18177-0.40756-0.40757-0.40756z"
          fill="#241c1c" stroke="#241c1c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.0615" />
        <path id="equals-to" d="m211.13 40.717c-0.22579 0-0.40756 0.18177-0.40756 0.40756v2.1938c0 0.22579 0.18177 0.40756 0.40756 0.40756h17.239c0.22579 0 0.40756-0.18177 0.40756-0.40756v-2.1938c0-0.22579-0.18177-0.40756-0.40756-0.40756zm0 7.7307c-0.22579 0-0.40756 0.18177-0.40756 0.40756v2.194c0 0.22579 0.18177 0.40756 0.40756 0.40756h17.239c0.22579 0 0.40756-0.18177 0.40756-0.40756v-2.194c0-0.22579-0.18177-0.40756-0.40756-0.40756z"
          fill="#241c1c" stroke="#241c1c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.0615" />
      </svg>

      <div class="flex-r absolute" id="show-code">
        <label class="mr2 bold">Show Code</label>
        <label class="switch">
          <input type="checkbox" v-model="showCode" @change="revealCode">
          <span class="slider"></span>
        </label>
      </div>

    </div>

    <!-- social section -->
    <transition name="fade">
      <div id="social" class="fixed flex-r1" v-show="!main">
        <a href="#" class="ls-github mr2"></a>
        <a href="#" @click="showCredits = true"><b>i</b></a>
      </div>
    </transition>
  </div>

</template>

<script>
  import anime from 'animejs';
  import {
    readSVG
  } from '../assets/helpers';

  export default {
    name: 'Home',
    store: ['loading', 'filename', 'main', 'svg', 'oSvg', 'pasteMarkup', 'showCredits'],
    data() {
      return {
        showCode: false,
        isSaving: false
      }
    },

    watch: {

      // watching changes for loading
      loading: {
        handler() {
          var self = this;
          setTimeout(() => {
            anime({
              targets: '#intro-text',
              opacity: 1,
              translateY: ['10%', 0],
              duration: 500,
              easing: 'easeOutQuad',
              complete: () => {
                self.tl.play();
              }
            });
          }, 750)
        }
      }
    },

    methods: {

      // animation hook
      revealCode() {
        var self = this;
        anime({
          targets: ['#left-svg', '#right-svg'],
          clipPath: () => {
            if (self.showCode)
              return 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
            return 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
          },
          duration: 300,
          easing: 'linear'
        })

      },

      // animation hook
      showInside() {
        this.showCode = !this.showCode;
        this.revealCode();
      },

      // read file
      filesChange(files) {
        var self = this;

        readSVG(files[0], function (fileInfo) {
          self.filename = fileInfo.name;
          self.oSvg = fileInfo.content;
          self.main = true;
        });
      },
    },

    mounted() {
      this.tl = anime.timeline({
        duration: 500,
        easing: 'easeOutQuad',
        autoplay: false
      });

      var self = this;

      // timeline for intro animation

      this.tl.add({
          targets: '#left-total',
          opacity: 1,
          translateX: {
            value: 123,
            duration: 0,
          },
          translateY: ['25%', 0]
        })
        .add({
          targets: '#left-total',
          opacity: 1,
          translateX: [123, 0],
          offset: '+=300'
        })
        .add({
          targets: '#add-lean',
          scale: [0.25, 1],
          opacity: 1
        })
        .add({
          targets: '#the-lean',
          translateY: ['25%', 0],
          opacity: 1
        })
        .add({
          targets: '#equals-to',
          scale: [0.25, 1],
          opacity: 1
        })
        .add({
          targets: '#right-total',
          translateY: ['25%', 0],
          opacity: 1,
        })
        .add({
          targets: '#show-code',
          opacity: 1,
          complete: () => {
            self.showInside()
          }
        })
    }
  }

</script>

<style>
  #intro-text {
    padding-left: 100px;
    opacity: 0;
  }

  #intro-text h1 {
    margin: 0;
    margin-bottom: 20px;
    color: #6C5353;
    font-weight: 800
  }

  #intro-text p>b {
    color: #6C5353;
    font-weight: 800
  }

  #intro-text p {
    line-height: 30px;
    margin: 0 0 25px 0
  }

  #intro-text .btn-big {
    border-radius: 60px
  }

  #intro-svg {
    width: 75%;
    height: 100%;
  }

  #intro-svg>g,
  #intro-svg>path {
    opacity: 0;
    transform-origin: center center 0;
    transform-box: fill-box;
  }

  #left-svg,
  #right-svg {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transition: all .5s
  }


  #show-code {
    opacity: 0;
    right: 30px;
    bottom: 30px
  }

  #file-upload input {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  #social {
    bottom: 30px;
    left: 30px;
    font-size: 15px;
    z-index: 155;
  }

  #social a {
    font-size: 22px;
    font-weight: 400;
    border-radius: 5px;
    color: #fff;
    background-color: #886868;
    text-align: center;
    height: 40px;
    width: 40px;
    line-height: 40px;
  }

  @media screen and (max-width: 1100px) {
    #intro-btns .btn-big>span {
      display: none
    }
  }

  @media screen and (max-width: 800px) {
    #home.flex-r {
      flex-direction: column-reverse
    }

    #intro-img,
    #intro-text {
      width: 100%
    }

    #intro-text {
      padding: 0 20px 0 20px
    }

    .tg-line {
      display: none
    }

    #social {
      bottom: calc(100% - 55px);
      left: calc(100% - 110px)
    }
  }

</style>
