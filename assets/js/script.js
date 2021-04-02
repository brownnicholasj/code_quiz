this
// base document create elements
var body = document.body;

var timerElement = document.querySelector(`#timer`);
var timerValue = 60;
var wrongPenalty = 5;
var highScore = document.querySelector(`#highscore`);
var qHeader = document.querySelector(`#question`);
var buttonContainer = document.querySelector(`#answerPanel`);
var buttonA =document.querySelector(`#a`);
var buttonB =document.querySelector(`#b`);
var buttonC =document.querySelector(`#c`);
var buttonD =document.querySelector(`#d`);


// // Add text to elements
timerElement.textContent = `Timer: ${timerValue}`; 
buttonA.textContent = `Click to Start`;



// // Set Styling
buttonA.setAttribute(`style`, `display: block; align-self: center; margin-top:20px;`);

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
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// BUTTON press function
buttonContainer.addEventListener("click", function(event) {
  event.preventDefault;
  event.stopPropagation;
  var element = event.target;

  if (element.matches("button")) {
    var butID = element.getAttribute("id");

    // Check which button using the ID
    if (butID === `a`) {
      // different action for start of quiz
      if (element.childNodes[0].data === `Click to Start`){
        buttonA.removeAttribute(`style`);
        askQuestion();
        countdown();
      } else{

      }

    } else if (butID === `b`) {

    } else if (butID === `c`) {

    }else if (butID === `d`) {

    }     
  }
}
);

var questionNumber = 0;

function askQuestion() {
  var problem = [
    {
     question: `Question 1`,
     a: `answer a`,
     b: `answer b`,
     c: `answer c`,
     d: `answer d`,
     correct: `a`  
    },
    {
      question: `Question 2`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 3`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 4`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 5`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 6`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 7`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 8`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 9`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     },
     {
      question: `Question 10`,
      a: `answer a`,
      b: `answer b`,
      c: `answer c`,
      d: `answer d`,
      correct: `a`  
     }
  ]

  for (var i=0; i < buttonContainer.children.length; i++) {
    buttonContainer.children[i].setAttribute(`style`, `display: block;`);
  }
  

  qHeader.textContent = problem[questionNumber].question;
  buttonA.textContent = problem[questionNumber].a;
  buttonB.textContent = problem[questionNumber].b;
  buttonC.textContent = problem[questionNumber].c;
  buttonD.textContent = problem[questionNumber].d;

}