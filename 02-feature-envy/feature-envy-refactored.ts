// CÓDIGO REFATORADO: REMOÇÃO DO FEATURE ENVY
// Para resolver o problema de Feature Envy, movemos a lógica de formatação dos dados do cliente para a própria classe Customer
// Agora, a classe Customer é responsável por exibir seus próprios detalhes, respeitando o princípio de encapsulamento
// A classe InvoicePrinter apenas delega a chamada para o método da Customer
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
