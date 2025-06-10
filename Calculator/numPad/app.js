const screen = document.getElementById("screen");
// get all buttons in number pad
// stored in node list, which is like an array
const buttons = document.querySelectorAll(".btn");
const ops = document.querySelectorAll(".btn-check")
console.log(buttons)


// loop through node list in ascending order
// for each btn object in node list do ...
let input1 = 0;
let input2 = 0;
buttons.forEach(btn => {

    // listen for click, then do ...
    //      e is the event object trigger by the "click". the object e.target hold the values of the div set in the html file
    //      e.target.value hold the value the object
    btn.addEventListener("click",(e) => {
        handleButtonClick(e.target.value);
        
    })
})

function handleButtonClick(button)
{
    const substr = "+"
    const substr_eq = "="

    // concatenates the input of each event together and send to screen class
        if(input1 == 0){
            input1 = button;
        }
        else{
            input1 = input1 + button;
        }

        screen.innerHTML = input1;

        if (input1.includes(substr)) {
            if(input2 == 0){
                input2 = button;
            }
            else{
                input2 = input2 + button;
            }

            screen.innerHTML = input2;
        
            if (input2.includes(substr_eq)) {
                screen.innerHTML = addition(input1,input2);
            }
        }

        // play sound
        const audio = new Audio("./click.mp3");
        audio.play();
}
// appends a digit (0–9) to the current input string. Stores it in currentInput.
function appendDigit(digit){

}

// adds a . to currentInput only if one isn't already present.
function appendDecimal(){

}
/*Stores the current input as firstOperand

Stores the selected operator in currentOperator

Sets a flag isTypingSecondOperand = true

Optionally highlights the operator button*/
function handleOperator(op){

}

/*Takes firstOperand, currentOperator, and currentInput (as second operand)

Computes result

Updates display and resets state

Clears operator highlight*/
function evaluateExpression(){

}

//Resets everything (firstOperand, currentInput, operator, flags)
function clearAll(){
    
}

//Clears only currentInput
function clearEntry(){
    
}

//Removes last character from currentInput
function delLast(){
    
}
function addition(x,y){
    return x+y;
}