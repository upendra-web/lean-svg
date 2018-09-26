<h1 align="center">
  <br>
  <a href="https://github.com/upendra-web/lean-svg"><img src="https://i.imgur.com/NxY3x6B.png"
      alt="Lean-SVG" width="200"></a>
</h1>


<p align="center"><b>Lean-SVG</b> is a tool, which is being made to <u>optimize SVG</u> and flatten the <u>transforms</u>
  which are present in SVG. This project is an experiment with <b>Vue.js</b> and <b>SVGO</b>.</p>


<p align="center">

  <a href="#"><img src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"></a>
  <a href="#">
    <img src="https://img.shields.io/badge/contributions-welcome-blue.svg?style=for-the-badge">
  </a>
  <a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/Made%20with-vue-green.svg?style=for-the-badge" target="_blank">
  </a>
  <a href="https://github.com/svg/svgo">
    <img src="https://img.shields.io/badge/Made%20with-SVGO-orange.svg?style=for-the-badge" target="_blank">
  </a>

</p>


<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How to use?</a> •
  <a href="#tutorial">Tutorial</a> •
  <a href="#credits">Credits</a>
</p>

## Screenshot

![screenshot](https://i.imgur.com/7tqJff6.gif)


## Key Features

* ✂️ Cut down a lot of redundant and useless information from the SVG, like
  - editor metadata
  - comments
  - hidden elements ... etc
* Round of the numbers and minify styles
* 📦 Minify the SVG
* Flatten transforms (💥 Keep in mind that the Flatten feature is experimental and works on paths. Text flatten is on
the way.)
* Flatten shapes


## How to use?
You can use this project online by going to this [link]('http://lean-svg.netlify.com')

or 

locally by cloning and running this application [you'll need [Git](https://git-scm.com) and
[Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer]. From
your command line:

```bash
# Clone this repository
$ git clone https://github.com/upendra-web/lean-svg

# Go into the repository
$ cd lean-svg

# Install dependencies
$ npm install

# Run the app
$ npm start

# Open your browser and goto 'localhost:8080'
```

Note: If you're using Linux Bash for Windows, [see this
guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/)
or use `node` from the command prompt.


## Tutorial

* First input a SVG by
  - uploading SVG or pasting markup
![input](https://i.imgur.com/Dq8pHcF.png)

* Then select or activate the options which you require
![options](https://i.imgur.com/lUO9Acg.png)

* You can view the modified SVG and Code with the help of toggle present in Header
![swatches](https://i.imgur.com/M4Ohcl4.png)

* Finally you can download your optimized SVG or just copy the markup.

* You change the background of SVG viewer by using background option in Header section.
![bkg](https://i.imgur.com/bzQKdrU.png)

* For new SVG you can directly go to the '+' in the header section.
![input2](https://i.imgur.com/JJGLZrR.png)


## Credits

This projects uses

- [SVGO](https://github.com/svg/svgo)
- [Vue.js](https://vuejs.org/)
- [Prism.js](https://prismjs.com/)
- [Vue-Stash](https://github.com/cklmercer/vue-stash)
- [panzoom](https://github.com/anvaka/panzoom)

And

- Great thanks to <a href="https://github.com/jakearchibald" target="_blank"><b>Jake Archibald</b></a>,
whose <a href="https://github.com/jakearchibald/svgomg" target="_blank"><b>SVGOMG</b></a> code has been a
great help to make this project
- And thanks to the Flatten code provided by <a href="https://github.com/timo22345" target="_blank"><b>Timo</b></a>
in his <a href="https://gist.github.com/timo22345/9413158" target="_blank"><b>gist</b></a>

## Todo

- [x] 🚀 Launch the site
- [ ] ✂️ Remove unused CSS using Purge CSS or something like that. 
- [ ] ✂️ Make a stripped down version of site 
- [ ] Make a Chrome Extension

#

### Made with ❤️ by [U-Web](https://github.com/upendra-web)