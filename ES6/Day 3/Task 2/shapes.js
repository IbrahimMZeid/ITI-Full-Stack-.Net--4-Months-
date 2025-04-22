class Shape {
  constructor(dim1, dim2) {
    this.dim1 = dim1;
    this.dim2 = dim2;
    this.name = "Shape";
  }
  parmeter() {
    return (this.dim1 + this.dim2) * 2;
  }
  area() {
    return this.dim1 * this.dim2;
  }
  toString() {
    return `${this.name} of Width = ${this.dim1}, Height = ${this.dim2}: Area = ${this.area()}, Parmeter = ${this.parmeter()}`;
  }
}
class Rectangle extends Shape {
  constructor(dim1, dim2) {
    super(dim1, dim2);
    this.name = "Rectangle";
  }
}
class Square extends Shape {
  constructor(dim1) {
    super(dim1, dim1);
    this.name = "Square"
  }
}
class Circle extends Shape {
  constructor(dim1) {
    super(dim1, dim1);
    this.name = "Circle";
  }
  parmeter() {
    return 2 * Math.PI * this.dim1;
  }
  area() {
    return Math.PI * this.dim1 * this.dim1;
  }
}

export { Shape, Rectangle, Square, Circle };