document.addEventListener("keydown", (event) => {
    const keyElement = document.querySelector(`.key[data-key="${event.code}"]`);
    if (keyElement) keyElement.classList.add("active");
  });
  
document.addEventListener("keyup", (event) => {
    const keyElement = document.querySelector(`.key[data-key="${event.code}"]`);
    if (keyElement) keyElement.classList.remove("active");
  });

async function fetchRandomWord() {
    try {
      const res = await fetch('https://random-word-api.herokuapp.com/word');
      const data = await res.json();
      const word = data[0];
  
      // Insert the word into the HTML
      document.getElementById('wordBox').innerText = word;
    } catch (err) {
      document.getElementById('wordBox').innerText = "Failed to fetch word.";
      console.error(err);
    }
}

fetchRandomWord();

/* This is the code for startGame() */
let countdown; // Global so we can clear it

function startGame() {
    let timeLeft = 60;
    const timerElement = document.getElementById('timer');

    // Reset timer if game is restarted
    clearInterval(countdown);
    timerElement.innerText = timeLeft;

    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            endGame(); // Call endGame when time's up
        }
    }, 1000);
}

function endGame() {
    alert("⏰ Time's up! Game over.");
    // You can also disable input, show final stats, etc.
}
