function readSVG(file, callback) {
  var reader = new FileReader();
  reader.onload = function () {
    callback({
      name: file.name,
      size: file.size,
      type: file.type,
      content: this.result
    });
  };
  reader.readAsText(file);
}

export {
  readSVG
}
