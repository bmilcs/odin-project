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

### Grouping Selector

* Used with two groups of elements that share style declarations
* 