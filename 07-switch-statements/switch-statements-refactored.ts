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
