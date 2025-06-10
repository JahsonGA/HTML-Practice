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
    const substr = "+"
    const substr_eq = "="
    btn.addEventListener("click",(e) => {
        // concatenates the input of each event together and send to screen class
        if(input1 == 0){
            input1 = e.target.value;
        }
        else{
            input1 = input1 + e.target.value;
        }

        screen.innerHTML = input1;

        if (input1.includes(substr)) {
            if(input2 == 0){
                input2 = e.target.value;
            }
            else{
                input2 = input2 + e.target.value;
            }

            screen.innerHTML = input2;
        
            if (input2.includes(substr_eq)) {
                screen.innerHTML = addition(input1,input2);
            }
        }

        // play sound
        const audio = new Audio("./click.mp3");
        audio.play();
        
    })
})

function addition(x, y){
    return x+y;

}

function subtraction(x,y){
    return x-y;

}

function multiplication(x,y){
    return x*y;
}

function division(x,y){
    if(y == 0){
        return "Cannot divide by zero";
    }
    else{
        return x/y;
    }
    
}

function equal(){
    
}

function clear(){
    
}

function clear_entry(){
    
}

function Delete(){
    
}

function positive_to_negative(){
    
}