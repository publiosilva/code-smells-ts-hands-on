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
