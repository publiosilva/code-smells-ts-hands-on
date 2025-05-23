// CÓDIGO COM CODE SMELL: REFUSED PARENT BEQUEST
// O code smell Refused Parent Bequest ocorre quando uma subclasse herda métodos ou propriedades que não fazem sentido para ela.
// No exemplo, Fish herda o método walk() de Animal, mas peixes não andam.
// Isso obriga a implementação de um método que lança exceção, mostrando que a hierarquia está errada.
abstract class Animal {
  eat(): void {
    console.log("Eating...");
  }

  abstract walk(): void;
}

class Cat extends Animal {
  walk(): void {
    console.log("Walking...");
  }
}

class Fish extends Animal {
  walk(): void {
    throw new Error("Fish don't walk");
  }
}

export { Animal, Cat, Fish };
