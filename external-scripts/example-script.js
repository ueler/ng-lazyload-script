function ColorUtil(elementId) {
  this.elementID = elementId;
}

ColorUtil.prototype.changeBackgroundColor = function(colorCode) {
  document.getElementById(this.elementID).style.backgroundColor = colorCode;
};
