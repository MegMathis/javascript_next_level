// targets all h1, but stops at first one it finds
var h1 = document.querySelector("h1");
// targeting button
var button = document.querySelector("button");
// targetting body
var body = document.body;

// console.log(h1.innerText);
// console.log(button.innerText);

// overwriting current text
h1.innerText = "JS Next Level";

// setting up event lister - any action a user can perform on a page
// addeventlistener takes 2 arguments

button.addEventListener("click", function () {
  //   body.style.backgroundColor = "#777";
  //   body.style.color = "#fff";
  //   body.style.cssText = "background-color: #777; color:#fff";

  body.setAttribute("class", "darkmode");
  //   console.log("clicked");
});

// function newStuff(num, str, whatAmI) {
//   whatAmI();
// }

// newStuff(10, "some string", function () {
//   console.log("make this print out");
// });

// function newStuff(num, str, callback) {
//   callback();
// }

// newStuff(10, "some string", function () {
//   console.log("make this print out");
// });

// function newStuff(num, str, callback) {
//   callback("make me console out ...... tricky trick.");
// }

// newStuff(10, "some string", function (someVal) {
//   console.log(someVal);
// });

// function newStuff(num, str, callback) {
//   callback("make me console out .....not so tricky now");
// }

// function someFunc(someVal) {
//   console.log(someVal);
// }

// newStuff(10, "some string", someFunc);
