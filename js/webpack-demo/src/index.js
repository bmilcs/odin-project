import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import myName from "./myName";
import myImage from "./46-800x800.jpg";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, included via script, is required for:
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Add stylesheet class
  element.classList.add("hello");

  // Use imported function
  element.textContent = myName("Bryan");

  btn.innerHTML = "click me & check the console!";
  btn.onclick = printMe;

  // Add image to existing div
  const myIcon = new Image();
  myIcon.src = myImage;
  element.appendChild(myIcon);

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
