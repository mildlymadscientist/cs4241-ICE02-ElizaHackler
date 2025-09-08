// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function (event) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()

  const input = document.querySelector("#yourname"),
    json = { yourname: input.value },
    body = JSON.stringify(json)

  const response = await fetch("/submit", {
    method: "POST",
    body
  })

  const text = await response.text()

  console.log("text:", text)
}

window.onload = function () {
  const button = document.querySelector("button");
  button.onclick = submit;
}

//Problem 1
// Make two objects named Artist
// and Painter. Artist should have
// a function named speak() that
// when called logs "I am an artist"
// to the console. Painter should be
// able to use the Artist's speak function
// (painters are artists, after all) in some
// way, and should also have a function named
// paint() that sets the background color of the
// page to a random color whenever called. 

// Sources
// https://www.geeksforgeeks.org/javascript/javascript-inheritance/
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md
// https://www.slingacademy.com/article/how-to-generate-random-color-in-javascript/#generating-random-rgb-color-codes

const Artist = {
  speak: function () {
    console.log("I am an artist");
  },
}

const Painter = {
  paint: function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let randomRgbColor = `rgb(${r}, ${g}, ${b})`;

    //print random color to console
    console.log(randomRgbColor);

    //set background color to random color
    document.body.style.backgroundColor = randomRgbColor;
  },
}

//call functions
Artist.speak();
Painter.paint();

//Problem 2
// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

loopBlocks = function () {

  // const box = document.querySelector("button");

  // //create 20 squares w/ random colors
  // for (let i = 0; i < 20; i++) {
  //   let r = Math.floor(Math.random() * 256);
  //   let g = Math.floor(Math.random() * 256);
  //   let b = Math.floor(Math.random() * 256);

  //   let randomRgbColor = `rgb(${r}, ${g}, ${b})`;

  //   document.body.style.backgroundColor = randomRgbColor;

  // }

  // Create a flex container
  const flexContainer = document.createElement('div');
  flexContainer.className = 'flex-container';

  // Add flex items dynamically
  for (let i = 1; i <= 20; i++) {
    //add random color to each box
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomRgbColor = `rgb(${r}, ${g}, ${b})`;
    //create box
    const flexItem = document.createElement('div');
    flexItem.className = 'flex-item';
    flexItem.textContent = `Item ${i}`;
    flexItem.style.backgroundColor = randomRgbColor;
    flexContainer.appendChild(flexItem);
  }

  console.log(flexContainer);

  // Append the flex container to the DOM
  document.getElementById('flexbox').appendChild(flexContainer);
}

//call function
loopBlocks();

//Problem 3
// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

const inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "inputField";
document.body.appendChild(inputField);

//Problem 4
// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.

// https://stackoverflow.com/questions/51006577/create-button-element-in-javascript
// https://www.w3schools.com/JS/js_random.asp
// https://javascript.ntxm.org/docs/advanced-dom-manipulation/creating--removing-elements-createelement-removechild-appendchild/

//register HTML button
const button = document.querySelector("custom_button");

//when button is hit
button.addEventListener("hit", function () {
  //make random text button and delete old
  const newButton = document.createElement("custom_button");
  newButton.textContent = Math.random().toString(36).substring(7);
  document.body.appendChild(newButton);
  document.body.removeChild(button);
});