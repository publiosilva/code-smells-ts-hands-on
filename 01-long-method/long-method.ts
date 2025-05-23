// CÓDIGO COM CODE SMELL: LONG METHOD
// O método processOrder é muito longo e tem muitas responsabilidades diferentes:
// 1. Validação de itens
// 2. Cálculo do total
// 3. Aplicação de descontos
// 4. Verificação de pedidos de alto valor
// 5. Exibição do total final
// Isso torna o código difícil de entender, manter e testar
class OrderProcessor {
  processOrder(order: any) {
    if (!order.items || order.items.length === 0) {
      throw new Error("Order must have at least one item.");
    }

    let total = 0;
    for (let item of order.items) {
      if (item.price < 0) {
        throw new Error("Item price must be positive.");
      }
      total += item.price * item.quantity;
    }

    if (order.discountCode) {
      if (order.discountCode === "SUMMER10") {
        total *= 0.9;
      } else if (order.discountCode === "BLACKFRIDAY") {
        total *= 0.8;
      }
    }

    if (total > 1000) {
      console.log("High value order, notify manager.");
    }

    console.log(`Final total: $${total.toFixed(2)}`);
  }
}

export { OrderProcessor };
