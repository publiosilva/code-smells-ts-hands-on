# Duplicated Code

## Description
Duplicated Code is one of the most common code smells. It occurs when the same or very similar code appears in multiple places. This makes the code harder to maintain, as changes need to be made in multiple places, and increases the risk of bugs when updates are not made consistently across all duplicates.

## Common Symptoms
- Identical or very similar code blocks in different places
- Copy-pasted code with minor variations
- Repeated patterns across different classes
- Similar methods in different classes
- Repeated business logic
- Similar switch statements or conditionals

## Refactoring Methods
1. **Extract Method**: Create a new method for the duplicated code
2. **Pull Up Method**: Move the method to a common parent class
3. **Form Template Method**: Create a template method in the parent class
4. **Extract Class**: Create a new class to hold the common functionality
5. **Substitute Algorithm**: Replace the duplicated code with a better algorithm
6. **Introduce Parameter Object**: Group related parameters into a single object
7. **Replace Conditional with Polymorphism**: Use polymorphism to handle different cases

## Benefits of Refactoring
- Improved maintainability
- Reduced risk of bugs
- Better code organization
- Easier to make changes
- More reusable code
- Better adherence to DRY (Don't Repeat Yourself) principle
- Reduced code size
- Easier testing 
