// CÓDIGO REFATORADO: REMOÇÃO DO SWITCH STATEMENTS
// Para resolver o problema, substituímos o switch por polimorfismo.
// Criamos uma interface Notifier e classes específicas para cada tipo de notificação.
// Agora, a adição de novos tipos de notificação é feita sem modificar o código existente, respeitando o princípio Open/Closed.
interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SmsNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending push notification: ${message}`);
  }
}

class User {
  constructor(
    private notifier: Notifier
  ) {}

  sendNotification(message: string): void {
    this.notifier.send(message);
  }
}

export { EmailNotifier, SmsNotifier, PushNotifier, User };
