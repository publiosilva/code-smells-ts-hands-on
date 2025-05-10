class Customer {
  constructor(
    public name: string,
    public address: string,
    public city: string,
    public zip: string
  ) {}
}

class InvoicePrinter {
  printCustomerDetails(customer: Customer): void {
    console.log(
      `Name: ${customer.name}\nAddress: ${customer.address}, ${customer.city}, ${customer.zip}`
    );
  }
}

export { Customer, InvoicePrinter };
