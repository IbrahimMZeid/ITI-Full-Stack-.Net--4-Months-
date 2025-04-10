function Shape(_width, _height) {
  if (this.constructor === Shape) throw "Shape is an abstract class";
  this.width = _width;
  this.height = _height;
}

Shape.prototype.perimeter = function () {
  return (this.height + this.width) * 2;
};
Shape.prototype.area = function () {
  return this.height * this.width;
};
function Rectangle(_width, _height) {
  if (Rectangle.cnt === 1 && this.constructor === Rectangle)
    throw "There is one rectangle";
  if (this.constructor === Rectangle) Rectangle.cnt++;
  Shape.call(this, _width, _height);
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.cnt = 0;

Rectangle.prototype.toString = function () {
  return `The Shape Width = ${this.width},\nThe Shape Height = ${
    this.height
  },\nThe Shape Perimeter = ${this.perimeter()},\nThe Shape Area = ${this.area()}`;
};
Rectangle.prototype.getCount = function () {
  return this.cnt;
};

function Square(_height) {
  if (Square.cnt === 1) throw "There is one square";
  if (this.constructor === Square) Square.cnt++;
  Rectangle.call(this, _height, _height);
}

Square.cnt = 0;
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

// var sh = new Shape(2, 4);
var rec1 = new Rectangle(5, 4);
// var rec2 = new Rectangle(6, 5);
// var rec3 = new Rectangle(8, 6);
var sq1 = new Square(5);
// var sq2 = new Square(5);
console.log(rec1.toString());
console.log(sq1.toString());
console.log(Square.cnt);
// document.writeln(rec1);
console.log(Rectangle.cnt);
