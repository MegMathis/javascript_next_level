// targets all h1, but stops at first one it finds
var h1 = document.querySelector("h1");
var button = document.querySelector("button");
var body = document.body;
// Create variable to track if dark mode is active
var darkmodeActive = false;

h1.innerText = "JS Next Level";

// Toggle between light mode and dark
// If variable is true, switch to light else switch to dark

button.addEventListener("click", function () {
  if (darkmodeActive === false) {
    // switch to dark mode
    body.classList.add("darkmode");
    button.innerText = "Light Mode";
    darkmodeActive = true;
  } else {
    body.classList.remove("darkmode");
    button.innerText = "Dark Mode";
    darkmodeActive = false;
  }
});

var h3 = document.querySelector("h3");
var count = 10;

// On page load, initialize event listeners and run
// any functions that need to process when the page first loads

var timer = setInterval(function () {
  count--;
  h3.innerText = "Count: " + count;

  //   check count and if equal to zero, clear interval
  if (count === 0) {
    clearInterval(timer);
    alert("Times Up!");
  }
}, 1000);
