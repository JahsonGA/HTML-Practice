const screen = document.getElementById("screen");

// get all buttons in number pad
// stored in node list, which is like an array
const buttons = document.querySelectorAll(".btn");
const ops = document.querySelectorAll(".btn-check")
const operatorButtons = document.querySelectorAll(".operator");


let currentInput = "";               //What user is typing right now
let firstOperand = "";	            //Stored value before operator
let currentOperator = "";	        //Selected operator (+, -, etc.)
let isTypingSecondOperand = false;	//Flag: true when second number is being typed
let shouldResetInput = false;	    //Flag: true after =, so next digit clears screen


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

function handleButtonClick(value)
{
    switch (value) {
        case "+":
            handleOperator(value);
            break;
        case "-":
            handleOperator(value);
            break;
        case "*":
            handleOperator(value);
            break;
        case "/":
            handleOperator(value);
            break;
        case "=":
            evaluateExpression();
            break;
        case ".":
            appendDecimal();
            break;
        case "C":
            clearEntry();
            break;
        case "CE":
            clearEntry();
            break;
        case "del":
            delLast();
            break;
        default:
            // assume it's a digit (0–9)
            appendDigit(value)
            break;
        }

        screen.innerHTML = currentInput;

        // play sound
        const audio = new Audio("./click.mp3");
        audio.play();
}
// appends a digit (0–9) to the current input string. Stores it in currentInput.
function appendDigit(digit){
    
    if (isTypingSecondOperand == true)
    {
        currentInput = 0;
    }

    if (shouldResetInput == false){
        currentInput = currentInput + digit;

    }   
}

// adds a . to currentInput only if one isn't already present.
function appendDecimal(){
    if (!(currentInput.includes('.'))){
        currentInput = currentInput + ".";
    }    

}
/*Stores the current input as firstOperand

Stores the selected operator in currentOperator

Sets a flag isTypingSecondOperand = true

Optionally highlights the operator button*/
function handleOperator(op){

    // if user enters operation
    if(!firstOperand)
    {
        firstOperand = currentInput
        currentOperator = op;
        isTypingSecondOperand = true

        highlightOperator(op);
    }
    
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
/*Clear all highlights

Find the button that matches op

Add the class active-op to that button*/
function highlightOperator(op){
    console.log("highlightOperator called with", op);

    // Step 1: Clear all operator highlights
    operatorButtons.forEach(btn => {
        btn.classList.remove("active-op");
    });

    // Step 2: Highlight the current operator
    operatorButtons.forEach(btn => {
        if (btn.value === op) {
            btn.classList.add("active-op");
            console.log("Highlighting")
        }
    });
}
function addition(x,y){
    return x+y;
}