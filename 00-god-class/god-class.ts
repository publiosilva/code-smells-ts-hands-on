// CÓDIGO COM CODE SMELL: GOD CLASS
// Uma God Class é uma classe que tem muitas responsabilidades e faz muitas coisas diferentes
// Neste caso, a classe SystemManager está violando o princípio da Responsabilidade Única (SRP)
// Ela está gerenciando:
// 1. Conexão com banco de dados
// 2. Autenticação de usuários
// 3. Salvamento de dados
// 4. Geração de relatórios
// 5. Envio de emails
// Isso torna a classe difícil de manter, testar e modificar
class SystemManager {
  private dbConnection: any;
  private currentUser: string | null = null;

  connectToDatabase(connectionString: string): void {
    console.log(`Connecting to database: ${connectionString}`);
    this.dbConnection = {};
  }

  authenticateUser(username: string, password: string): boolean {
    console.log(`Authenticating ${username}`);
    if (username === "admin" && password === "admin") {
      this.currentUser = username;
      return true;
    }
    return false;
  }

  saveData(data: string): void {
    console.log(`Saving data: ${data}`);
  }

  generateReport(): string {
    return "Report data...";
  }

  sendEmail(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

export { SystemManager };
