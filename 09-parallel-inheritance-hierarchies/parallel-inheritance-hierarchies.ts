// CÓDIGO COM CODE SMELL: PARALLEL INHERITANCE HIERARCHIES
// O code smell Parallel Inheritance Hierarchies ocorre quando há duas hierarquias de classes que evoluem em paralelo.
// Neste exemplo, temos ShapeRenderer e Shape, cada uma com suas subclasses (CircleRenderer, SquareRenderer, Circle, Square).
// Isso dificulta a manutenção, pois mudanças em uma hierarquia exigem mudanças correspondentes na outra.
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
