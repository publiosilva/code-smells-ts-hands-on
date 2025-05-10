abstract class ShapeRenderer {
  abstract render(): void;
}

class CircleRenderer extends ShapeRenderer {
  render() {
    console.log("Render circle");
  }
}

class SquareRenderer extends ShapeRenderer {
  render() {
    console.log("Render square");
  }
}

abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(
    private radius: number
  ) {
    super();
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(
    private side: number
  ) {
    super();
  }

  getArea() {
    return this.side * this.side;
  }
}

export { Circle, Square, CircleRenderer, SquareRenderer };
