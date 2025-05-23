// CÓDIGO COM CODE SMELL: MIDDLE MAN
// O code smell Middle Man ocorre quando uma classe apenas repassa chamadas para outra classe, sem adicionar valor.
// Neste exemplo, a classe UserService apenas repassa a chamada de createUser para UserRepository,
// sem adicionar lógica significativa, tornando-a um "middle man" desnecessário.
class CreateUserController {
  constructor(private userService: UserService) { }

  createUser(user: User) {
    this.validateUser(user);

    const createdUser = this.userService.createUser(user);

    return createdUser;
  }

  private validateUser(user: User) {
    if (user.name === "") {
      throw new Error("Name is required");
    }
  }
}

class UserService {
  constructor(private userRepository: UserRepository) { }

  createUser(user: User) {
    this.userRepository.createUser(user);
  }
}

class UserRepository {
  createUser(user: User) {
    console.log("Creating user", user);

    return user;
  }
}

class User {
  constructor(public name: string) { }
}

export { CreateUserController, User };
