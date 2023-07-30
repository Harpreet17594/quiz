// var valueOfInitials = document.getElementById("initials").value;
var highscores = document.getElementById("highscores");
var scoreScreen = document.getElementById("scoreScreen");
var finalScore = document.getElementById("final-score");
var clear = document.getElementById("clear");
// var val = document.getElementById("final-score").value;

// var para = new URLSearchParams(window.location.search);
// var pass = para.get("initialValue");

// highscores.textContent = pass + " -----> " + pass;
// (A) GET FROM SESSION STORAGE
var first = sessionStorage.getItem("initialvalue"),
  second = JSON.parse(sessionStorage.getItem("countscore")),
  third = sessionStorage.getItem("timecount");

// (B) IT WORKS!
highscores.textContent =
  first + " you scored " + second + " in " + third + " seconds";

console.log(first);
console.log(second);

// (C) CLEAR SESSION STORAGE
// sessionStorage.removeItem("KEY");
// sessionStorage.clear();

clear.addEventListener("click", function () {
  highscores.textContent = "";
});
