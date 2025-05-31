# 🧠 Call Stack in JavaScript

## 📌 What is the Call Stack?

The **Call Stack** is a mechanism used by the JavaScript engine to keep track of function calls.  
It operates on the **LIFO (Last In, First Out)** principle.

---

## ⚙️ How It Works

1. When a function is invoked, its **Execution Context** is created and **pushed** onto the call stack.
2. When the function finishes execution, its context is **popped** off the stack.
3. The process continues as the program executes functions one by one.

---

## 📊 Visualization Example

```javascript
function first() {
  second();
  console.log("First function");
}

function second() {
  third();
  console.log("Second function");
}

function third() {
  console.log("Third function");
}

first();
```

## 📊 Stack Flow:

first() is called → first() context pushed

second() is called → second() context pushed

third() is called → third() context pushed

third() logs and finishes → popped

second() logs and finishes → popped

first() logs and finishes → popped