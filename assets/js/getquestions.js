var heading = document.getElementById("heading");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var show = document.getElementById("show");
// var start_quiz = document.getElementById("start_quiz");
var endScreen = document.getElementById("end-screen");
var start = document.getElementById("start");
var finalScore = document.getElementById("final-score");

var counter = 0;
var answer;
var change;
var count_score = 0;

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

heading.style.visibility = "hidden";
option1.style.visibility = "hidden";
option2.style.visibility = "hidden";
option3.style.visibility = "hidden";
option4.style.visibility = "hidden";
show.style.visibility = "hidden";
endScreen.style.visibility = "hidden";
// start_quiz.style.visibility = "hidden";

var myQuestions = [
  {
    question: "What is the full form of HTML ? ",
    answers: {
      a: "Hypertext Markup Language",
      b: "Hypertext Markup Loop",
      c: "Hypertext Language",
      d: "Language",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the full form of CSS? ",
    answers: {
      a: "Cascading style page",
      b: "Cascading style sheet",
      c: "Cascading sheet",
      d: "Hypertext Language",
    },
    correctAnswer: "b",
  },
  {
    question: "What is the full form of JAVASCRIPT? ",
    answers: {
      a: "java",
      b: "script",
      c: "java script",
      d: "js",
    },
    correctAnswer: "c",
  },
  {
    question: "What is not programming language? ",
    answers: {
      a: "C",
      b: "C++",
      c: "firefox",
      d: "css",
    },
    correctAnswer: "c",
  },
  {
    question: "What is GIT? ",
    answers: {
      a: "version control system",
      b: "virus control system",
      c: "control system",
      d: "software",
    },
    correctAnswer: "a",
  },
];
var i = 0;

function getData(count) {
  i = count;
  for (i; i < myQuestions.length; ) {
    heading.style.visibility = "visible";
    option1.style.visibility = "visible";
    option2.style.visibility = "visible";
    option3.style.visibility = "visible";
    option4.style.visibility = "visible";
    show.style.visibility = "visible";
    start.style.visibility = "hidden";

    answer = myQuestions[counter].correctAnswer;

    heading.textContent = myQuestions[counter].question;
    option1.textContent = myQuestions[counter].answers.a;
    option1.addEventListener("click", function () {
      change = "a";
      alert(change);
    });
    option2.textContent = myQuestions[counter].answers.b;
    option2.addEventListener("click", function () {
      change = "b";
    });
    option3.textContent = myQuestions[counter].answers.c;
    option3.addEventListener("click", function () {
      change = "c";
    });
    option4.textContent = myQuestions[counter].answers.d;
    option4.addEventListener("click", function () {
      change = "d";
    });
  }
}

start.addEventListener("click", (event) => {
  i++;
  getData(counter);
  //   setTime();
});
