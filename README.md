# TypeScript Code Smells Hands-on

This repository contains examples and exercises for common code smells in TypeScript, along with their refactoring solutions. Each folder contains a specific code smell example and its possible refactoring methods.

## Code Smells

1. [God Class](00-god-class/README.md)
   - A class that knows too much or does too much
   - Violates the Single Responsibility Principle

2. [Long Method](01-long-method/README.md)
   - Methods that are too long or have too many responsibilities
   - Makes code difficult to understand and maintain

3. [Feature Envy](02-feature-envy/README.md)
   - Methods that are more interested in other classes than their own
   - Indicates poor class organization

4. [Shotgun Surgery](03-shotgun-surgery/README.md)
   - Changes that require modifications to multiple classes
   - Indicates scattered functionality

5. [Refused Parent Bequest](04-refused-parent-bequest/README.md)
   - Subclasses that don't use inherited methods
   - Indicates poor inheritance design

6. [Duplicated Code](05-duplicated-code/README.md)
   - Same or similar code in multiple places
   - Violates the DRY principle

7. [Comments](06-comments/README.md)
   - Comments that explain complex code instead of making it clearer
   - Indicates need for code improvement

8. [Switch Statements](07-switch-statements/README.md)
   - Large switch statements or if-else chains
   - Violates the Open/Closed Principle

9. [Divergent Change](08-divergent-change/README.md)
   - Classes that change for different reasons
   - Indicates multiple responsibilities

10. [Parallel Inheritance Hierarchies](09-parallel-inheritance-hierarchies/README.md)
    - Two inheritance hierarchies that mirror each other
    - Creates maintenance problems

11. [Message Chains](10-message-chains/README.md)
    - Long chains of method calls
    - Violates the Law of Demeter

12. [Middle Man](11-middle-man/README.md)
    - Classes that only delegate to other classes
    - Adds unnecessary complexity

## How to Use This Repository

Each code smell folder contains:
- A README.md with a description of the smell and refactoring methods
- Example code demonstrating the smell
- Possible refactoring solutions

## Best Practices

When working with these examples:
1. First, identify the code smell in the example
2. Read the README.md to understand the problem
3. Try to refactor the code using the suggested methods
4. Compare your solution with the provided refactoring

## Contributing

Feel free to contribute by:
- Adding new code smell examples
- Improving existing examples
- Adding more refactoring solutions
- Enhancing documentation

## License

This project is open source and available under the MIT License. 
