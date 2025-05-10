class Customer {
  constructor(
    private name: string,
    private email: string,
    private birthDate: Date
  ) { }

  toApiFormat(): any {
    return {
      name: this.name,
      email: this.email,
      birthDate: this.birthDate.toISOString(),
    };
  }

  getInfo(): string {
    return `Name: ${this.name}\nEmail: ${this.email}\nBirth Date: ${this.birthDate.toDateString()}`;
  }
}

class CustomerService {
  formatCustomerForApi(customer: Customer): any {
    return customer.toApiFormat();
  }
}

class CustomerComponent {
  showCustomerInfo(customer: Customer): void {
    console.log(customer.getInfo());
  }
}

export { Customer, CustomerService, CustomerComponent };
