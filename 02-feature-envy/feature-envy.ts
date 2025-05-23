// CÓDIGO COM CODE SMELL: FEATURE ENVY
// O método printCustomerDetails na classe InvoicePrinter está demonstrando "inveja" dos dados da classe Customer
// Ele acessa diretamente várias propriedades do objeto Customer (name, address, city, zip)
// Isso viola o princípio de encapsulamento, pois a lógica de formatação dos dados do cliente
// deveria estar na própria classe Customer, que é a dona desses dados
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
