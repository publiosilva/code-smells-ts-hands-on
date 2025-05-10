# Feature Envy

## Description
Feature Envy occurs when a method in one class is more interested in the data or methods of another class than in its own class. This indicates that the method might be better placed in the other class, as it's more closely related to that class's functionality.

## Common Symptoms
- Method makes more calls to another class than to its own class
- Method uses more data from another class than from its own class
- Method seems to belong more naturally to another class
- Method has to pass through its own class's data to get to another class's data
- Method is more concerned with another class's implementation details

## Refactoring Methods
1. **Move Method**: Move the envious method to the class it's most interested in
2. **Extract Method**: If only part of the method shows feature envy, extract that part
3. **Inline Class**: If the entire class shows feature envy, consider merging it with the target class
4. **Hide Delegate**: If the method needs to stay, hide the delegate to reduce coupling
5. **Introduce Local Extension**: Create an extension class if you can't modify the target class

## Benefits of Refactoring
- Better encapsulation
- Improved code organization
- Reduced coupling between classes
- More maintainable code
- Clearer responsibilities
- Better adherence to the Law of Demeter
- More cohesive classes 
