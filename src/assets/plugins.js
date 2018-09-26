var plugins, pluginsConfig, t1;

pluginsConfig = {
  js2svg: {
    pretty: true,
    indent: '  '
  },

  floatPrecision: 3,
  
  plugins: []
}

plugins = [{
    "id": "removeDoctype",
    "name": "Remove doctype",
    "value": true
  },
  {
    "id": "removeXMLProcInst",
    "name": "Remove XML instructions",
    "value": true
  },
  {
    "id": "removeComments",
    "name": "Remove comments",
    "value": true
  },
  {
    "id": "removeMetadata",
    "name": "Remove <metadata>",
    "value": true
  },
  {
    "id": "removeXMLNS",
    "name": "Remove xmlns",
    "value": false
  },
  {
    "id": "removeEditorsNSData",
    "name": "Remove editor data",
    "value": true
  },
  {
    "id": "cleanupAttrs",
    "name": "Cleanup attribute whitespace",
    "value": true
  },
  {
    "id": "inlineStyles",
    "name": "Inline styles",
    "value": true
  },
  {
    "id": "minifyStyles",
    "name": "Minify styles",
    "value": true
  },
  {
    "id": "convertStyleToAttrs",
    "name": "Style to attributes",
    "value": true
  },
  {
    "id": "cleanupIDs",
    "name": "Clean IDs",
    "value": false
  },
  {
    "id": "removeRasterImages",
    "name": "Remove raster images",
    "value": true
  },
  {
    "id": "removeUselessDefs",
    "name": "Remove unused defs",
    "value": true
  },
  {
    "id": "cleanupNumericValues",
    "name": "Round/rewrite numbers",
    "value": true
  },
  {
    "id": "cleanupListOfValues",
    "name": "Round/rewrite number lists",
    "value": true
  },
  {
    "id": "convertColors",
    "name": "Minify colours",
    "value": true
  },
  {
    "id": "removeUnknownsAndDefaults",
    "name": "Remove unknowns & defaults",
    "value": true
  },
  {
    "id": "removeNonInheritableGroupAttrs",
    "name": "Remove unneeded group attrs",
    "value": true
  },
  {
    "id": "removeUselessStrokeAndFill",
    "name": "Remove useless stroke & fill",
    "value": true
  },
  {
    "id": "removeViewBox",
    "name": "Remove viewBox",
    "value": false
  },
  {
    "id": "cleanupEnableBackground",
    "name": "Remove/tidy enable-background",
    "value": true
  },
  {
    "id": "removeHiddenElems",
    "name": "Remove hidden elements",
    "value": true
  },
  {
    "id": "removeEmptyText",
    "name": "Remove empty text",
    "value": true
  },
  {
    "id": "convertShapeToPath",
    "name": "Shapes to (smaller) paths",
    "value": true
  },
  {
    "id": "moveElemsAttrsToGroup",
    "name": "Move attrs to parent group",
    "value": true
  },
  {
    "id": "moveGroupAttrsToElems",
    "name": "Move group attrs to elements",
    "value": true
  },
  {
    "id": "collapseGroups",
    "name": "Collapse useless groups",
    "value": true
  },
  {
    "id": "convertPathData",
    "name": "Round/rewrite paths",
    "value": true
  },
  {
    "id": "convertTransform",
    "name": "Round/rewrite transforms",
    "value": true
  },
  {
    "id": "removeEmptyAttrs",
    "name": "Remove empty attrs",
    "value": true
  },
  {
    "id": "removeEmptyContainers",
    "name": "Remove empty containers",
    "value": true
  },
  {
    "id": "mergePaths",
    "name": "Merge paths",
    "value": true
  },
  {
    "id": "removeUnusedNS",
    "name": "Remove unused namespaces",
    "value": true
  },
  {
    "id": "sortAttrs",
    "name": "Sort attrs",
    "value": true
  },
  {
    "id": "removeTitle",
    "name": "Remove <title>",
    "value": true
  },
  {
    "id": "removeDesc",
    "name": "Remove <desc>",
    "value": true
  },
  {
    "id": "removeDimensions",
    "name": "Prefer viewBox to width/height",
    "value": false
  },
  {
    "id": "removeStyleElement",
    "name": "Remove style elements",
    "value": false
  },
  {
    "id": "removeScriptElement",
    "name": "Remove script elements",
    "value": false
  },
]

plugins.forEach((el) => {
  t1 = {};
  t1[el.id] = el.value;
  pluginsConfig.plugins.push(t1)
})

export {
  plugins, pluginsConfig
}
