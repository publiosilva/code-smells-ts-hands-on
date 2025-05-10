# Middle Man

## Description
A Middle Man is a class that exists only to delegate to another class. It adds an unnecessary layer of indirection and violates the principle of keeping things simple. The class doesn't add any value and just passes calls through to another object.

## Common Symptoms
- Class that only delegates to another class
- Class that doesn't add any value
- Class that just passes calls through
- Class that violates the Single Responsibility Principle
- Class that creates unnecessary complexity
- Class that makes the code harder to understand
- Class that adds an extra layer of indirection

## Refactoring Methods
1. **Remove Middle Man**: Remove the middle man and call the target directly
2. **Inline Class**: Merge the middle man with its client
3. **Replace Delegation with Inheritance**: If appropriate, use inheritance instead
4. **Extract Superclass**: Create a common superclass if needed
5. **Introduce Local Extension**: Create an extension class if needed
6. **Move Method**: Move methods to more appropriate classes
7. **Replace Inheritance with Delegation**: If using inheritance, consider delegation

## Benefits of Refactoring
- Simpler code structure
- Reduced complexity
- Better performance
- Easier to understand
- More maintainable code
- Better code organization
- Reduced coupling
- Clearer responsibilities 
