const screen = document.getElementById("screen");
// get all buttons in number pad
// stored in node list, which is like an array
const buttons = document.querySelectorAll(".btn");
console.log(buttons)


// loop through node list in ascending order
// for each btn object in node list do ...
let numbers = 0;
buttons.forEach(btn => {

    // listen for click, then do ...
    //      e is the event object trigger by the "click". the object e.target hold the values of the div set in the html file
    //      e.target.value hold the value the object
    btn.addEventListener("click",(e) => {
        // concatenates the input of each event together and send to screen class
        numbers  = numbers + e.target.value;
        screen.innerHTML = numbers;
    })
})