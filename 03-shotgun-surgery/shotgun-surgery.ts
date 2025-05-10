class Customer {
  constructor(
    public name: string,
    public email: string,
    public birthDate: Date
    // TODO: Add a new property
  ) { }
}

class CustomerService {
  formatCustomerForApi(customer: Customer): any {
    return {
      name: customer.name,
      email: customer.email,
      birthDate: customer.birthDate.toISOString(),
    };
  }
}

class CustomerComponent {
  showCustomerInfo(customer: Customer): void {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Birth Date: ${customer.birthDate.toDateString()}`);
  }
}

export { Customer, CustomerService, CustomerComponent };
