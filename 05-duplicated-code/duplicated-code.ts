// CÓDIGO COM CODE SMELL: DUPLICATED CODE
// O code smell Duplicated Code ocorre quando há trechos de código repetidos.
// Neste exemplo, a validação dos emails (email1 e email2) é feita de forma duplicada dentro do método sendTaxReport.
// Isso dificulta a manutenção, pois qualquer alteração na lógica de validação precisa ser feita em todos os lugares duplicados.
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

    if (!(email1 && email1.includes("@") && email1.includes("."))) {
      console.log("Email 1 is invalid");
      return;
    }

    if (!(email2 && email2.includes("@") && email2.includes("."))) {
      console.log("Email 2 is invalid");
      return;
    }

    const tax = this.price * this.taxRate;
    const total = this.price + tax;

    console.log(`Sending tax report to ${email1} and ${email2} for ${this.price} with tax ${tax} and total ${total}`);
  }
}

export { SalesTaxCalculator };
