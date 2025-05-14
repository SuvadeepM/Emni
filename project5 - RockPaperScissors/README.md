# Rock Paper Scissors Game (JavaScript)

This project simulates a simple Rock Paper Scissors game between a player and the computer. The computer and the player will each randomly choose one of the three options: Rock, Paper, or Scissors. The game then determines the winner based on classic rules:

* **Rock** beats **Scissors**
* **Scissors** beats **Paper**
* **Paper** beats **Rock**

---

## 🧠 Steps to Build:

### 1. Define Game Options

Create an array that holds the game choices:

```javascript
const choices = ["Rock", "Paper", "Scissors"];
```

### 2. Generate Random Selections

Generate random indices for both the player and the computer:

```javascript
const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

const playerChoice = choices[playerIndex];
const computerChoice = choices[computerIndex];
```

### 3. Display Selections

Create a message that shows both choices:

```javascript
let message = `Player chose ${playerChoice} | Computer chose ${computerChoice}. `;
```

### 4. Handle Tie Case

Check if both selections are the same:

```javascript
if (playerChoice === computerChoice) {
  message += "It's a tie!";
```

### 5. Apply Game Logic

Use conditionals to determine the winner:

```javascript
} else if (
  (playerChoice === "Rock" && computerChoice === "Scissors") ||
  (playerChoice === "Paper" && computerChoice === "Rock") ||
  (playerChoice === "Scissors" && computerChoice === "Paper")
) {
  message += "Player wins!";
} else {
  message += "Computer wins!";
}
```

### 6. Display the Result

Output the final result to the console:

```javascript
console.log(message);
```

---

## 💪 Example Output:

```
Player chose Paper | Computer chose Rock. Player wins!
```

---

## ✅ Features:

* Fully randomized computer and player choices
* Follows standard game rules
* Clear and readable output
* Easy to extend with real user input (e.g., using `prompt()` in the browser)

---

## 📌 Optional Enhancements:

* Replace the random player selection with user input via `prompt()`
* Add rounds and scoring
* Build a simple UI with HTML/CSS
