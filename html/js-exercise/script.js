// TODO:
// target div w/ id "container"
const container = document.querySelector("#container");

// a <p> with red text that says “Hey I’m red!”
const paraRed = document.createElement("p");
paraRed.textContent = "Hey I'm red!";
paraRed.style.color = "red";
container.appendChild(paraRed);

// an <h3> with blue text that says “I’m a blue h3!”
const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";
container.appendChild(header3);

// a <div> with a black border and pink background color with the following elements inside of it:
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// another <h1> that says “I’m in a div”
const header1 = document.createElement("h1");
header1.textContent = "I'm a div";
div.appendChild(header1);

// a <p> that says “ME TOO!”
const para = document.createElement("p");
para.textContent = "ME TOO!";
div.appendChild(para);

// after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
container.appendChild(div);

const btn = document.querySelector("#btn");
btn.style.border = "solid 5px blue";
btn.style.fontSize = "x-large";
btn.style.margin = "20px 0px";

btn.addEventListener("click", (e) => {
  alert(`Clicked! e: ${e}\ne.target: ${e.target}`);
  e.target.style.background = "blue";
});

btn.addEventListener("mouseover", (e) => {
  btn.style.backgroundColor = "yellow";
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
