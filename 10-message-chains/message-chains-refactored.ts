// CÓDIGO REFATORADO: REMOÇÃO DO MESSAGE CHAINS
// Para resolver o problema, adicionamos métodos intermediários nas classes Order e Customer.
// Agora, a chamada 'const city = order.getCity();' encapsula a cadeia de chamadas, tornando o código mais robusto.
class Order {
  constructor(private customer: Customer) {}

  getCity(): string {
    return this.customer.getCity();
  }
}

class Customer {
  constructor(private address: Address) {}

  getCity(): string {
    return this.address.getCity();
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
const city = order.getCity();

export { Order, Customer, Address };
