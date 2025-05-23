// CÓDIGO COM CODE SMELL: SHOTGUN SURGERY
// O code smell Shotgun Surgery ocorre quando uma pequena mudança exige modificações em vários lugares do código.
// Neste exemplo, se for necessário adicionar uma nova propriedade à classe Customer,
// será preciso alterar também os métodos em CustomerService e CustomerComponent,
// pois eles acessam diretamente as propriedades de Customer.
// Isso aumenta o risco de erros e dificulta a manutenção.
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
