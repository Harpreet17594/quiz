// import { setTime,sendMessage } from './js/time.js';

// import { setTime } from "./timer.js";
var heading=document.getElementById("heading");
var option1=document.getElementById("option1");
var option2=document.getElementById("option2");
var option3=document.getElementById("option3");
var option4=document.getElementById("option4");
var show=document.getElementById("show");
var start_quiz=document.getElementById("start_quiz");
var end_screen=document.getElementById("end-screen");
var start=document.getElementById("start");
var final_score=document.getElementById("final_score");


var counter=0,answer='';
var change='',count_score=0;

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

start.addEventListener("click", (event) => {
	getData(counter);
	setTime();
});

heading.style.visibility = 'hidden';
option1.style.visibility = 'hidden';
option2.style.visibility = 'hidden';
option3.style.visibility = 'hidden';
option4.style.visibility = 'hidden';
show.style.visibility="hidden";
end_screen.style.visibility="hidden";
start_quiz.style.visibility="hidden";




var myQuestions = [
	{
		question: "What is the full form of HTML ? ",
		answers: {
			a: 'Hypertext Markup Language',
			b: 'Hypertext Markup Loop',
			c: 'Hypertext Language',
			d: 'Hypertext Language'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is the full form of CSS? ",
		answers: {
			a: 'Cascading style page',
			b: 'Cascading style sheet',
			c: 'Cascading sheet',
			d: 'Hypertext Language'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is the full form of JAVASCRIPT? ",
		answers: {
			a: 'Cascading style page',
			b: 'Cascading style sheet',
			c: 'Cascading sheet',
			d: 'Hypertext Language'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is the full form of REACT? ",
		answers: {
			a: 'Cascading style page',
			b: 'Cascading style sheet',
			c: 'Cascading sheet',
			d: 'Hypertext Language'
		},
		correctAnswer: 'c'
	},
	{
		question: "What is the full form of GIT? ",
		answers: {
			a: 'Cascading style page',
			b: 'Cascading style sheet',
			c: 'Cascading sheet',
			d: 'Hypertext Language'
		},
		correctAnswer: 'a'
	}
];

// start.addEventListener("click",getData(counter));

function getData(counter){
	console.log(counter);
		heading.style.visibility = 'visible';
		option1.style.visibility = 'visible';
		option2.style.visibility = 'visible';
		option3.style.visibility = 'visible';
		option4.style.visibility = 'visible';
		show.style.visibility="visible";
		start_quiz.style.visibility="hidden";
		start.style.visibility="hidden";

	 if(counter == myQuestions.length)
	{
		//it means array is empty now 
		heading.style.visibility = 'hidden';
		option1.style.visibility = 'hidden';
		option2.style.visibility = 'hidden';
		option3.style.visibility = 'hidden';
		option4.style.visibility = 'hidden';
		show.style.visibility="hidden";
		start_quiz.style.visibility="hidden";
		start.style.visibility="hidden";
		end_screen.style.visibility="visible";

		console.log("count score : "+count_score);
		//set final score
		final_score.textContent=count_score;
	}

	heading.textContent = myQuestions[counter].question;
	option1.textContent = myQuestions[counter].answers.a;
	option1.addEventListener('click',function(){
		change='a';
		a();
	});
	option2.textContent = myQuestions[counter].answers.b;
	option2.addEventListener('click',function(){
		// event.preventDefault();
		change='b';
		a();
	});
	option3.textContent = myQuestions[counter].answers.c;
	option3.addEventListener('click',function(){
		change='c';
		a();
	});
	option4.textContent = myQuestions[counter].answers.d;
	option4.addEventListener('click',function(){
		change='d';
		a();
	});
	answer=myQuestions[counter].correctAnswer;

}



//-------------
// start_quiz.addEventListener('style', 'visibility:hidden');
//--------------
function a(){
	if(answer == change)
	{
		console.log("data=  "+answer);
		counter=counter+1;
		show.textContent = answer+" is the correct answer";
		count_score=count_score+1;
		getData(counter);


	}

	// else if(answer == change)
	// {
	// 	console.log("data=  "+answer);
	// 	counter=counter+1;
	// 	show.textContent = answer+" is the correct answer";
	// 	getData(counter);

	// } else if(answer == change)
	// {
	// 	console.log("data=  "+answer);
	// 	counter=counter+1;
	// 	show.textContent = answer+" is the correct answer";
	// 	getData(counter);

	// }else if(answer == change)
	// {
	// 	console.log("data=  "+answer);
	// 	counter=counter+1;
	// 	show.textContent = answer+" is the correct answer";
	// 	getData(counter);
	// }
}


//timer function
function setTime() {
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
   function sendMessage() {
	timeEl.textContent = " ";
  }