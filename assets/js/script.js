// variable storage
var timerElement = document.querySelector(`#timer`);
var timerValue = 60;
var wrongPenalty = -5;
var highScore = document.querySelector(`#highscore`);
var qHeader = document.querySelector(`#question`);
var buttonContainer = document.querySelector(`#answerPanel`);
var buttonA = document.querySelector(`#a`);
var buttonB = document.querySelector(`#b`);
var buttonC = document.querySelector(`#c`);
var buttonD = document.querySelector(`#d`);
var buttonReset = document.querySelector(`#reset`);
var leaderboard = document.querySelector(`#leaderboard`);
var records = document.querySelector(`#records`);
var resetLeader = document.querySelector(`#resetLeader`);
var saveButton = document.querySelector(`#save`);

var leaders = [{}];

// // Add text to elements
timerElement.textContent = `Timer: ${timerValue}`;
buttonA.textContent = `Click to Start`;

// // Set Styling
buttonA.setAttribute(
	`style`,
	`display: block; align-self: center; margin-top:20px;`
);

// // Append to page
// body.appendChild(headerElement);
// headerElement.appendChild(highScore);
// headerElement.appendChild(timerElement);
// body.appendChild(questionBox);
// questionBox.appendChild(h2Element);
// questionBox.appendChild(instructionElement);
// body.appendChild(buttonElement);
// buttonElement.appendChild(startButton);

//COUNTDOWN Functionality - counts down by 1, no missed answer yet
function countdown() {
	// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
	var timeCount = setInterval(function () {
		if (questionNumber === 10) {
			clearInterval(timeCount);
			timerElement.textContent = `Timer: ${timerValue} seconds remaining`;
		} else {
			// As long as the `timerValue` is greater than 1
			if (timerValue > 1) {
				// Set the `textContent` of `timerEl` to show the remaining seconds
				timerElement.textContent = `Timer: ${timerValue} seconds remaining`;
				// Decrement `timerValue` by 1
				timerValue--;
			} else if (timerValue === 1) {
				// When `timerValue` is equal to 1, rename to 'second' instead of 'seconds'
				timerElement.textContent = `Timer: ${timerValue} second remaining`;
				timerValue--;
			} else {
				// Once `timerValue` gets to 0, set `timerEl` to an empty string
				timerElement.textContent = `Timer: ${timerValue}`;
				// Use `clearInterval()` to stop the timer
				clearInterval(timeCount);
				// Call the `displayMessage()` function
				displayMessage();
				console.log(`end of timeInterval loop`);
			}
		}
	}, 1000);
}

// display message at end of quiz IF you run out of time
function displayMessage() {
	qHeader.textContent = `OUT OF TIME`;

	for (var i = 0; i < buttonContainer.children.length; i++) {
		buttonContainer.children[i].setAttribute(`style`, `display: none;`);
	}

	buttonReset.setAttribute(`style`, `display: block;`);
}

// Penalty function to take away time for wrong answer
function penalty() {
	if (timerValue >= 6) {
		timerValue += wrongPenalty;
	} else {
		timerValue = 0;
	}
}

// BUTTON press function
buttonContainer.addEventListener('click', function (event) {
	event.preventDefault;
	event.stopPropagation;
	var element = event.target;

	if (element.matches('button')) {
		var butID = element.getAttribute('id');
		// Check which button using the ID
		if (butID === `a`) {
			// different action for start of quiz
			if (element.childNodes[0].data === `Click to Start`) {
				buttonA.removeAttribute(`style`);
				askQuestion();
				countdown();
			} else {
				if (butID === currentAnswer) {
					askQuestion();
				} else {
					penalty();
					askQuestion();
				}
			}
		}
		if (butID === `b`) {
			if (butID === currentAnswer) {
				askQuestion();
			} else {
				penalty();
				askQuestion();
			}
		}
	}
	if (butID == `c`) {
		if (butID === currentAnswer) {
			askQuestion();
		} else {
			penalty();
			askQuestion();
		}
	}
	if (butID === `d`) {
		if (butID === currentAnswer) {
			askQuestion();
		} else {
			penalty();
			askQuestion();
		}
	}
	if (butID === `reset`) {
		resetQuiz();
	}
});

