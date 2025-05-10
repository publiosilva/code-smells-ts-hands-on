# Refused Parent Bequest

## Description
Refused Parent Bequest occurs when a subclass inherits methods or properties from its parent class but doesn't use them, or overrides them with empty implementations. This indicates a poor inheritance relationship and suggests that the subclass might not be a true subtype of its parent class.

## Common Symptoms
- Subclass overrides parent methods with empty implementations
- Subclass inherits methods it doesn't use
- Subclass violates the Liskov Substitution Principle
- Subclass has to override many parent methods
- Inheritance relationship doesn't make sense semantically
- Subclass is forced to inherit unwanted behavior

## Refactoring Methods
1. **Replace Inheritance with Delegation**: Convert inheritance to composition
2. **Extract Superclass**: Create a new parent class that better represents the common behavior
3. **Push Down Method**: Move methods from parent to child if they're only used by the child
4. **Push Down Field**: Move fields from parent to child if they're only used by the child
5. **Replace Inheritance with Interface**: Use interfaces instead of inheritance
6. **Extract Interface**: Create an interface that better represents the contract
7. **Collapse Hierarchy**: Merge parent and child classes if the inheritance doesn't make sense

## Benefits of Refactoring
- Better code organization
- Clearer relationships between classes
- More maintainable code
- Better adherence to the Liskov Substitution Principle
- Reduced coupling
- More flexible design
- Easier to understand the code structure 
