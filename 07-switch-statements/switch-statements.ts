// CÓDIGO COM CODE SMELL: SWITCH STATEMENTS
// O code smell Switch Statements ocorre quando há um switch que poderia ser substituído por polimorfismo.
// Neste exemplo, o método sendNotification usa um switch para determinar o tipo de notificação,
// o que dificulta a adição de novos tipos de notificação e viola o princípio Open/Closed.
type NotificationType = "EMAIL" | "SMS" | "PUSH";

class NotificationService {
  sendNotification(type: NotificationType, message: string): void {
    switch (type) {
      case "EMAIL":
        console.log(`Sending email: ${message}`);
        break;
      case "SMS":
        console.log(`Sending SMS: ${message}`);
        break;
      case "PUSH":
        console.log(`Sending push notification: ${message}`);
        break;
      default:
        throw new Error("Unknown notification type");
    }
  }
}

class User {
  constructor(
    private notificationService: NotificationService
  ) {}

  sendNotification(type: NotificationType, message: string): void {
    this.notificationService.sendNotification(type, message);
  }
}

export { NotificationService, User };
