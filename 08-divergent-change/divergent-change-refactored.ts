class ProductRepository {
  findById(id: number): Product | null {
    // Data access logic
    return null;
  }

  add(product: Product): void {
    // Persist product
  }
}

class ProductRenderer {
  renderCard(product: Product): string {
    return `<div>${product.name}</div>`;
  }
}

class ShippingCalculator {
  calculate(product: Product): number {
    return 0;
  }
}

class Product {
  constructor(
    public name: string,
    public price: number
  ) {}
}

export { ProductRepository, ProductRenderer, ShippingCalculator, Product };
