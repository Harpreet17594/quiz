// Selects element by class
var timeEl = document.querySelector(".time");


var secondsLeft = 60;

export function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
export function sendMessage() {
  timeEl.textContent = " ";
}

// setTime();
