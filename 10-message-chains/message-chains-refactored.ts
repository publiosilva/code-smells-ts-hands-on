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
