# Control Flow in JavaScript

Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated in a script. JavaScript executes code from top to bottom, but with control flow statements, we can change that order.

---

## 🚦 Types of Control Flow Statements

### 1. **Conditional Statements**

Used to perform different actions based on different conditions.

#### `if` statement

```javascript
if (condition) {
  // code to run if condition is true
}
```

#### `if...else` statement

```javascript
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

#### `if...else if...else`

```javascript
if (condition1) {
  // code for condition1
} else if (condition2) {
  // code for condition2
} else {
  // code if none of the conditions match
}
```

#### `switch` statement

Used when multiple conditions are based on the same variable.

```javascript
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default code block
}
```

---

### 2. **Loops**

Used to execute a block of code multiple times.

#### `for` loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

#### `while` loop

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

#### `do...while` loop

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### 3. **Loop Control Statements**

#### `break`

Exits the loop early.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

#### `continue`

Skips the current iteration and moves to the next.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

---

### 4. **Exception Handling**

Used to handle errors gracefully.

```javascript
try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that runs regardless of the result
}
```

---

## 🧠 Summary

| Statement         | Purpose                                      |
|------------------|----------------------------------------------|
| `if`, `else`      | Run code based on conditions                 |
| `switch`          | Handle multiple conditional branches         |
| `for`, `while`, `do...while` | Repeat blocks of code             |
| `break`           | Exit a loop early                            |
| `continue`        | Skip current loop iteration                  |
| `try...catch`     | Handle exceptions (errors) gracefully        |

---

## 📚 Recommended Practice

Try writing small programs using different control flow statements, such as:
- Number guessing game
- Simple calculator
- Menu-based program using `switch`
