class CreateUserController {
  constructor(private userRepository: UserRepository) { }

  createUser(user: User) {
    this.validateUser(user);

    const createdUser = this.userRepository.createUser(user);

    return createdUser;
  }

  private validateUser(user: User) {
    if (user.name === "") {
      throw new Error("Name is required");
    }
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
