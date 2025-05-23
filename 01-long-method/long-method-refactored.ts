// CÓDIGO REFATORADO: REMOÇÃO DO LONG METHOD
// Para resolver o problema do método longo, aplicamos a técnica de Extração de Método
// Dividimos o método processOrder em vários métodos menores e mais específicos:
// 1. validateItems: responsável apenas pela validação dos itens
// 2. calculateTotal: responsável apenas pelo cálculo do total
// 3. applyDiscount: responsável apenas pela aplicação de descontos
// 4. checkForHighValueOrder: responsável apenas pela verificação de pedidos de alto valor
// Esta refatoração torna o código mais legível, mais fácil de manter e mais fácil de testar
class OrderProcessor {
  process(order: any): void {
    this.validateItems(order);
    let total = this.calculateTotal(order);
    total = this.applyDiscount(total, order.discountCode);
    this.checkForHighValueOrder(total);
    console.log(`Final total: $${total.toFixed(2)}`);
  }

  validateItems(order: any): void {
    if (!order.items || order.items.length === 0) {
      throw new Error("Order must have at least one item.");
    }

    for (let item of order.items) {
      if (item.price < 0) {
        throw new Error("Item price must be positive.");
      }
    }
  }

  calculateTotal(order: any): number {
    return order.items.reduce((sum: number, item: any) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  applyDiscount(total: number, code: string | undefined): number {
    switch (code) {
      case "SUMMER10": return total * 0.9;
      case "BLACKFRIDAY": return total * 0.8;
      default: return total;
    }
  }

  checkForHighValueOrder(total: number): void {
    if (total > 1000) {
      console.log("High value order, notify manager.");
    }
  }
}

export { OrderProcessor };
