import _ from "lodash";
import myName from "./myName";
import "./style.css";
import myImage from "./46-800x800.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, included via script, is required for:
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Add stylesheet class
  element.classList.add("hello");

  // Use imported function
  element.textContent = myName("Bryan");

  // Add image to existing div
  const myIcon = new Image();
  myIcon.src = myImage;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
