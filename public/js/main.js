//get random color
getColor = function () {
  //logic found on source 4
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

//get random color of prepicked to remove greys, blacks, whites
getSpecificColor = function () {
  //get random number 1-10
  let colorCode = Math.floor(Math.random() * 10);

  //use switch to get color
  switch (colorCode) {
    case 0:
      color = "red";
      break;
    case 1:
      color = "blue";
      break;
    case 2:
      color = "green";
      break;
    case 3:
      color = "yellow";
      break;
    case 4:
      color = "orange";
      break;
    case 5:
      color = "purple";
      break;
    case 6:
      color = "pink";
      break;
    case 7:
      color = "lightblue";
      break;
    case 8:
      color = "teal";
      break;
    case 9:
      color = "lightgreen";
      break;
    default:
      color = "magenta";
  }

  return color;
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

//Artist object
const Artist = {
  //function
  speak: function () {
    //print to console
    console.log("I am an artist");
  },
}

//Painter object
const Painter = {
  //function
  paint: function () {
    //call function
    Artist.speak();

    //use helper
    document.body.style.backgroundColor = getColor();
  },
}

//Problem 2
// create a for loop that creates 20 blocks,
// all on a single row, with a random color for each
// make sure the values for each color channel are different
// (i.e. no gray/black/white blocks)

loopBlocks = function () {
  //get FlexBox holder
  const box = document.getElementById('flexContainer');

  //loop 20 times
  for (let i = 1; i <= 20; i++) {

    //create box
    const flexItem = document.createElement('div');
    flexItem.className = 'flex-item';

    //use helper
    flexItem.style.backgroundColor = getSpecificColor();

    //add box
    box.appendChild(flexItem);
  }
}

//Problem 3
// create a for input field that does the following
// whenever the user enters a letter in it:
// 1. Creates a <h1> element containing the letter and appends it to the page
// 2. deletes the inputted letter from the input field so it is blank

//logic in script in index.HTML


//Problem 4
// make a button that, when clicked, creates a new
// button, and then deletes the original button.
// every button that is created should have this same behavior.
// put random text inside of each button so you can be sure
// that each button is different.

//logic in script in index.HTML