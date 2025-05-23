// CÓDIGO COM CODE SMELL: MESSAGE CHAINS
// O code smell Message Chains ocorre quando há uma sequência de chamadas de métodos em cadeia.
// Neste exemplo, a linha 'const city = order.getCustomer().getAddress().getCity();' forma uma cadeia de chamadas.
// Isso torna o código frágil, pois qualquer mudança na estrutura das classes pode quebrar a cadeia.
class Order {
  constructor(private customer: Customer) {}

  getCustomer(): Customer {
    return this.customer;
  }
}

class Customer {
  constructor(private address: Address) {}

  getAddress(): Address {
    return this.address;
  }
}

class Address {
  constructor(private city: string) {}

  getCity(): string {
    return this.city;
  }
}

// Somewhere in the code
const order = new Order(new Customer(new Address("New York")));
const city = order.getCustomer().getAddress().getCity();

export { Order, Customer, Address };
