var names = ["Jose", "Megan", "Austen"];

// target button wrap and append 3 buttons

var wrap = document.querySelector(".button-wrap");

for (var personName of names) {
  var button = document.createElement("button");

  button.innerText = personName;

  wrap.append(button);
}
