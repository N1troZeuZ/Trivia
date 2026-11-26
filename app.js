// Find the answer form and the spot where the result appears.
const quizForm = document.querySelector("#quiz-form");
const feedback = document.querySelector("#feedback");

// Check the player's answer when they submit the form.
function checkAnswer(event) {
  event.preventDefault(); // Keep the page open so the result stays visible.
  const selectedAnswer = quizForm.querySelector("input:checked").value;

  if (selectedAnswer === "shears") {
    feedback.textContent = "Correct! Shears collect wool from a sheep.";
  } else {
    feedback.textContent = "Try again.";
  }
}

quizForm.addEventListener("submit", checkAnswer);
