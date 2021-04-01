this
// base document create elements
var body = document.body;

var questionBox = document.createElement("div");
var h2Element = document.createElement("h2");
var instructionElement = document.createElement("p");
var timerValue = 60;
var wrongPenalty = 5;
var headerElement = document.createElement(`header`);
var timerElement = document.createElement(`span`);
var highScore = document.createElement(`span`);
var buttonElement = document.createElement(`div`);
var startButton = document.createElement(`button`);


// Add text to elements
h2Element.textContent = "Coding Quiz Challenge";
instructionElement.textContent = `Answer the following questions in the least amount of time possible.  Each wrong answer will cost you ${wrongPenalty} seconds.  You have ${timerValue} seconds, try to beat the high score.`;
timerElement.textContent = `Timer: ${timerValue}`;
highScore.textContent = 'View Highscores';
startButton.innerHTML = `Start Quiz`;


// Set Styling
body.setAttribute(`style`,`background-color: #6B705C;`);
headerElement.setAttribute(`style`,`height:35px; background-color: #A5A58D;display:flex; flex-direction: row; justify-content: space-between; align-items:center; padding: 0 10px`);
    timerElement.setAttribute(`style`,`font-weight: bold;`);
    highScore.setAttribute(`style`,`font-weight: bold;`);

questionBox.setAttribute(`style`, `margin: auto; width:50%; margin-top: 100px; display:flex;  flex-direction:column; background-color: #A5A58D;`);
    h2Element.setAttribute(`style`, `padding-left:10px; margin: 3px;`);
    instructionElement.setAttribute(`style`, `font-size: 1.2em; background-color: #B7B7A4; align-self: flex-end; margin: 0; padding: 35px 5px 5px 5px;`);

buttonElement.setAttribute(`style`,`margin-top: 10px; display: flex; flex-direction: column; width:50%; justify-content: space-evenly; position: fixed; left: 25%;`);
    startButton.setAttribute(`style`,`width: 50%; position: relative; left: 25%; background-color: #CB997E; border-color: black; color: black;`);
    startButton.setAttribute('id','btn');


// Append to page
body.appendChild(headerElement);
headerElement.appendChild(highScore);
headerElement.appendChild(timerElement);
body.appendChild(questionBox);
questionBox.appendChild(h2Element);
questionBox.appendChild(instructionElement);
body.appendChild(buttonElement);
buttonElement.appendChild(startButton);


document.querySelector('#btn').addEventListener(`click`, ()=>{
    countdown();
    console.log(`starting countdown`);
})


//COUNTDOWN Functionality - counts down by 1, no missed answer yet
function countdown() {

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
var timeCount = setInterval(function () {
    // As long as the `timerValue` is greater than 1
    if (timerValue > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerElement.textContent = timerValue + ' seconds remaining';
      // Decrement `timerValue` by 1
      timerValue--;
    } else if (timerValue === 1) {
      // When `timerValue` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timerValue + ' second remaining';
      timerValue--;
    } else {
      // Once `timerValue` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}