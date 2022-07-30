# JavaScript DOM Crash Course

[Source](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)

## Selectors

```js
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();
document.querySelector();
document.querySelectorAll();
```

## Traversing the DOM

### Parent Nodes

```js
// parentNode (interchangeable, mostly)
itemList.parentNode; // returns parent Node
itemList.parentNode.style.background = "black";
itemList.parentNode.parentNode;

// parentElement (interchangeable, mostly)
itemList.parentElement;
itemList.parentElement.style.background = "black";
itemList.parentElement.parentElement;
```

### Child Nodes

```js
// .childNodes
itemList.childNodes; // returns a nodeList
// li & text nodes (whitespace, line break, etc. - not innerHTML)

// .children
itemList.children; //  returns HTMLCollection
//  only li, no whitespace
itemList.children[1];

// .firstChild -- useless. returns text node. instead, use:
// .firstElementChild
itemList.firstElementChild; // returns first child
itemList.firstElementChild.textContent = "First Element Child :)";

// .lastChild -- useless. returns text node. instead, use:
// lastElementChild
itemList.firstElementChild; // returns last child
```

### Sibling

```js
// nextSibling  -- useless. returns text node. instead, use:
// nextElementSibling
itemList.nextElementSibling;

// previousSibling  -- useless. returns text node. instead, use:
// previousElementSibling
itemList.previousElementSibling;
```

## Create Element

```js
// create new div (in javascript, not in DOM yet)
let newDiv = document.createElement("div");

// add a class
newDiv.className = "new-class";

// add id
newDiv.id = "hello1";

// add attribute, ie: title
newDiv.setAttribute("title", "New Title Name Here");

// create text node
let newDivText = document.createTextNode("Hello World!");

// add text node above to original div
newDiv.appendChild(newDivText);

// add newly created 'newDiv' to the DOM
let container = document.querySelector("header .container"); //
let h1 = document.querySelector("header h1");

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1); // add newDiv inside container, before h1

console.log(newDiv);
```

## Event Listeners

```js
let button = document
  .getElementById("button")
  .addEventListener("click", function () {
    console.log("clicked");
  });

// Ideal way of doing it
// Use a named function:

let button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

// event object: e
function buttonClick(e) {
  // console.log("Button clicked");
  // document.getElementById("header-title").textContent = "Changed";
  // document.querySelector("#main").style.backgroundCOlor = "#f4f4f4";

  console.log(e); // returns a list of properties
  // class name, id, mouse position, etc.

  console.log(e.target); // returns what was clicked (html element)

  console.log(e.target.id); // return id of what was clicked

  console.log(e.target.className); // return class name of what was clicked

  console.log(e.target.classList); // return dom token list/array of classes

  let output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target + "</h3";

  console.log(e.type); // return event type: 'click'
  console.log(e.clientX); // mouse position, x axis, browser window
  console.log(e.offSetX); // mouse position, within element itself

  console.log(e.altKey); // whether or not alt is held down during event
  console.log(e.shiftKey); // whether or not modifier is held down
  console.log(e.ctrlKey); // whether or not modifier is held down
}
```

Mouse Events

```js
let button = document
  .getElementById("button")
  .addEventListener("click", runEvent);

// EVENTS ---------

// click
// mousedown
// mouseup

// mouseenter  // triggers only on parent element
// mouseleave

// mouseover  // triggers on parent + inner elements
// mouseout

// mousemove  // when mouse position changes
//            e.offsetX

function runEvent(e) {
  console.log("EVENT TYPE" + e.type); // type of event "click"
}

let box = document.getElementByID("box");

box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);
```

Keyboard Events

```js
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");

// EVENTS ---------
// keydown  press key
//    e.target.value = key pressed

// keyup    release key

// keypress

// focus    click inside an input

// blur     click outside of an input, when focus is lost

// cut
// paste

// input    any change made to an input

itemInput.addEventListener("keydown", runEvent);

function runEvent(e) {
  console.log("EVENT TYPE" + e.type); // type of event "keydown"
  console.log("EVENT TYPE" + e.type.value); // key pressed
}

// select / dropdown box box
let select.querySelector('select')
select.addEventListener('change', runEvent)

// Drop down box

// change   when value selected changes
// input    when value selected changes

// Submit Event for Forms
form.addEventListener('submit', runEvent);
```
