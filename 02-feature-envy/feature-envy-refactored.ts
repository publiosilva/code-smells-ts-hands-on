class Customer {
  constructor(
    public name: string,
    public address: string,
    public city: string,
    public zip: string
  ) {}

  printCustomerDetails(): void {
    console.log(
      `Name: ${this.name}\nAddress: ${this.address}, ${this.city}, ${this.zip}`
    );
  }
}

class InvoicePrinter {
  printCustomerDetails(customer: Customer): void {
    customer.printCustomerDetails();
  }
}

export { Customer, InvoicePrinter };
