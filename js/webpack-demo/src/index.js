import _ from "lodash";
import myName from "./myName";

function component() {
  const element = document.createElement("div");

  // Lodash, included via script, is required for:
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  // Use imported function
  element.textContent = myName("Bryan");
  return element;
}

document.body.appendChild(component());
