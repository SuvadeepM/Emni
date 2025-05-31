# Execution Context in JavaScript

## 📌 What is an Execution Context?

An **Execution Context** is an environment in which JavaScript code is evaluated and executed. It contains everything that the JavaScript engine needs to run a block of code.

---

## 🔁 Types of Execution Contexts

1. **Global Execution Context (GEC)**  
   - Created by default.
   - Only one GEC per program.
   - `this` refers to the global object (`window` in browser, `global` in Node.js).
   - Creates the global object and sets up the scope chain.

2. **Function Execution Context (FEC)**  
   - Created whenever a function is invoked.
   - Each function has its own execution context.
   - Includes:
     - Arguments object
     - Local variables
     - `this` keyword
     - Inner function declarations

3. **Eval Execution Context**  
   - Created by the `eval()` function (rarely used).
   - Not recommended due to security and performance issues.

---

## ⚙️ Execution Context Phases

Each context goes through **two main phases**:

### 1. Memory Creation Phase
- Scope chain is created.
- Variables and functions are stored in memory (Hoisting).
- `this` is determined.
- A lexical environment is set up.

### 2. Execution Phase
- Code is executed line by line.
- Variables are assigned values.
- Functions are invoked.

---

## 🧠 Inside the Execution Context

An execution context contains three main components:

1. **Variable Object (VO) / Lexical Environment**
   - Stores function arguments, inner variable declarations, and function declarations.

2. **Scope Chain**
   - Provides access to variables from outer scopes.

3. **`this` Binding**
   - Refers to the object that is currently executing the code.

---

## 🗃️ Execution Stack (Call Stack)

- JavaScript is single-threaded.
- Uses a **Call Stack** to manage execution contexts.
- The **Global Execution Context** is pushed first.
- Each new function call pushes a new context.
- When a function completes, its context is popped off the stack.

---

## 🔄 Example

```javascript
function greet() {
  var name = "John";
  console.log("Hello, " + name);
}

greet();
