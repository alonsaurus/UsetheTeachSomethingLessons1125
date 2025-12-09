// #4 What does "use strict" mean?
// activate strict mode here
"use strict";

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
console.log(typeof hour);

document.getElementById("myBtn").addEventListener("click", colorHour);

// #5 Arrow Functions 
// Make this function an arrow function

function colorHour() {
  // changed into switch statements
  switch (hour) {
    case 8:
      document.getElementById("main").style.backgroundColor = "aliceblue";
      document.getElementById("tagline").innerHTML =
        "Whatever, man. It's too early";
      break;

    case 9:
      document.getElementById("main").style.backgroundColor = "azure";
      document.getElementById("tagline").innerHTML =
        "Fancier than " + hour + " peacocks!";
      break;

    case 10:
      document.getElementById("main").style.backgroundColor = "beige";
      document.getElementById("tagline").innerHTML =
        "Greener than " + hour + " pickles!";
      break;

    case 11:
      document.getElementById("main").style.backgroundColor = "cornsilk";
      document.getElementById("tagline").innerHTML =
        "Hotter than " + hour + " hot dogs!";
      break;

    case 12:
      document.getElementById("main").style.backgroundColor = "floralwhite";
      document.getElementById("tagline").innerHTML =
        "Saltier than " + hour + " seas!";
      break;

    case 13:
      document.getElementById("main").style.backgroundColor = "ghostwhite";
      document.getElementById("tagline").innerHTML =
        "Defter than " + hour + " efts!";
      break;

    case 14:
      document.getElementById("main").style.backgroundColor = "lemonchiffon";
      document.getElementById("tagline").innerHTML =
        "Badder than " + hour + " cassowaries!";
      break;

    default:
      document.getElementById("main").style.backgroundColor = "grey";

      // changed into template litral?
      document.getElementById("tagline").innerHTML =
        `Cooler than ${hour} popsicles!`;
      break;
  }
}

