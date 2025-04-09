function Rectangle(_width, _height) {
  this.width = _width;
  this.height = _height;
}
Rectangle.prototype.perimeter = function () {
  return (this.height + this.width) * 2;
};
Rectangle.prototype.area = function () {
  return this.height * this.width;
};
Rectangle.prototype.displayInfo = function () {
  console.log("======================");
  console.log(`The Rectangle Width = ${this.width}`);
  console.log(`The Rectangle Height = ${this.height}`);
  console.log(`The Rectangle Perimeter = ${this.perimeter()}`);
  console.log(`The Rectangle Area = ${this.area()}`);
};

var rec1 = new Rectangle(5, 4);
var rec2 = new Rectangle(6, 5);

rec1.displayInfo();
rec2.displayInfo();
