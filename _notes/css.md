# CSS

CSS is used to stylize HTML documents. 

## Basic Syntax

* CSS is made up of rules
  1. Selector
  2. Semi-colon
  3. List of declarations
     1. Property:Value pair

``` css
/* selector */
div.bold-text {
  font-weight: 700;
/* property: value; */
}
```

## Selector

* Refer to HTML elements to which the CSS rules apply
  * What's being selected for each rule

### Universal Selector

``` css
/* styles.css */
* {
  color: purple;
}
```

### Type Selector

* Selects elements of the given **element type**

``` html
<!-- index.html -->
<div>
  Please agree to our terms of service.
</div>
```

``` css
/* styles.css */
div {
  color: white;
}
```

### Class Selector

* Selects elements with the given **class**
* Classes are **attributes** you place on an HTML element

``` html
<!-- index.html -->
<div class="alert-text">
  Welcome to the machine.
</div
```

``` css
/* styles.css */
.alert-text {
  color: red;
}
```

### ID Selector

* Similar to class selectors
* Select elements with a given ID
* Use a hashtag followed by case sensitive ID
* **Common pitfall**: overusing ID. Classes will suffice most of the time and ID's should be use **sparingly (if at all)**
* Used when specificity is needed or having links redirect to a section on the current page
* Elements can have only **ONE ID** & **NO WHITESPACE**

``` html
<!-- index.html -->
<div id="title">Welcome to the machine.</div
```

``` css
/* styles.css */
#title {
  background-color: white;
}
```

### Grouping Selectors

* Used with multiple groups of elements that share style declarations

``` css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* several unique declarations */
}

.unread {
  /* several unique declarations */
}
```

### Chaining Selectors

* Used to apply styles to a specific combo of selectors
* Must contain all selectors in order for rules to apply
* No space between selectors
* Can't chain multiple `type` selectors (ie: div, p, h1)
  * Because that would give you `divph1`

``` html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

``` css
/* elements that contain both classes */
.subsection.header {
  color: red;
}
/* can mix classes and id's*/
.subsection#preview {
  color: blue;
}
```

### Descendant Combinator

* Allow you to combine multiple selectors by their relationship between them
* There are **4** types of combinators in total
* Represented by single space between selectors
* Matches the **last selector only**
  * If they also have an ancestor (parent, grandparent, etc.) that matches the previous selector
* `.ancestor .child` would select the class `child` if it has the ancestor with the class `ancestor`
  * If it is **nested** inside of ancestor

``` html
<!-- index.html -->
<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->
```
In this example, **BOTH B & C** would be selected.

``` css
/* styles.css */
.ancestor .contents {
  /* some declarations */
}
```

