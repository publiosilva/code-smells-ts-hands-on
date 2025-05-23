// CÓDIGO REFATORADO: REMOÇÃO DO REFUSED PARENT BEQUEST
// Para resolver o problema, criamos subclasses intermediárias (TerrestrialAnimal e AquaticAnimal)
// Cada subclasse agora só herda métodos que fazem sentido para ela.
// Assim, Cat herda walk() e Fish herda swim(), evitando métodos inúteis ou exceções desnecessárias.
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
