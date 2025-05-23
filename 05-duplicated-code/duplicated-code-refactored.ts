// CÓDIGO REFATORADO: REMOÇÃO DO DUPLICATED CODE
// Para resolver o problema de código duplicado, extraímos a lógica de validação de email para um método separado (isValidEmail).
// Agora, a validação é feita de forma centralizada, facilitando a manutenção e evitando repetições.
class SalesTaxCalculator {
  private taxRate: number;

  private primaryEmail: string;

  private secondaryEmail: string;

  private price: number;

  constructor(taxRate: number, primaryEmail: string, secondaryEmail: string, price: number) {
    this.taxRate = taxRate;
    this.primaryEmail = primaryEmail;
    this.secondaryEmail = secondaryEmail;
    this.price = price;
  }

  sendTaxReport(): void {
    const email1 = this.primaryEmail;
    const email2 = this.secondaryEmail;

    if (!this.isValidEmail(email1)) {
      console.log("Email 1 is invalid");
      return;
    }

    if (!this.isValidEmail(email2)) {
      console.log("Email 2 is invalid");
      return;
    }

    const tax = this.price * this.taxRate;
    const total = this.price + tax;

    console.log(`Sending tax report to ${email1} and ${email2} for ${this.price} with tax ${tax} and total ${total}`);
  }

  private isValidEmail(email: string): boolean {
    return !!email && email.includes("@") && email.includes(".");
  }
}

export { SalesTaxCalculator };
