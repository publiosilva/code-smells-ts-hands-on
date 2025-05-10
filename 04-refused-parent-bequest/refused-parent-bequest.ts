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
