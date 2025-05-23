// CÓDIGO REFATORADO: REMOÇÃO DO PARALLEL INHERITANCE HIERARCHIES
// Para resolver o problema, unificamos as hierarquias em uma única classe Shape.
// Agora, Circle e Square herdam diretamente de Shape, que inclui tanto getArea() quanto render().
// Isso simplifica a manutenção, pois mudanças são feitas em um único lugar.
abstract class Shape {
  abstract getArea(): number;
  
  abstract render(): void;
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

  render() {
    console.log("Render circle");
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

  render() {
    console.log("Render square");
  }
}

export { Circle, Square };
