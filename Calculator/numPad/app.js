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
    //TODO CE, clear, delete dont work at intend in the display
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
        case "-1":
            swapOP();
            break;
        case "clear":
            clearEntry();
            break;
        case "ce":
            clearEntry();
            break;
        case "delete":
            delLast();
            break;
        default:
            // assume it's a digit (0–9)
            appendDigit(value)
            break;
        }

    //TODO Chaining operations

    // play sound
    const audio = new Audio("./click.mp3");
    audio.play();
}
// appends a digit (0–9) to the current input string. Stores it in currentInput.
function appendDigit(digit){
    
    if (isTypingSecondOperand == true)
    {
        currentInput = "";
        isTypingSecondOperand = false;
        currentInput = digit;

    }

    else{
        currentInput = currentInput + digit;

    } 

    // update screen 
    //* update the screen in handleButtonClick resets screen
    screen.innerHTML = currentInput;
}

// adds a . to currentInput only if one isn't already present.
function appendDecimal(){
    if (!(currentInput.includes('.'))){
        currentInput = currentInput + ".";
        screen.innerHTML = currentInput;
    }    
}

function swapOP(){
    express = parseFloat(currentInput);
    currentInput = express * -1;
    screen.innerHTML = currentInput;
}
/*Stores the current input as firstOperand

Stores the selected operator in currentOperator

Sets a flag isTypingSecondOperand = true

Optionally highlights the operator button*/
function handleOperator(op){

    if (currentOperator && isTypingSecondOperand) {
        // User changed operator before typing second number
        currentOperator = op;
        highlightOperator(op);
        return;
    }

    if (!firstOperand || shouldResetInput) {
        firstOperand = currentInput;
        shouldResetInput = false;
    } else {
        evaluateExpression();
        firstOperand = currentInput;
    }

    currentOperator = op;
    isTypingSecondOperand = true;
    highlightOperator(op);
}

/*Takes firstOperand, currentOperator, and currentInput (as second operand)

Computes result

Updates display and resets state

Clears operator highlight*/
function evaluateExpression(){
    //firstOperand currentOperator currentInput
    //! Error traps
    if (!firstOperand){
        console.error("first operand not set");
        clearAll();
        return;
    }
    if (!currentOperator){
        console.error("operation not set");
        clearAll();
        return;
    }
    if (!currentInput){
        console.error("second operand not set");
        clearAll();
        return;
    }

    //parse string to ints
    let input1 = parseFloat(firstOperand);
    let input2 = parseFloat(currentInput);
    console.log(input1 + "\n" + input2);

    if (isNaN(input1)|| isNaN(input2)){
        console.error("inputs not numbers.")
        clearAll();
        return;
    }

    //preform options
    let results = 0;
    switch (currentOperator) {
        case "+":
            results = addition(input1, input2);
            break;
        case "-":
            results = subtraction(input1, input2);
            break;
        case "*":
            results = multiplication(input1, input2);
            break;
        case "/":
            results = division(input1, input2);
            break;
        default:
            console.error("inputs not numbers.")
            clearAll();
            return;
    }

    //! Error trap
    if (results === null) {
        
        currentOperator = "";	        
        isTypingSecondOperand = false;	
        shouldResetInput = true;
        return;
    }

    //parse int to string and display
    currentInput = results.toString();
    firstOperand = results.toString();
    currentOperator = "";
    isTypingSecondOperand = false;
    shouldResetInput = true;

    screen.innerHTML = currentInput;
    highlightOperator("");
    //clearAll();

}

//Resets everything (firstOperand, currentInput, operator, flags)
function clearAll(){            
    currentOperator = "";	        
    isTypingSecondOperand = false;	
    shouldResetInput = true;	    

    screen.innerHTML = "0";
}

//Clears only currentInput
function clearEntry(){
    currentInput = "";

    screen.innerHTML = "0";
}

//Removes last character from currentInput
function delLast(){
    currentInput = currentInput.slice(0,-1);
    screen.innerHTML = currentInput;
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
    return x + y;
}
function subtraction(x, y){
    return x - y;
}

function multiplication(x,y){
    return x * y;
}

function division(x,y){

    if (y === 0){
        screen.innerHTML = "Cannot dvivide by zero";
        return null;
    }
    return x / y;
}