// Set quiz variables for question num and current answer storage
var questionNumber = 0;
var currentAnswer = ``;

// function to generate each question
function askQuestion() {
	var problem = [
		{
			question: `Why so JavaScript and Java have similar name?`,
			a: `  JavaScript is a stripped-down version of Java`,
			b: `  JavaScript's syntax is loosely based on Java's`,
			c: `  They both originated on the island of Java`,
			d: `  None of the above`,
			correct: `b`,
		},
		{
			question: `  When a user views a page containing a JavaScript program, which machine actually executes the script?`,
			a: `  The User's machine running a Web browser`,
			b: `   The Web server`,
			c: `  A central machine deep within Netscape's corporate offices`,
			d: `  None of the above`,
			correct: `a`,
		},
		// {
		// 	question: `  ______ JavaScript is also called client-side JavaScript`,
		// 	a: `  Microsoft`,
		// 	b: `  Navigator`,
		// 	c: `  LiveWire`,
		// 	d: `  Native`,
		// 	correct: `b`,
		// },
		// {
		// 	question: `  __________ JavaScript is also called server-side JavaScript`,
		// 	a: `  Microsoft`,
		// 	b: `   Navigator`,
		// 	c: `  LiveWire`,
		// 	d: `  Native`,
		// 	correct: `c`,
		// },
		// {
		// 	question: `  What are variables used for in JavaScript Programs?`,
		// 	a: `  Storing numbers, dates, or other values`,
		// 	b: `   Varying randomly`,
		// 	c: `  Causing high-school algebra flashbacks`,
		// 	d: `  None of the above`,
		// 	correct: `a`,
		// },
		// {
		// 	question: `  _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation`,
		// 	a: `  Client-side`,
		// 	b: `   Server-side`,
		// 	c: `  Local`,
		// 	d: `  Native`,
		// 	correct: `a`,
		// },
		// {
		// 	question: `  What should appear at the very end of your JavaScript?`,
		// 	a: `  The END statement`,
		// 	b: `   The </script>`,
		// 	c: `    The <script>`,
		// 	d: `None of the above`,
		// 	correct: `a`,
		// },
		// {
		// 	question: `  Which of the following can't be done with client-side JavaScript?`,
		// 	a: `  Validating a form`,
		// 	b: `   Sending a form's contents by email`,
		// 	c: `  Storing the form's contents to a database file on the server`,
		// 	d: `  None of the above`,
		// 	correct: `c`,
		// },
		// {
		// 	question: `  Which of the following are capabilities of functions in JavaScript?`,
		// 	a: `  Return a value`,
		// 	b: `   Accept parameters and Return a value`,
		// 	c: `  Accept parameters`,
		// 	d: `  None of the above`,
		// 	correct: `c`,
		// },
		// {
		// 	question: `  Which of the following is not a valid JavaScript variable name?`,
		// 	a: `  2names`,
		// 	b: `   _first_and_last_names`,
		// 	c: `  FirstAndLast`,
		// 	d: `  None of the above`,
		// 	correct: `c`,
		// },
	];

	for (var i = 0; i < buttonContainer.children.length; i++) {
		buttonContainer.children[i].setAttribute(`style`, `display: block;`);
	}

	// Set question and multiple choice + store answer in var increase questionNumber
	qHeader.textContent = problem[questionNumber].question;
	buttonA.textContent = problem[questionNumber].a;
	buttonB.textContent = problem[questionNumber].b;
	buttonC.textContent = problem[questionNumber].c;
	buttonD.textContent = problem[questionNumber].d;
	currentAnswer = problem[questionNumber].correct;
	questionNumber++;

	if (questionNumber === 2) {
		qHeader.textContent = `Completed with a time of ${timerValue}`;

		for (var i = 0; i < buttonContainer.children.length; i++) {
			buttonContainer.children[i].setAttribute(`style`, `display: none;`);
		}

		leaderboard.setAttribute(`style`, `display:block;`);
		records.setAttribute(`style`, `display:block`);
		saveButton.setAttribute(`style`, `display:block`);
		buttonReset.setAttribute(`style`, `display:block;`);
		resetLeader.setAttribute(`style`, `display:block;`);
	}
}

