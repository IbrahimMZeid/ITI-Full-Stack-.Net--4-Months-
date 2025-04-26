"use strict";
//-- Create abstract class Shape , rectangle , circle extends from area ...
class Shape {
    constructor(dim1, dim2) {
        this.dim1 = dim1;
        this.dim2 = dim2;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, width);
    }
    area() {
        return this.dim1 * this.dim2;
    }
    perimeter() {
        return 2 * (this.dim1 + this.dim2);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
    }
    area() {
        return Math.PI * this.dim1 * this.dim1;
    }
    perimeter() {
        return 2 * Math.PI * this.dim1;
    }
}
console.log(new Rectangle(10, 20).area());
console.log(new Rectangle(10, 20).perimeter());
console.log(new Circle(10).area());
console.log(new Circle(10).perimeter());
