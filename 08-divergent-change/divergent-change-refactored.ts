// CÓDIGO REFATORADO: REMOÇÃO DO DIVERGENT CHANGE
// Para resolver o problema, dividimos a classe ProductManager em classes menores, cada uma com uma única responsabilidade.
// Agora, ProductRepository lida com persistência, ProductRenderer com renderização e ShippingCalculator com cálculo de frete.
// Isso facilita a manutenção, pois mudanças em uma responsabilidade não afetam outras.
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
