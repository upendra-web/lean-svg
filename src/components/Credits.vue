<template>

  <!-- credits component -->
  <transition name="fade">
    <div id="credits" class="modal-container flex-r" v-show="showCredits" @click="showCredits = false">
      <div id="credits-content" class="bg-white rounded" @click.stop>
        
        <!-- the credits header -->
        <div class="fit-w p2">
          <span class="ls-x right" id="credits-close" @click="showCredits = false"></span>
        </div>
        
        <!-- the credits -->
        <div class="px3 py2">
          <p><b>Lean-SVG</b> is a tool, which is being made to <u>optimize SVG</u> and flatten the <u>transforms</u> which are present
            in SVG. This project is an experiment with <b>Vue.js</b> and <b>SVGO</b>.</p>
          
          <p>First I would like to mention something 💖:</p>
          
          <ul class="px2 mb3">
            <li>Great thanks to <a href="https://github.com/jakearchibald" target="_blank"><b>Jake Archibald</b></a>,
              whose <a href="https://github.com/jakearchibald/svgomg" target="_blank"><b>SVGOMG</b></a> code has been a
              great help to make this project</li>
            <li>And thanks to the Flatten code provided by <a href="https://github.com/timo22345" target="_blank"><b>Timo</b></a>
              in his <a href="https://gist.github.com/timo22345/9413158" target="_blank"><b>gist</b></a></li>
            <li>Thanks to the power of <b>Vue.js</b> and <b>SVGO</b></li>
          </ul>

          <p>💥 Keep in mind that the Flatten feature is experimental and works on paths. Text flatten is on the way.</p>
          
          <p>❓ For more details go to this <a href="#" target="_blank"><b>repo</b></a> and ⭐️ the repo if you like it.</p>

          <p>Made with ❤️ by <a href="https://github.com/upendra-web" target="_blank"><b>U-Web</b></a>.</p>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
  export default {
    store: ['showCredits']
  }

</script>

<style>
  #credits {
    z-index: 150;
  }

  #credits-content {
    max-width: 75%;
    max-height: 85%;
    overflow: auto;
  }

  #credits-content>ul>li {
    margin-bottom: 10px
  }

  #credits-close {
    font-size: 25px
  }

  #credits-close:hover {
      animation: rotate .5s
  }

  @keyframes rotate {
      100% {
          transform: rotate(180deg);
      }
  }

  @media screen and (max-width: 750px) {
    #credits-content {
      max-width: 90%;
    }
  }

</style>
