function TextChangerUtil(elementId) {
  this.elementID = elementId;
}

TextChangerUtil.prototype.changeText = function(newText) {
  document.getElementById(this.elementID).innerText = newText;
};
