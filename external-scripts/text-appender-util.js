function TextAppenderUtil(elementId) {
  this.elementID = elementId;
}

TextAppenderUtil.prototype.appendText = function(textToAppend) {
  document.getElementById(this.elementID).innerText += textToAppend;
};