// function to reset the quiz by reload()
function resetQuiz() {
	questionNumber = 0;
	currentAnswer = ``;
}

// Leaderboard construction

function updateLeaders() {
	// STORING INPUTS
	var initials = {
		name: document.querySelector(`#initials`).value,
		time: timerValue,
	};
	console.log(`1. initials var is ${initials.name} + ${initials.time}`);

	// BLANK ARRAY
	var leaders = [];
	// PULL CURRENT LOCAL
	var get = JSON.parse(localStorage.getItem('leaders'));

	// FILL BLANK ARRAY WITH CURRENT LOCAL
	leaders = [get];
	console.log(`2. leaders pull is` + JSON.stringify(leaders));

	if (initials === null || initials === '') {
		return;
	}

	// PUSH NEW INPUT INTO ARRAY
	leaders.push(initials);

	// ADD TO LOCAL
	localStorage.setItem('leaders', JSON.stringify(leaders));

	console.log(`this should be stored in local under leaders -- ${leaders}`);

	renderLeaderboard();
}

function renderLeaderboard() {
	leaderboard.children[0].innerHTML = '';

	// Use JSON.parse() to convert text to JavaScript object
	var leaders = JSON.parse(localStorage.getItem('leaders'));

	// Check if data is returned, if not exit out of the function

	if (leaders !== null) {
		for (var i = 0; i < leaders.length; i++) {
			var place = document.createElement('li');
			place.textContent = `${leaders[i].name} ----- ${leaders[i].time} seconds`;
			place.setAttribute(`data-time`, `${leaders[i].time}`);
			place.setAttribute(`data-place`, i);

			leaderboard.children[0].appendChild(place);
		}
	}
}

// save initials and time to the leaderboard
saveButton.addEventListener('click', function (event) {
	event.preventDefault();
	event.stopPropagation();
	updateLeaders();
});

// show the leaderboard on/off
highScore.addEventListener('click', function (event) {
	event.stopPropagation();
	event.preventDefault();
	if (leaderboard.style.display == `block`) {
		leaderboard.setAttribute(`style`, `display:none;`);
		resetLeader.setAttribute(`style`, `display:none`);
	} else {
		leaderboard.setAttribute(`style`, `display:block;`);
		resetLeader.setAttribute(`style`, `display:block;`);
		renderLeaderboard();
	}
});

// clear leaderboard
// resetLeader.addEventListener('click', function (event) {
// 	event.preventDefault();
// 	event.stopPropagation();
// 	localStorage.clear();
// 	for (var i = 0; i < 10; i++) {
// 		document.getElementById('leaderboard').children[0].children[
// 			i
// 		].innerHTML = ``;
// 	}
// });

// Reset page for another try at the quiz
reset.addEventListener('click', function (event) {
	event.stopPropagation();
	event.preventDefault();
	window.location.reload();
});

// Enter key disabled on text for inputs -- from https://stackoverflow.com/users/5105831/tarik
window.addEventListener(
	'keydown',
	function (e) {
		if (
			e.keyIdentifier == 'U+000A' ||
			e.keyIdentifier == 'Enter' ||
			e.keyCode == 13
		) {
			if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
				e.preventDefault();
				updateLeaders();
				return false;
			}
		}
	},
	true
);
renderLeaderboard();
