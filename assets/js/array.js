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

function getData(counter) {
  heading.style.visibility = "visible";
  option1.style.visibility = "visible";
  option2.style.visibility = "visible";
  option3.style.visibility = "visible";
  option4.style.visibility = "visible";
  show.style.visibility = "visible";
  //   start_quiz.style.visibility = "hidden";
  start.style.visibility = "hidden";

  answer = myQuestions[counter].correctAnswer;
  //   show.textContent = "";

  heading.textContent = myQuestions[counter].question;
  option1.textContent = myQuestions[counter].answers.a;
  option1.addEventListener("click", option1Click);
  option2.textContent = myQuestions[counter].answers.b;
  option2.addEventListener("click", option2Click);
  option3.textContent = myQuestions[counter].answers.c;
  option3.addEventListener("click", option3Click);
  option4.textContent = myQuestions[counter].answers.d;
  option4.addEventListener("click", option4Click);
  return;
}

function option1Click() {
  change = "a";
  if (counter < myQuestions.length) {
    if (change == answer) {
      counter += 1;
      count_score += 1;
      getData(counter);
    } else {
      counter += 1;
      getData(counter);
    }
  } else {
    heading.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    show.style.display = "none";
    start.style.display = "none";
    endScreen.style.visibility = "visible";
    //set final score
    finalScore.textContent = count_score;
    return;
  }
}
function option2Click() {
  change = "b";
  if (counter < myQuestions.length) {
    if (change == answer) {
      counter += 1;
      count_score += 1;
      getData(counter);
    } else {
      counter += 1;
      getData(counter);
    }
  } else {
    heading.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    show.style.display = "none";
    start.style.display = "none";
    endScreen.style.visibility = "visible";
    //set final score
    finalScore.textContent = count_score;
    return;
  }
}

function option3Click() {
  change = "c";
  if (counter < myQuestions.length) {
    if (change == answer) {
      counter += 1;
      count_score += 1;
      getData(counter);
    } else {
      counter += 1;
      getData(counter);
    }
  } else {
    heading.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    show.style.display = "none";
    start.style.display = "none";
    endScreen.style.visibility = "visible";
    //set final score
    finalScore.textContent = count_score;
    return;
  }
}

function option4Click() {
  change = "d";
  if (counter < myQuestions.length) {
    if (change == answer) {
      counter += 1;
      count_score += 1;
      getData(counter);
    } else {
      counter += 1;
      getData(counter);
    }
  } else {
    heading.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    show.style.display = "none";
    start.style.display = "none";
    endScreen.style.visibility = "visible";
    //set final score
    finalScore.textContent = count_score;
    return;
  }
}

// function setCount() {
//   if (counter < myQuestions.length) {
//     console.log("type of change :" + typeof change);
//     console.log("type of answer :" + typeof answer);
//     console.log("counter :" + counter);
//     console.log("count score :" + count_score);

//     counter = counter + 1;
//     show.textContent = answer + " is the correct answer";

//     getData(counter);
//   } else {
//     heading.style.display = "none";
//     option1.style.display = "none";
//     option2.style.display = "none";
//     option3.style.display = "none";
//     option4.style.display = "none";
//     show.style.display = "none";
//     start.style.display = "none";
//     endScreen.style.visibility = "visible";
//     //set final score
//     finalScore.textContent = count_score;
//     return;
//   }
// }

//timer function
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
}

start.addEventListener("click", (event) => {
  getData(counter);
  setTime();
});
