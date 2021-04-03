this;
// base document create elements
var body = document.body;

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

function displayMessage() {
	qHeader.textContent = `OUT OF TIME`;

	for (var i = 0; i < buttonContainer.children.length; i++) {
		buttonContainer.children[i].setAttribute(`style`, `display: none;`);
	}
}

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
});

var questionNumber = 0;
var currentAnswer = ``;

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
		{
			question: `  ______ JavaScript is also called client-side JavaScript`,
			a: `  Microsoft`,
			b: `  Navigator`,
			c: `  LiveWire`,
			d: `  Native`,
			correct: `b`,
		},
		{
			question: `  __________ JavaScript is also called server-side JavaScript`,
			a: `  Microsoft`,
			b: `   Navigator`,
			c: `  LiveWire`,
			d: `  Native`,
			correct: `c`,
		},
		{
			question: `  What are variables used for in JavaScript Programs?`,
			a: `  Storing numbers, dates, or other values`,
			b: `   Varying randomly`,
			c: `  Causing high-school algebra flashbacks`,
			d: `  None of the above`,
			correct: `a`,
		},
		{
			question: `  _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation`,
			a: `  Client-side`,
			b: `   Server-side`,
			c: `  Local`,
			d: `  Native`,
			correct: `a`,
		},
		{
			question: `  What should appear at the very end of your JavaScript?`,
			a: `  The END statement`,
			b: `   The </script>`,
			c: `    The <script>`,
			d: `None of the above`,
			correct: `a`,
		},
		{
			question: `  Which of the following can't be done with client-side JavaScript?`,
			a: `  Validating a form`,
			b: `   Sending a form's contents by email`,
			c: `  Storing the form's contents to a database file on the server`,
			d: `  None of the above`,
			correct: `c`,
		},
		{
			question: `  Which of the following are capabilities of functions in JavaScript?`,
			a: `  Return a value`,
			b: `   Accept parameters and Return a value`,
			c: `  Accept parameters`,
			d: `  None of the above`,
			correct: `c`,
		},
		{
			question: `  Which of the following is not a valid JavaScript variable name?`,
			a: `  2names`,
			b: `   _first_and_last_names`,
			c: `  FirstAndLast`,
			d: `  None of the above`,
			correct: `c`,
		},
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

	if (questionNumber === 10) {
		qHeader.textContent = `Complete with a time of ${timerValue}`;

		for (var i = 0; i < buttonContainer.children.length; i++) {
			buttonContainer.children[i].setAttribute(`style`, `display: none;`);
		}
	}
}
