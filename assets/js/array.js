var heading=document.getElementById("heading");
var option1=document.getElementById("option1");
var option2=document.getElementById("option2");
var option3=document.getElementById("option3");
var option4=document.getElementById("option4");
var show=document.getElementById("show");

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
var counter=0,answer='';
function getData(){
    for(var i=0;i<myQuestions.length;i++)
    {
		// console.log("counter=  "+counter);
		show.textContent="";

            heading.textContent = myQuestions[counter].question;
            option1.textContent = myQuestions[counter].answers.a;
			option1.addEventListener('click',a);
            option2.textContent = myQuestions[counter].answers.b;
			option2.addEventListener('click',a);
            option3.textContent = myQuestions[counter].answers.c;
			option3.addEventListener('click',a);
            option4.textContent = myQuestions[counter].answers.d;
			option4.addEventListener('click',a);

			answer=myQuestions[counter].correctAnswer;


    }
}

getData();
function a(){
	if(answer=='a')
	{
		counter=counter+1;
		// show.textContent="Correct Answer !!!!!!";
		alert("Correct Answer");
		getData();
		console.log("counter=  "+counter);

	} else if(answer=='b')
	{
		counter=counter+1;
		// show.textContent="Correct Answer !!!!!!";
		alert("Correct Answer");
		getData();
		console.log("counter=  "+counter);
	} else if(answer=='c')
	{
		counter=counter+1;
		// show.textContent="Correct Answer !!!!!!";
		alert("Correct Answer");
		getData();
		console.log("counter=  "+counter);
	} else if(answer=='d')
	{
		counter=counter+1;
		// show.textContent="Correct Answer !!!!!!";
		alert("Correct Answer");
		getData();
		console.log("counter=  "+counter);
	}
}
