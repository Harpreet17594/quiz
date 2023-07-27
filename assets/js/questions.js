var myQuestions = [
	{
		question: "What is the full form of HTML ? ",
		answers: {
			a: 'Hypertext Markup Language',
			b: 'Hypertext Markup Loop',
			c: 'Hypertext Language',
			d: 'Hypertext Language'
		},
		correctAnswer: 'a'
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
		correctAnswer: 'b'
	}
];
var addtag,addtag1,addtag2,addtag3,addtag4;
var i=0,x=0,y=0;
createQuestion(0);

//accessing array of answers
function createQuestion(y)
{
	

	addtag = document.createElement("button");
	addtag.textContent = myQuestions[y].question;
	addtag.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");
	document.body.appendChild(addtag);
	document.write("<br>");

	addtag1 = document.createElement("button");
	addtag1.textContent = myQuestions[y].answers.a;
	addtag1. setAttribute('id','optionA');
	addtag1.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");
	document.body.appendChild(addtag1);
	document.write("<br>");
	// addtag1.addEventListener("click",function()
	// {
	// 	alert("Correct answer");
	// 	y=y+1;
	// 	createQuestion(y);
	// })


	
	 addtag2 = document.createElement("button");
	addtag2.textContent = myQuestions[y].answers.b;
	addtag2. setAttribute('id','optionB');
	addtag2.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");
	document.body.appendChild(addtag2);
	document.write("<br>");


	 addtag3 = document.createElement("button");
	addtag3.textContent = myQuestions[y].answers.c;
	addtag3. setAttribute('id','optionC');
	addtag3.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");

	document.body.appendChild(addtag3);
	document.write("<br>");


	 addtag4 = document.createElement("button");
	addtag4.textContent = myQuestions[y].answers.d;
	addtag4. setAttribute('id','optionD');
	addtag4.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");

	document.body.appendChild(addtag4);

	document.write("<br>");
	i=i+1;
	// document.getElementById("optionA").onclickEventListener("click", createQuestion());

	// document.getElementById('question-title').innerHTML ='<div class="question">' + myQuestions[i].question + '</div>';
}
	next = document.createElement("button");
	next.textContent = "NextQuestion";
	next. setAttribute('id','nextQuestion');
	next.setAttribute("style", "display: inline-block,margin: 5px,display: inline-block,margin: 5px,cursor: pointer,font-size: 100%,background-color: #563d7c,border-radius: 5px,	padding: 2px 10px,color: white,border: 0,transition: background-color 0.1s");
	document.body.appendChild(next);
	next.addEventListener('click', loadnextQuestion);
	function loadnextQuestion()
	{
		x=x+2;
		createQuestion(x);
		console.log("x=  "+x);

	}

// for(i=0;i<=;i++)
// {
// 	createQuestion(i);
// }























// const optionA = document.getElementById("optionA");
// // optionA.addEventListener("click", createQuestion, false);
// optionA.addEventListener("click", decrementElClick);

// function decrementElClick()
// {
// 	alert("Correct answer");
// }



// addtag.onclick = nextQuestion();

// function nextQuestion() {
// 	// createQuestion();
// 	// addtag.onclick = createQuestion();
// 	alert('clicked');
// }









