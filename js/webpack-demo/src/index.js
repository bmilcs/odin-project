import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, included via script, is required for:
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
