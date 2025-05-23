// CÓDIGO REFATORADO: REMOÇÃO DO GOD CLASS
// Para resolver o problema do God Class, aplicamos o princípio da Responsabilidade Única (SRP)
// Dividimos a classe SystemManager em várias classes menores, cada uma com uma única responsabilidade:
// 1. DatabaseConnector: responsável apenas pela conexão com o banco de dados
// 2. AuthService: responsável apenas pela autenticação de usuários
// 3. DataService: responsável apenas pelo salvamento de dados
// 4. ReportService: responsável apenas pela geração de relatórios
// 5. EmailService: responsável apenas pelo envio de emails
// Esta refatoração torna o código mais fácil de manter, testar e modificar
class DatabaseConnector {
  connect(connectionString: string): void {
    console.log(`Connecting to database: ${connectionString}`);
  }
}

class AuthService {
  authenticate(username: string, password: string): boolean {
    console.log(`Authenticating ${username}`);
    return username === "admin" && password === "admin";
  }
}

class DataService {
  save(data: string): void {
    console.log(`Saving data: ${data}`);
  }
}

class ReportService {
  generate(): string {
    return "Report data...";
  }
}

class EmailService {
  send(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

export { DatabaseConnector, AuthService, DataService, ReportService, EmailService };
