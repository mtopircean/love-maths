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
                alert(`You clicked${gameType}`);
            }
            }
        })
    }

})

function runGame(){
    //generates the first number of the game as a whole number(integer) between 0-25 and avoids 0 since we did a +1
    let num1=Math.floor(Math.random()*25)+1;
    //did the same for num2
    let num2=Math.floor(Math.random()*25)+1;
}

function checkAnswer(){
  
}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

    
}

function displayMultiplyQuestion(){

    
}