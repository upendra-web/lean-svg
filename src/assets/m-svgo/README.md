# How does m-SVGO works?

While m-SVGO means 'modified SVGO', it works in browser because of the following changes made in **svgo.js** and **config.js**

```JS
// by precompling the '/../../.svgo.yml' and exporting the result through 'pluginsConfig.js' in m-svgo folder

// and replace the below line in 'config.js'

// defaults = Object.assign({}, yaml.safeLoad(FS.readFileSync(__dirname + '/../../.svgo.yml', 'utf8')));

// with this one
defaults = Object.assign({}, require('./pluginsConfig'));

// and similar changes are made in 'config.js'
```

I did this and was successfully able to run SVGO on browser.

Please let me know whether I am doing this right or not in the **issues** section.