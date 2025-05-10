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
