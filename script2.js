//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

//Wait for DOM content to be loaded before executing the function
document.addEventListener("DOMContentLoaded",function(){

    //return all of the buttons on the page; pulls them as an array
    let buttons=document.getElementsByTagName("button");

    //iterates the array(above it pulled them)
    //for (let i = 0; i < buttons.length; i++){}

    //more modern version bellow
    //will iterate and return each element in the array storing it in variable button. you don`t have to use index notation to speak to elements in the array
    for (let button of buttons){
        //add event listeners inside the for loop
        button.addEventListener("click", function(){
            //this refers to the button that was just clicked(ex the submit, the addition button, etc.)
            //you then collect the attibute and check the type of the content
            //if it is the submitt that is clicked, then it displays that message
            if (this.getAttribute("data-type") ==="submit"){
                checkAnswer();
            }else{
                //if not submitt, otherwise, set the game type to the value of the attribute; data-type tells us what game type we want to run
                let gameType=this.getAttribute("data-type");
                //Gives an allert on the game type you selected, which is basically what gameType variable tells you; tells basically the user what button was clicked
                //alert(`You clicked${gameType}`); replaced with a function that calls the game
                runGame(gameType);
            }
            }
        })
    }
    //Runs addition game by default, starts as soon as the page is loaded. This sits outside of the for loop
    runGame("addition")
})
//added gametype to determine the type of game the function will run. It will determine the parameters the function will accept.
function runGame(gameType){
    //generates the first number of the game as a whole number(integer) between 0-25 and avoids 0 since we did a +1
    let num1=Math.floor(Math.random()*25)+1;
    //did the same for num2
    let num2=Math.floor(Math.random()*25)+1;

    // checks which gametype you are running and call appropriate function to display the question
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
        
        //you add an else if in order to add the remaining loops or operations
    }else if (gameType === "multiply"){
        //alerts the user if the gametype is unknown
        displayMultiplyQuestion(num1, num2)
    }else{
        alert('Unknown game type:&{gameType}');
        //throw statement will stop the console from running and will send a message to the console
        throw 'Unknown game type: ${gameType}. Aborting!';
    }
    }
}
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */

function checkAnswer(){
    let userAnswer= parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateCorrectAnswer[0];
//if bellow sets automatically the if TRUE enviorement
    if (isCorrect) {
        alert" Hey! You got this right! :D");
        //added the increment function so it updates the results
        incrementScore();
    }else{
        alert('Awww.... you answered${userAnswer}. The correct answer was ${calculatedAnswer[0]}!');
         //added the increment function so it updates the results
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

    }
}
/**
     * Gewts the operands (the numbers) and the operator (plus, minus, etc.)
     * directly from the dom, and returns the correct answer.
     */
function calculateCorrectAnswer(){
    //read values from DOM and store in variables
    // So we're going to create one called operand1,  and we're going to get the inner text,  the value of the element with the ID of  operand 1 from our HTML. This is basically  a reverse of what we did before when we set the  values of operand 1, operand 2 and operator.
    //.innerText: This property accesses the textual content within the selected element. It retrieves the inner text of the element retrieved in the previous step.
    //By default, Java retrieves data from dom as string. parseInt(): This is a JavaScript function that takes a value as an argument and attempts to convert it into an integer (a whole number). In this case, the retrieved inner text is passed as the argument.
    let operand1=parseInt(document.getElementById('operand1').innerText);
    let operand2=parseInt(document.getElementById('operand2').innerText);
    let operator=parseInt(document.getElementById('operator').innerText);

    //if checks the operator and will calculate the right answer and will return an array
    // addition here will continue to run the same game until user decides to stop
    if (operator === "+"){
        return[operand1 + operand2, "addition"];
        //when you do the else if you always add the operand, the condition basically
    }else if (operand === "x"){
        return[operand1 * operand2, "multiply"];
    }
        else{
        alert('Unimplemented operator ${operator}');
        throw 'Unimplemented operator ${operator}. Aborting!';
    }
    }

}
/**
 * Gets the current score from the DOM and increments it by 1
 */

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    //bellow sets the innerText, new score
    // innerText and text content are interchangeable
    //puteai sa folosesti oldscore + 1
    document.getElementById("score").innerText= ++oldScorel
}
/**
 * Gets the current tally from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText= ++oldScorel
}
//operand 1 and 2 are the 2 are the 2 arguments it will accept
function displayAdditionQuestion(operand1, operand2){
//get the element that feeds the operand 1 and 2 and also the operator
document.getElementById('operand1').textContent= operand1;
document.getElementById('operand2').textContent= operand2;
document.getElementById('operator').textContent= "+";
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){

    document.getElementById('operand1').textContent= operand1;
    document.getElementById('operand2').textContent= operand2;
    document.getElementById('operator').textContent= "x";
    
}