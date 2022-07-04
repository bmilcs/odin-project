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
* There are [**4** types of combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#combinators) in total
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

# Properties

## Color Values

* **Common keywords** (Predefined, Cross-browser)
   *  ie: `red`, `coral`, `transparent`
   *  [Full List of Pre-defined Colors](https://www.w3schools.com/colors/colors_names.asp)
``` css
  #p1 {background-color: red;}           /* red */
  #p2 {background-color: transparent;}   /* transparent */
```

---

* **HEX values**
  * ie: `#ff0000` (red)
  * Specified with `#RRGGBB`
    * `RR`: Red values
    * `GG`: Green values
    * `BB`: Blue values
  * Range: `00` (lowest) to `FF` (highest)
    
``` css
#p1 {background-color: #ff0000;}      /* red */
#p2 {background-color: #00ff00;}      /* green */
#p3 {background-color: #0000ff;}      /* blue */
```
* **HEX values with transparency**
  * ie: `#ff000080`
  * Transparency: Add 2 digitals between `00` & `FF`

``` css
#p1a {background-color: #ff000080;}   /* red transparency */
#p2a {background-color: #00ff0080;}   /* green transparency */
#p3a {background-color: #0000ff80;}   /* blue transparency */
```

---

* **RGB values**
    *   ie: `rgb(red, green, blue)`
    *   `rgb()` is a *function*
    *   Intensity of each value: 0 (lowest) to 255 (highest)

``` css
#p1 {background-color: rgb(255, 0, 0);}   /* red */
#p2 {background-color: rgb(0, 255, 0);}   /* green */
#p3 {background-color: rgb(0, 0, 255);}   /* blue */
```

* **RGBA values**
  * ie: `rgba(red, green, blue, alpha)`
  * RGB colors with an ***alpha channel***
    * Specifies opacity of the object
    * Alpha: 0.0 (fully transparent) to 1.0 (opaque)

``` css
#p1 {background-color: rgba(255, 0, 0, 0.3);}   /* red with opacity */
#p2 {background-color: rgba(0, 255, 0, 0.3);}   /* green with opacity */
#p3 {background-color: rgba(0, 0, 255, 0.3);}   /* blue with opacity */
```

---

* **HSL values**
  * ie: `hsl(hue, saturation, lightness)`
  * Cylindrical-coordinate representation of colors
  * `hsl()` is a function
  * **Hue**: Color Wheel `0` - `360`
    * Red: `0` or `360`
    * Green: `120`
    * Blue: `240`
  * **Saturation**: Percentage value
    * Shade of gray: `0%`
    * Full color: `100%`
  * **Lightness**: Percentage value
    * Black: `0%`
    * White: `100%`

``` css
#p1 {background-color: hsl(120, 100%, 50%);}   /* green */
#p2 {background-color: hsl(120, 100%, 75%);}   /* light green */
#p3 {background-color: hsl(120, 100%, 25%);}   /* dark green */
#p4 {background-color: hsl(120, 60%, 70%);}    /* pastel green */
```

* **HSLA values**
  * ie: `hsla(hue, saturation, lightness, alpha)`
  * Alpha parameter: `0.0` - `1.0`
    * Fully transparent: `0.0`
    * Fully Opaque: `1.0`
``` css
#p1 {background-color: hsla(120, 100%, 50%, 0.3);}   /* green with opacity */
#p2 {background-color: hsla(120, 100%, 75%, 0.3);}   /* light green with opacity */
#p3 {background-color: hsla(120, 100%, 25%, 0.3);}   /* dark green with opacity */
#p4 {background-color: hsla(120, 60%, 70%, 0.3);}    /* pastel green with opacity */
```


### Color & Background Color

* **Color** property: text color
* **Background-Color** property: background color of an element



``` css
p {
  /* hex example: */
  color: #1100ff;
  /* rgb example: */
  color: rgb(100, 0, 127);
  /* hsl example: */
  color: hsl(15, 82%, 56%);
}
```

## Typography Basics & Text Align

### Font Family

* `font-family` can be single value, or comma-separated list for fonts
* Falls into 1 of 2 categories:
  * Font Family Name: `Times New Roman`
  * Generic Family Name: 
    * `sans-serif` have clean lines, modern, minimal
      * ie: Arial, Verdana, Helvetica
    * `serif` are formal, elegant, have small stroke at edge of each char
      * ie: Times New Roman, Georgia, Garamond
    * `monospace` have fixed width, mechanical look
      * ie: Courier New, Lucida Console, Monaco
    * `cursive` imitate human handwriting
      * ie: Brush Script MT, Lucida Handwriting
    * `fantasy` are decorative, playful
      * ie: Copperplate, Papyrus
* If browser can't find 1st font in list, it will use the next one
* **Best Practice:** Include list of values, starting with top preference, and ending with least preferred

``` css
font-family: "Times New Roman", sans-serif;
font-family: "Times New Roman", Times, serif;
font-family: Arial, Helvetica, sans-serif;
font-family: "Lucida Console", "Courier New", monospace;
```

### Custom Font Family

* `@font-face` is used for loading custom fonts in browser & present it to site
* Must appear **before other styling properties**
* Requires 2 properties:
  * `font-family` font name
  * `src` URL to download the font

``` css
@font-face {
    font-family: fontname;
    src: url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2);
    font-weight: italic;
}
```
* Alternatives to `@font-face`
  * **Linking fonts** in the `<head>` 
  
``` html
<head>
  <link href="https://fonts.googleapis.com/css?family=Gayathri&display=swap" rel="stylesheet">
</head>
<body>
  div {
      font-family: 'Gayathri', sans-serif;
  }
</body>
```

  * **Importing fonts** using `@import` to css
  
``` css
@import url('https://fonts.googleapis.com/css?family=Gayathri&display=swap');

div {
font-family: 'Gayathri', sans-serif;
}

```

### [Google Fonts API](https://developers.google.com/fonts/docs/getting_started)

``` html
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Inter">
```


### Font Size

* `font-size` should contain NO whitespace
``` css
font-size: 22px;
```

### Font Weight

* `font-weight` affects boldness of text
* Values can be:
  * the word `bold` or a value between `1` - `1000`
  * **Typically** in increments of `100` up to `900`, depending on the font: `200`, `300`, `400`
  * `bold` word equivalent: `700`
  
``` css
font-weight: 700;
```

### Text Align

* `text-align` aligns text horizontally within an element
* Common keywords:
  * `center`, `right`, `left`

``` css
text-align: center;
```

### Image Height & Width

* Default `<img>` size = actual image's `height` & `width`
* `auto` value will automatically adjust size of an image without causing it to lose its proportions

``` css
img {
  height: auto;
  width: 500px;
}
```
* If the above image had a height of `500px` and width of `1000px`
* `auto` would downsize the `height` to `250px`
* **Best Practices**
  * **ALWAYS** include *both* height & width for *ALL* images
  * Reserves space on the page & will appear blank until image loads
  * If `height` & `width` are not included & the image takes longer to load than the rest of the page, the **image will not take up any space on page at first**
  * Will suddenly cause a drastic shift of the other page contents once loaded

## [The Cascade of CSS](https://wattenberger.com/blog/css-cascade)

* Sometimes rules conflict with one another
* CSS does what we tell it to do
* Unexpected behavior can occur due to:
  * *Default styles* vary from browser to browser
    * ie: Large gaps between elements, button styles, etc. can appear on it's "own"
  * Not understanding `the cascade` or how a `property` works 
* **The CSS Cascade is the way our browsers resolve competing CSS declarations.**
  1. **Importance**
     1. ***transition*** - active transitions are #1
     2. `!important` - reserve for overriding 3rd party libraries
     3. ***animation*** - active animation
     4. ***normal*** - bulk of rules
  2. **Origin**, where rules are defined
     1. ***website***: in your control as web developer
     2. ***user***
     3. ***browser***: each browser has its own set of default styles
  3. **[Specificity](#specificity)**
  4. **Position**, rule order

## Specificity

* If two or more CSS rules that point to the same element, the selector with the **highest specificity** value will "win", and its style declaration will be applied to that HTML element.
  * Creates a score or ranking system
* **More specific** CSS declarations > **less specific** CSS declarations
* Specificity only matters when elements have *multiple, conflicting declarations* (a tie breaker):
* Hierarchy
  1. **Inline** `<h1 style="color: white">`
  2. **Layers** unlayered > layered `@layers one, two;`
  3. **ID** selectors `#navbar`
  4. **Class** `.class`, **Attribute Selectors** `[href]` or `[checked]`, **Pseudo Selectors** `:hover` or `:first-of-type`
  5. **Type** or **Pseudo-eEement** selectors `h1` or `:before`

---


``` html
<div class="main">
  <div class="list subsection"></div>
</div>
```
  **Multiple** classes > **Single** class
``` css
/* rule 1 */ 
.subsection {
  color: blue;
}

/* rule 2 -- MORE SPECIFIC */
.main .list {
  color: red;
}
```
---

``` html
<div class="main">
  <div class="list" id="subsection"></div>
</div>
```
**ID** selector > **Multiple Class** selectors

``` css
/* rule 1 -- MORE SPECIFIC */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

**1 ID** &  **2 Class** Selectors > **1 ID** & **1 Class** Selector

``` css
/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 -- MORE SPECIFIC */
#subsection .main .list {
  color: red;
}
```

**Chaining Selector** (*no space*) & **Descendant Combinator** (*empty space*) **DO NOT AFFECT specificity**


``` css
/* rule 1 -- SPECIFICITY EQUAL TO rule 2 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 -- SPECIFICITY EQUAL TO rule 1 */
.class .second-class {
  font-size: 24px;
}
```

**Universal selector** `*` and **Combinators** `+`, `~`, `>`, ` ` (*empty space*) **DO NOT ADD specificity**

``` css
/* rule 1 -- NO SPECIFICITY */
* { 
  color: black;
}

/* rule 2 -- MORE SPECIFIC (Type selector) */
h1 { 
  color: orange;
}
```

## Inheritance

* CSS Properties, when applied to an element, are inherited by the element's **descendants**
  * Even if we don't explicitly write a rule for it
* **Typography** based properties **ARE USUALLY** inherited
* Most **OTHER** properties **AREN'T** inherited

**Exception**: Directly targeting an element > inheritance

``` html
<!-- index.html -->
<div id="parent">
  <div class="child"></div>
</div>
/* styles.css */
```

``` css
/* Inherited */
#parent {
  color: red;
}

/* Directly targeted -- TAKES PRECEDENCE */
.child {
  color: blue;
}
```

## Rule Order

* Final factor in a tie-breaker
* If multiple conflicting rules target an element
  * The *last* defined rule is the winner

``` html
<div class="alert warning"></div>
```

``` css
.alert {
  color: red;
}

/* defined last, takes precedence */
.warning {
  color: yellow;
}
```

## Adding CSS to HTML

### External CSS

* Most common method
* Create a separate file for CSS
* Link to inside HTML's `<head>` tag with the `<link>` element
  * ie: `<link rel="stylesheet" href="styles.css">`
  * `href` is the location of the CSS file
  * `rel` specifics relationship between HTML & linked file
* Pros of external css:
  * HTML & CSS are separate, smaller HTML, cleaner look
  * Edit CSS in only 1 place, *handy for multiple pages that share similar styles*

``` html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

``` css
/* styles.css */

/* declaration block */
div { /* selector */
  /* declarations */
  color: white;
  /* color: property */
  /* white: value */  
  background-color: black;
}

/* declaration block */
p { /* selector */
  /* declarations */
  color: red;
  /* color: property */
  /* white: value */
}
```

## Internal CSS (Embedded)

* Add CSS within HTML doc itself
* Place all rules inside `<style>` tags, within the `<head>` of the HTML file
  * No longer require `<link>` tag
* Useful for adding *unique styles* to a *single page*
* Causes HTML files to be larger

``` html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
```

## Inline CSS

* Add CSS tags directly to HTML elements
* Added with the `style=` attribute
* Used when you need a `unique` style for a `single` element
* **NOT recommended**:
  * Gets messy quickly, bloated
  * If you want to share styles among elements, it requires a lot of *copy* and *pasting*
  * Inline CSS ***overrides*** all other methods, causing unexpected results

