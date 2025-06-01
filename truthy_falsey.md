# Truthy and Falsy in JavaScript

In JavaScript, values are often evaluated in a boolean context — such as in `if` statements — to determine whether they are truthy or falsy.

---

## ✅ Truthy Values

A **truthy** value is any value that is **not** falsy. These values behave like `true` when evaluated in a boolean context.

### Examples of Truthy Values:

```javascript
if ("hello") console.log("This is truthy");  // Runs

if (42) console.log("This is also truthy");  // Runs

if ([]) console.log("Empty array is truthy");  // Runs

if ({}) console.log("Empty object is truthy");  // Runs

if (new Date()) console.log("Date object is truthy");  // Runs

if ("false") console.log("Non-empty string is truthy");  // Runs
```

### Common Truthy Values:

- Non-empty strings: `"hello"`, `"false"`
- Numbers other than 0: `1`, `-1`, `3.14`
- Objects: `{}`, `[]`
- `true`
- `new` objects: `new Date()`, `new Boolean(false)`

---

## ❌ Falsy Values

A **falsy** value behaves like `false` when evaluated in a boolean context. JavaScript has **exactly 7** falsy values.

### The 7 Falsy Values:

| Falsy Value      | Description               |
|------------------|---------------------------|
| `false`          | Boolean false             |
| `0`              | Number zero               |
| `-0`             | Negative zero             |
| `""`             | Empty string              |
| `null`           | Null value                |
| `undefined`      | Undefined value           |
| `NaN`            | Not a Number              |

### Examples:

```javascript
if (false) console.log("Won't run");

if (0) console.log("Won't run");

if ("") console.log("Won't run");

if (null) console.log("Won't run");

if (undefined) console.log("Won't run");

if (NaN) console.log("Won't run");


// const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

```

---

## 🧪 Boolean Conversion

You can test whether a value is truthy or falsy using the `Boolean()` function or a double NOT (`!!`) operator.

```javascript
Boolean("hello");  // true
Boolean("");       // false
Boolean(100);      // true
Boolean(0);        // false
Boolean(null);     // false
Boolean([]);       // true
```

```javascript
!!"JavaScript"     // true
!!0                // false
```

---

## 🧠 Summary Table

| Value         | Truthy or Falsy |
|---------------|-----------------|
| `"Hello"`     | Truthy          |
| `""`          | Falsy           |
| `123`         | Truthy          |
| `0`           | Falsy           |
| `[]`          | Truthy          |
| `{}`          | Truthy          |
| `null`        | Falsy           |
| `undefined`   | Falsy           |
| `NaN`         | Falsy           |
| `false`       | Falsy           |
| `true`        | Truthy          |

---

## 📌 Tips

- Use `!!value` to check if something is truthy or falsy.
- Be cautious when checking values like `0`, `""`, or `null` — they might be valid values but still evaluate as falsy.

---

## 📚 Practice Ideas

- Write a function that checks if an input is truthy or falsy.
- Try different values in `if` statements to see what runs.
- Create form validation logic using truthy/falsy checks.
