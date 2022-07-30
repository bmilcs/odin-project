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
