# Parallel Inheritance Hierarchies

## Description
Parallel Inheritance Hierarchies occur when you have two inheritance hierarchies that are tightly coupled - changes in one hierarchy require changes in the other. This creates maintenance problems and violates the Single Responsibility Principle, as changes in one class require changes in its parallel class.

## Common Symptoms
- Two inheritance hierarchies that mirror each other
- Changes in one class require changes in its parallel class
- Classes in one hierarchy depend on classes in the other
- Adding a new subclass requires adding a parallel subclass
- High coupling between the hierarchies
- Difficult to maintain and extend
- Violation of the Single Responsibility Principle

## Refactoring Methods
1. **Replace Inheritance with Delegation**: Convert one hierarchy to use composition
2. **Extract Superclass**: Create a common superclass for both hierarchies
3. **Collapse Hierarchy**: Merge the parallel hierarchies into one
4. **Replace Type Code with State/Strategy**: Use the State or Strategy pattern
5. **Introduce Null Object**: Replace null checks with a Null Object pattern
6. **Replace Conditional with Polymorphism**: Use polymorphism instead of type checking
7. **Form Template Method**: Extract common behavior into a template method

## Benefits of Refactoring
- Reduced coupling between hierarchies
- Easier maintenance
- More flexible design
- Better code organization
- Reduced duplication
- Easier to extend
- Better adherence to Single Responsibility Principle
- More maintainable code 
