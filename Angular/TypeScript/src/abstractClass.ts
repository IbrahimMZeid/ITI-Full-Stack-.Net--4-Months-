//-- Create abstract class Shape , rectangle , circle extends from area ...
abstract class Shape {
  constructor(public dim1: number, public dim2: number) {}
  abstract area(): number;
  abstract perimeter(): number;
}
class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, width);
  }
  override area(): number {
    return this.dim1 * this.dim2;
  }
  override perimeter(): number {
    return 2 * (this.dim1 + this.dim2);
  }
}
class Circle extends Shape {
  constructor(radius: number) {
    super(radius, radius);
  }
  override area(): number {
    return Math.PI * this.dim1 * this.dim1;
  }
  override perimeter(): number {
    return 2 * Math.PI * this.dim1;
  }
}

console.log(new Rectangle(10, 20).area());
console.log(new Rectangle(10, 20).perimeter());
console.log(new Circle(10).area());
console.log(new Circle(10).perimeter());