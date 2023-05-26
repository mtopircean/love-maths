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
                alert("You clicked Submit!");
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
        //alerts the user if the gametype is unknown
    }else{
        alert('Unknown game type:&{gameType}');
        //throw statement will stop the console from running and will send a message to the console
        throw 'Unknown game type: ${gameType}. Aborting!';
    }
    }
}

function checkAnswer(){
  
}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

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

    
}