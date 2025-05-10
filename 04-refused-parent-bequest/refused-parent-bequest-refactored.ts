abstract class Animal {
  eat(): void {
    console.log("Eating...");
  }
}

class TerrestrialAnimal extends Animal {
  walk(): void {
    console.log("Walking...");
  }
}

class AquaticAnimal extends Animal {
  swim(): void {
    console.log("Swimming...");
  }
}

class Cat extends TerrestrialAnimal {
}

class Fish extends AquaticAnimal {
}

export { Animal, Cat, Fish };
