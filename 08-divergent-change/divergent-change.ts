class ProductManager {
  addProduct(product: Product): void {
    // logic to add product
  }

  findProductById(id: number): Product | null {
    // logic to find product
    return null;
  }

  renderProductCard(product: Product): string {
    // logic to return HTML
    return `<div>${product.name}</div>`;
  }

  calculateShipping(product: Product): number {
    // logic to calculate shipping
    return 0;
  }
}

class Product {
  constructor(
    public name: string,
    public price: number
  ) {}
}

export { ProductManager, Product };
