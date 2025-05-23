// CÓDIGO REFATORADO: REMOÇÃO DO SHOTGUN SURGERY
// Para resolver o problema de Shotgun Surgery, encapsulamos a lógica de formatação e exibição de dados dentro da própria classe Customer.
// Agora, se uma nova propriedade for adicionada, basta alterar apenas a classe Customer.
// CustomerService e CustomerComponent passam a depender dos métodos da Customer, reduzindo a necessidade de mudanças espalhadas.
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
