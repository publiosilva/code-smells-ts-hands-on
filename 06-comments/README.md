# Comments

## Description
While comments are generally considered good practice, they can become a code smell when they are used to explain complex or unclear code instead of making the code itself clearer. Comments should complement the code, not compensate for poor code quality. When code needs extensive comments to be understood, it's often a sign that the code itself should be improved.

## Common Symptoms
- Comments that explain what the code does (instead of why)
- Outdated comments that don't match the code
- Commented-out code that should be removed
- Comments that explain complex logic that could be simplified
- Comments that apologize for bad code
- Comments that duplicate what the code already expresses
- Comments that are used to separate sections of code that should be separate methods

## Refactoring Methods
1. **Extract Method**: Replace comments with well-named methods
2. **Rename Method**: Use more descriptive method names
3. **Introduce Assertion**: Replace comments with assertions
4. **Extract Class**: Move commented code to a new class
5. **Replace Magic Number with Symbolic Constant**: Use named constants instead of comments
6. **Decompose Conditional**: Break down complex conditions that need comments
7. **Remove Commented-Out Code**: Delete unused code instead of commenting it out

## Benefits of Refactoring
- Self-documenting code
- Better code readability
- Easier maintenance
- Reduced risk of outdated documentation
- More maintainable codebase
- Better code organization
- Clearer intent in the code
- Reduced need for documentation updates 
