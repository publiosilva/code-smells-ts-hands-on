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
