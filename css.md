# CSS

**CSS** is a Stylesheet language that changes how HTML documents are styled. It affects font styles, colors, layout and responsive features.

## Basic Syntax

- CSS is made up of rules
  - Selector
  - Semi-colon
  - List of declarations
    - Property:Value pair

```css
/* selector */
div.bold-text {
  font-weight: 700;
  /* property: value; */
}
```

## Selector

- Refer to HTML elements to which the CSS rules apply
  - What's being selected for each rule

### Universal Selector

```css
/* styles.css */
* {
  color: purple;
}
```

### Type Selector

- Selects elements of the given **element type**

```html
<!-- index.html -->
<div>Please agree to our terms of service.</div>
```

```css
/* styles.css */
div {
  color: white;
}
```

### Class Selector

- Selects elements with the given **class**
- Classes are **attributes** you place on an HTML element

```html
<!-- index.html -->
<div class="alert-text">
  Welcome to the machine.
</div
```

```css
/* styles.css */
.alert-text {
  color: red;
}
```

### ID Selector

- Similar to class selectors
- Select elements with a given ID
- Use a hashtag followed by case sensitive ID
- **Common pitfall**: overusing ID. Classes will suffice most of the time and ID's should be use **sparingly (if at all)**
- Used when specificity is needed or having links redirect to a section on the current page
- Elements can have only **ONE ID** & **NO WHITESPACE**

```html
<!-- index.html -->
<div id="title">Welcome to the machine.</div
```

```css
/* styles.css */
#title {
  background-color: white;
}
```

### Grouping Selectors

- Used with multiple groups of elements that share style declarations

```css
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

- Used to apply styles to a specific combo of selectors
- Must contain all selectors in order for rules to apply
- No space between selectors
- Can't chain multiple `type` selectors (ie: div, p, h1)
  - Because that would give you `divph1`

```html
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>
```

```css
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

- Allow you to combine multiple selectors by their relationship between them
- There are [**4** types of combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#combinators) in total
- Represented by single space between selectors
- Matches the **last selector only**
  - If they also have an ancestor (parent, grandparent, etc.) that matches the previous selector
- `.ancestor .child` would select the class `child` if it has the ancestor with the class `ancestor`
  - If it is **nested** inside of ancestor

```html
<!-- index.html -->
<div class="ancestor">
  <!-- A -->
  <div class="contents">
    <!-- B -->
    <div class="contents"><!-- C --></div>
  </div>
</div>

<div class="contents"></div>
<!-- D -->
```

In this example, **BOTH B & C** would be selected.

```css
/* styles.css */
.ancestor .contents {
  /* some declarations */
}
```

# Properties

## Color Values

- **Common keywords** (Predefined, Cross-browser)
  - ie: `red`, `coral`, `transparent`
  - [Full List of Pre-defined Colors](https://www.w3schools.com/colors/colors_names.asp)

```css
#p1 {
  background-color: red;
} /* red */
#p2 {
  background-color: transparent;
} /* transparent */
```

- **HEX values**
  - ie: `#ff0000` (red)
  - Specified with `#RRGGBB`
    - `RR`: Red values
    - `GG`: Green values
    - `BB`: Blue values
  - Range: `00` (lowest) to `FF` (highest)

```css
#p1 {
  background-color: #ff0000;
} /* red */
#p2 {
  background-color: #00ff00;
} /* green */
#p3 {
  background-color: #0000ff;
} /* blue */
```

- **HEX values with transparency**
  - ie: `#ff000080`
  - Transparency: Add 2 digitals between `00` & `FF`

```css
#p1a {
  background-color: #ff000080;
} /* red transparency */
#p2a {
  background-color: #00ff0080;
} /* green transparency */
#p3a {
  background-color: #0000ff80;
} /* blue transparency */
```

- **RGB values**
  - ie: `rgb(red, green, blue)`
  - `rgb()` is a _function_
  - Intensity of each value: 0 (lowest) to 255 (highest)

```css
#p1 {
  background-color: rgb(255, 0, 0);
} /* red */
#p2 {
  background-color: rgb(0, 255, 0);
} /* green */
#p3 {
  background-color: rgb(0, 0, 255);
} /* blue */
```

- **RGBA values**
  - ie: `rgba(red, green, blue, alpha)`
  - RGB colors with an **_alpha channel_**
    - Specifies opacity of the object
    - Alpha: 0.0 (fully transparent) to 1.0 (opaque)

```css
#p1 {
  background-color: rgba(255, 0, 0, 0.3);
} /* red with opacity */
#p2 {
  background-color: rgba(0, 255, 0, 0.3);
} /* green with opacity */
#p3 {
  background-color: rgba(0, 0, 255, 0.3);
} /* blue with opacity */
```

- **HSL values**
  - ie: `hsl(hue, saturation, lightness)`
  - Cylindrical-coordinate representation of colors
  - `hsl()` is a function
  - **Hue**: Color Wheel `0` - `360`
    - Red: `0` or `360`
    - Green: `120`
    - Blue: `240`
  - **Saturation**: Percentage value
    - Shade of gray: `0%`
    - Full color: `100%`
  - **Lightness**: Percentage value
    - Black: `0%`
    - White: `100%`

```css
#p1 {
  background-color: hsl(120, 100%, 50%);
} /* green */
#p2 {
  background-color: hsl(120, 100%, 75%);
} /* light green */
#p3 {
  background-color: hsl(120, 100%, 25%);
} /* dark green */
#p4 {
  background-color: hsl(120, 60%, 70%);
} /* pastel green */
```

- **HSLA values**
  - ie: `hsla(hue, saturation, lightness, alpha)`
  - Alpha parameter: `0.0` - `1.0`
    - Fully transparent: `0.0`
    - Fully Opaque: `1.0`

```css
#p1 {
  background-color: hsla(120, 100%, 50%, 0.3);
} /* green with opacity */
#p2 {
  background-color: hsla(120, 100%, 75%, 0.3);
} /* light green with opacity */
#p3 {
  background-color: hsla(120, 100%, 25%, 0.3);
} /* dark green with opacity */
#p4 {
  background-color: hsla(120, 60%, 70%, 0.3);
} /* pastel green with opacity */
```

### Color & Background Color

- **Color** property: text color
- **Background-Color** property: background color of an element

```css
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

- `font-family` can be single value, or comma-separated list for fonts
- Falls into 1 of 2 categories:
  - Font Family Name: `Times New Roman`
  - Generic Family Name:
    - `sans-serif` have clean lines, modern, minimal
      - ie: Arial, Verdana, Helvetica
    - `serif` are formal, elegant, have small stroke at edge of each char
      - ie: Times New Roman, Georgia, Garamond
    - `monospace` have fixed width, mechanical look
      - ie: Courier New, Lucida Console, Monaco
    - `cursive` imitate human handwriting
      - ie: Brush Script MT, Lucida Handwriting
    - `fantasy` are decorative, playful
      - ie: Copperplate, Papyrus
- If browser can't find 1st font in list, it will use the next one
- **Best Practice:** Include list of values, starting with top preference, and ending with least preferred

```css
font-family: "Times New Roman", sans-serif;
font-family: "Times New Roman", Times, serif;
font-family: Arial, Helvetica, sans-serif;
font-family: "Lucida Console", "Courier New", monospace;
```

### Custom Font Family

- `@font-face` is used for loading custom fonts in browser & present it to site
- Must appear **before other styling properties**
- Requires 2 properties:
  - `font-family` font name
  - `src` URL to download the font

```css
@font-face {
  font-family: fontname;
  src: url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2);
  font-weight: italic;
}
```

- Alternative: **Linking fonts** in the `<head>`

```html
<head>
  <link
    href="https://fonts.googleapis.com/css?family=Gayathri&display=swap"
    rel="stylesheet"
  />
</head>
```

- Alternative: **Importing fonts** using `@import` to css

```css
@import url("https://fonts.googleapis.com/css?family=Gayathri&display=swap");
```

- [Google Fonts API](https://developers.google.com/fonts/docs/getting_started)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
```

### Font Size

- `font-size` should contain NO whitespace

```css
font-size: 22px;
```

### Font Weight

- `font-weight` affects boldness of text
- Values can be:
  - the word `bold` or a value between `1` - `1000`
  - **Typically** in increments of `100` up to `900`, depending on the font: `200`, `300`, `400`
  - `bold` word equivalent: `700`

```css
font-weight: 700;
```

### Text Align

- `text-align` aligns text horizontally within an element
- Common keywords:
  - `center`, `right`, `left`

```css
text-align: center;
```

### Image Height & Width

- Default `<img>` size = actual image's `height` & `width`
- `auto` value will automatically adjust size of an image without causing it to lose its proportions

```css
img {
  height: auto;
  width: 500px;
}
```

- If the above image had a height of `500px` and width of `1000px`
- `auto` would downsize the `height` to `250px`
- **Best Practices**
  - **ALWAYS** include _both_ height & width for _ALL_ images
  - Reserves space on the page & will appear blank until image loads
  - If `height` & `width` are not included & the image takes longer to load than the rest of the page, the **image will not take up any space on page at first**
  - Will suddenly cause a drastic shift of the other page contents once loaded

## [The Cascade of CSS](https://wattenberger.com/blog/css-cascade)

- Sometimes rules conflict with one another
- CSS does what we tell it to do
- Unexpected behavior can occur due to:
  - _Default styles_ vary from browser to browser
    - ie: Large gaps between elements, button styles, etc. can appear on it's "own"
  - Not understanding `the cascade` or how a `property` works
- **The CSS Cascade is the way our browsers resolve competing CSS declarations.**
  1. **Importance**
     1. **_transition_** - active transitions are #1
     2. `!important` - reserve for overriding 3rd party libraries
     3. **_animation_** - active animation
     4. **_normal_** - bulk of rules
  2. **Origin**, where rules are defined
     1. **_website_**: in your control as web developer
     2. **_user_**
     3. **_browser_**: each browser has its own set of default styles
  3. **[Specificity](#specificity)**
  4. **Position**, rule order

## Specificity

- If two or more CSS rules that point to the same element, the selector with the **highest specificity** value will "win", and its style declaration will be applied to that HTML element.
  - Creates a score or ranking system
- **More specific** CSS declarations > **less specific** CSS declarations
- Specificity only matters when elements have _multiple, conflicting declarations_ (a tie breaker):
- Hierarchy
  1. **Inline** `<h1 style="color: white">`
  2. **Layers** unlayered > layered `@layers one, two;`
  3. **ID** selectors `#navbar`
  4. **Class** `.class`, **Attribute Selectors** `[href]` or `[checked]`, **Pseudo Selectors** `:hover` or `:first-of-type`
  5. **Type** or **Pseudo-eEement** selectors `h1` or `:before`

```html
<div class="main">
  <div class="list subsection"></div>
</div>
```

> **Multiple** classes > **Single** class

```css
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

```html
<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

> **ID** selector > **Multiple Class** selectors

```css
/* rule 1 -- MORE SPECIFIC */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

> **1 ID** & **2 Class** Selectors > **1 ID** & **1 Class** Selector

```css
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

**Chaining Selector** (_no space_) & **Descendant Combinator** (_empty space_) **DO NOT AFFECT specificity**

```css
/* rule 1 -- SPECIFICITY EQUAL TO rule 2 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 -- SPECIFICITY EQUAL TO rule 1 */
.class .second-class {
  font-size: 24px;
}
```

**Universal selector** `*` and **Combinators** `+`, `~`, `>`, ` ` (_empty space_) **DO NOT ADD specificity**

```css
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

- CSS Properties, when applied to an element, are inherited by the element's **descendants**
  - Even if we don't explicitly write a rule for it
- **Typography** based properties **ARE USUALLY** inherited
- Most **OTHER** properties **AREN'T** inherited

**Exception**: Directly targeting an element > inheritance

```html
<!-- index.html -->
<div id="parent">
  <div class="child"></div>
</div>
/* styles.css */
```

```css
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

- Final factor in a tie-breaker
- If multiple conflicting rules target an element
  - The _last_ defined rule is the winner

```html
<div class="alert warning"></div>
```

```css
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

- Most common method
- Create a separate file for CSS
- Link to inside HTML's `<head>` tag with the `<link>` element
  - ie: `<link rel="stylesheet" href="styles.css">`
  - `href` is the location of the CSS file
  - `rel` specifics relationship between HTML & linked file
- Pros of external css:
  - HTML & CSS are separate, smaller HTML, cleaner look
  - Edit CSS in only 1 place, _handy for multiple pages that share similar styles_

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

```css
/* styles.css */

/* declaration block */
div {
  /* selector */
  /* declarations */
  color: white;
  /* color: property */
  /* white: value */
  background-color: black;
}

/* declaration block */
p {
  /* selector */
  /* declarations */
  color: red;
  /* color: property */
  /* white: value */
}
```

## Internal CSS (Embedded)

- Add CSS within HTML doc itself
- Place all rules inside `<style>` tags, within the `<head>` of the HTML file
  - No longer require `<link>` tag
- Useful for adding _unique styles_ to a _single page_
- Causes HTML files to be larger

```html
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
<body>
  ...
</body>
```

## Inline CSS

- Add CSS tags directly to HTML elements
- Added with the `style=` attribute
- Used when you need a `unique` style for a `single` element
- **NOT recommended**:
  - Gets messy quickly, bloated
  - If you want to share styles among elements, it requires a lot of _copy_ and _pasting_
  - Inline CSS **_overrides_** all other methods, causing unexpected results

## Inspecting HTML & CSS

- Inspecting & Debugging HTML/CSS is criticial to frontend development
- **Chrome Dev Tools** is used to see detailed info & assists in finding/fixing problems in code

### The Inspector

- To access the inspector in Google Chrome
  - `Right Click` on element & click `Inspect Element`
  - `CTRL+SHIFT+C` to Inspect Elements on hover
  - `F12`
  - `CTRL+SHIFT+I` to open the last panel you had open
  - `Arrow Keys` to go up/down and expand elements in DOM
  - `Right Click` on element within DOM and `Scroll into view` to hop to it's location on the page
  - `H` hides currently selected node
  - `Delete` deletes currently selected node
- HTML: Initial page contents
- DOM: current page contents

#### Inspecting Elements (the DOM)

- Blue top left arrow icon: inspect any element on hover
- Elements: HTML
- Styles: CSS Rules
  - ~~Strikethrough~~ - overwritten style

#### Testing Styles

- [Styles pane allows you to directly edit in your browser](https://developer.chrome.com/docs/devtools/css)
  - Add new rules
  - Edit existing rules
- Changes apply in real-time
- Does NOT affect source code
- **Extremely useful** for testing out various attributes & values without having to reload page over and over

#### [Overview of Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/)

- `CTRL+F` Find things in DevTools

##### Device Mode

- Simulate mobile devices

##### Elements panel

- View & change DOM & CSS

##### Console

- View messages & run JavaScript from the Console
- `CTRL+SHIFT+J`

##### Sources Panel

- Debug JavaScript
- Persist changes made in DevTools across page reloads
- Save & run snippets of JavaScript
- Save changes you make in DevTools to disk

##### Network Panel

- View & debug network activity

##### Performance Panel

- Find ways to improve load & runtime performance

##### Memory Panel

- Fix memory problems
- JavaScript CPU Profiler

##### Application Panel

- Inspect all resources that are loaded
  - IndexedDB or Web SQL databases
  - Local & Session Storage
  - Cookies
  - Application Cache
  - Images
  - Fonts
  - Stylesheets

##### Security Panel

- Debug
  - Mixed content issues
  - Certificate problems, etc.

#### [CSS Overview](https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/)

- `CTRL+SHIFT+I`, click 3 dot icons > `More tools` > `CSS Overview`
- Click `Capture Overview`
- Menu Options
  - Overview Summary
    - Number of Elements used
    - Selector types
    - Number of inline style elements
    - Number of external stylesheets
  - Colors
    - Each color is clickable
    - Shows which elements use each color
  - Font Info
    - `font-size`, `line-height`, `font-weight`, `font-family`
    - Where they're used
  - Unused declarations
    - Styles that don't affect the web page
  - Media Queries
    - Various widths & screen resolutions used in creating the page
    - ie: `screen` and `(max width:736px)`

## The Box Model

- Most important CSS skills: **positioning** & **layout**
- JavaScript is meaningless if you can't stick elements on the page where you need them
- Every single thing on page is a **rectangular box**
- Boxes can have other boxes in them and can sit next to one another

```css
/* To test the box model: */
* {
  border: 2px solid red;
}
```

> Parts of a box
>
> ![Parts of a box](img/box-parts.png)

- Manipulating boxes & space between them:
  - `border`, space between margin & padding
  - `padding`, space between edge of box & content
    - inside the border
    - includes `background-color`
  - `margin`, space between box & any other boxes next to it
    - **collapse** between two elements
    - highest `margin` value wins
    - outside of the border
    - not affected by `background-color`
  - `height`, `width` size of inner element
- ["True" height of an element](https://www.youtube.com/watch?v=rIO5326FgPE), add all values:
  - `padding` top & bottom
  - `border` top & bottom
  - `height`
- `box-sizing: border-box;`
  - Almost always added to CSS
  - Makes stylizing easier
  - Added to universal selector (`* { }`)
  - Ensures `height` and `width` are obeyed

> Standard CSS Box Model
>
> ![Box Model](./img/standard-box-model.png)

> Border-Box in CSS

![Border-Box](./img/border-box.png)

### Box Types

In CSS, there are two types of boxes. The type refers to how the box behaves in terms of _page flow_ and _in relation_ to other boxes.

- **Block**
  - `display: block`
  - Appear stacked atop each other
  - Each new element creates a new line
  - Fills available _inline_ space of the parent element and _grows_ along the _block_ dimension to accommodate its content
  - **Centering** a block: `margin: auto`
- **Inline**
  - Sizes according to its content
  - Sits inside _content_ of _block-level elements_
  - Do not start a new line
  - Appear _in line_ with with elements they are placed beside
  - ie: `<a>`
  - Generally, don't add extra padding/margin on inline elements
  - **Inline-block** elements
    - Behave like inline elements
    - Have block-style padding & margin
    - Useful, but `flexbox` is better for lining up boxes

Boxes then have an **inner** and **outer** display type.

#### Outer Display Type

- `block` outer display types:

  - Break onto a **new line**
  - Width & Height are respected
  - Other elements will be **pushed away** using padding, margin, border
  - Box extends in _inline_ direction to fill space available in container
    - Become as wide as it's container, 100% of the space
  - ie: `<h1>` and `<p>` use `block` by default

- `inline` outer display types:
  - Will NOT break onto a **new line**
  - Width & Height are NOT applied
  - **Vertical** padding, margins, border WILL apply
    - WON'T push other inline boxes away from the box
  - **Horizontal** padding, margins, borders WILL apply
    - WILL push other inline boxes away from the box
  - ie: `<a>`, `<span>`, `<em>`, `<strong>`

#### Inner Display Type

Inner display types dictate how elements **inside that box** are laid out.

- Default: Elements _inside_ a box are laid out in:
  - **normal flow**
  - Behave as `block` or `inline`
- Change inner display type with `display: flex;`
  - Still uses _outer_ display type `block`
  - _Inner_ display type `flex`

### DIV's & Spans

- DON'T give meaning to their content
- Generic boxes that can do anything
- Used to _hook_ elements
  - Give `id` or `class` to them for CSS styling
  - Grouping related elements under one parent element to _correctly position them_ on the page

#### DIV

- Block-level element by default
- Used as a container to group other elements
- Divs allow us to _divide_ pages into blocks and apply styles to those blocks

#### Span

- Inline-level element by default
- Group text content and inline HTML elements for styling
- Should only be used when no other _semantic_ HTML element is appropriate

### Normal Flow

- Default layout of elements in the Box Model
- Block-level elements
  - `<address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>`
- Inline-level elements
  - `<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var>`

## [Flex Box](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

- Flexbox is a way to arrange items into _rows_ and _columns_
- Based on simple rules you can define
- Fill available area w/ _equal width_

```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
.flex-container {
  display: flex;
  /*
  flex-direction: row
  > start from edge of main axis
  > does not grow on main dimension, but can shrink
  >
  /*
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1;
}
```

#### Flex Containers & Flex Items

- Flexbox is a **toolbox** of properties to put things where you need them
- Any element can be a **BOTH** a flex **container** & flex **item**
- **Flex Containers**: `display:flex`
- **Flex items**: `flex: 1`
- Creating/nesting multiple flex containers and items is the primary way we will be building up complex layouts

```html

```

```css
/* flex containers */
.container {
  display: flex;
  display: inline-flexinline;
}
```

![Flexbox 1](./img/flexbox-1.png)

![Flexbox 1](./img/flexbox-2.png)

#### Flex Shorthand

- `flex` declaration: **shorthand** for **3 properties**
  - shorthand: CSS properties that allow you to set values of multiple **other** properties simultaneously
- `flex: flex-grow, flex-shrink, flex-basis;`
- `flex: 0, 1, 0%;`

##### Flex-Grow

- `flex: flex-grow, *, *`
- Single number
- Flex-item's **Growth Factor**
  - `flex: 1;` To all DIV's = grow the same amount
  - `flex: 2;` To 1 DIV = 2x the size as `flex: 1;`

##### Flex-Shrink

- Similar to `flex-grow`
- Flex-item's **Shrink Factor**
- **Only applied** if size of ALL flex items is **larger** than their parent
- Default: `flex-shrink: 1;`
  - ie: all items shrink evenly
- If 3 DIV's had `width: 100px;` and their container was _smaller_ than `300px`, the DIV's would have to shrink to fit
- **NO Shrink**: `flex-shrink: 0;`
- **Faster Shrink**: `flex-shrink: 2(+);`

> `flex-grow` and `flex-shrink` do NOT necessarily obey width rules (ie: `250px`)
>
> > if parent is big enough, they grow to fill it
> >
> > > if parent is too small, they shrink to fit

##### Flex-Basis

- Sets initial size of a flex item
- Grow/shrinking starts from this baseline
- Default shorthand value: `0%`
  - ie: `flex: 1` is equal to `flex: 1 1 0%;`
- If you want to **only** adjust an item's flex-grow
- Default value of `flex-basis` is `auto` UNLESS you specify `flex: 1;`
  - `flex-basis: auto;` checks for a **width declaration**
- `flex: auto;` is equal to `flex: 1 1 auto;` (check for width)
- `flex: 1;` is equal to `flex: 1 1 0%` (ignore width)

#### Flex in Practice

```css
/* grow evenly */
flex: 1;
/* prevent shrinking */
flex-shrink: 0;
```

#### Flex Axes

- Flexbox can work _horizontally_ or _vertically_
  - Rows or Columns
- Default: horizontal (row)
  - Alternative: vertical (column)
    - ie: `css .flex-container { flex-direction: column; }`

```css
/* default setting */
flex-direction: row;
flex-direction: row-reverse; /* right to left */
/* columns/vertical flexbox */
flex-direction: column;
flex-direction: column-reverse; /* down to up */
```

- When `flex-direction: column;` is used, `flex-basis` refers to `height`

### Alignment

- To space objects out within a container, you would add `justify-content: space-between;`

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

![Center](./img/justify-content-space-between.png)

- To center objects within a container, you would add:
  - X-axis (horizontally): `justify-content: center;`
  - Y-axis (vertically): `align-items: center;`

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

![Center](./img/justify-content-center.png)

- `gap` adds space between flex items

![Gap](./img/gap.png)

- Multi-line flex **containers**

```css
/* default */
flex-wrap: nowrap;
/* move to item to next line */
flex-wrap: wrap;`
```

![flex-wrap](./img/flex-wrap.png)

#### Flex Flow Shorthand

- Combine flex direction & wrap into one line

```css
flex-flow: flex-direction, flex-wrap;
/* example */
flex-flow: row wrap;
```

## Emmet

```css
* {
  /* bxz */
  box-shadow: inset hoff voff blur #000;
  /* ts */
  text-shadow: hoff voff blur #000;
  /* bd */
  border: 1px solid #000;
  /* c */
  color: #000;
  /* bgc */
  background-color: #fff;
  /* c */
  color: #000;
  /* df */
  display: flex;
  /* jc */
  justify-content: start;
  /* ai */
  align-items: start;
  /* ta */
  text-align: left;
  /* m:a */
  margin: auto;
}
```

## CSS Resets / Reboots

CSS Resets are used to deal with styling inconsistencies across browsers.

Most popular reset is the [Meyer reset](https://meyerweb.com/eric/tools/css/reset/reset.css). It _removes_ default styling.

[HTML5 Reset](https://html5doctor.com/html-5-reset-stylesheet/) is a more modern reset based on the Meyer reset.

[Normalize.css](https://necolas.github.io/normalize.css/) doesn't remove default CSS styles, but replaces them with a standardized set of rules.

**List of alternatives:**

- [Vanilla CSS Un-Reset](http://cssreset.com/scripts/vanilla-css-un-reset/): Re-styles elements after you un-style them w/ a reset.
- [MiniReset.css](https://github.com/jgthms/minireset.css): Wipes out styles, semantic markup has no affect, retains some defaults
- [Sanitize.css](https://jonathantneal.github.io/sanitize.css/): Modern best practices, opinionated

**Reboot**

- [Reboot](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss): SCSS, Part of bootstrap repo, builds upon Normalize. Opinionated, additional class-specific styles.

**Browserlist**

- [Browserlist](https://css-tricks.com/browserlist-good-idea/)

## CSS Units

**Absolute units** remain the same in any context. Pixels (`px`) is the only absolute measurement used in web design and they do not change relative to anything else on the page.

**Relative units** change based on their context.

### `em` and `rem`

Both `em` and `rem` refer to _font size_ but are often used to define other sizes in CSS.

Use `rem` as a rule of thumb.

`1em` is the `font-size` of an element (or the _element's parent_ if you're setting `font-size`).

If an element's `font-size: 16px`, setting `width: 4em` would make it's width `64px` because `(16px * 4)`.

`1rem` is the `font-size` of the root element: `:root` or `html`. It works the same as `em` but without having to keep track of the parent's font size.

### Viewport Units

`vw` and `vh` relate to the size of the viewport.

`1vh` = `1%` of viewport height.

These are useful for full-height heroes, full-screen app-like interfaces.

### Numbers, Lengths, Percentages

`<integer>` is a whole number: `1024` `-55`

`<number>` is a decimal number: `128` `123.11` `-0.55`

`<dimension>` is a `<number>` with a unit attached to it: `45deg` `5s` `10px`. `<dimension>` is an umbrella category for:

- `<length>`
- `<angle>`
- `<time>`
- `<percentage>`

### More Units

- `ch` = width of the font's `0` character.
- `lh` = line height of an element
- `vmin` = % of viewport's width or height (_whichever is smaller_)
- `vmax` = % of viewport's width or height (_whichever is larger_)

### When to use `px`, `em`, `rem`

[Source](https://codyloyd.com/2021/css-units/)

Cody recommends using `rem` for fonts and `px` for everything else.

It's a matter of design preference. When setting margins/paddings to `rem`, they will increase in size as the user zooms in.

Setting margings/padding to `px` and fonts to `rem` will allow the text to grow, but everything else will remain static.

### Using Viewports

**Responsive Typography**

Using viewport units for responsive typography is becoming popular, because it allows text to grow/shrink based on the size of the browser window.

**Direct scaling** is too dramatic, so developers use `calc()` to control it. For example, `font-size: calc(16px + 0.5vw)`.

Line height is another use case for viewport units.

```css
body {
  /* font grows 1px for every 100px of viewport width */
  font-size: calc(16px + 1vw);
  /* leading grows along with font, */
  /* with an additional 0.1em + 0.5px per 100px of the viewport */
  line-height: calc(1.1em + 0.5vw);
}
```

**Full-Height Layouts, Hero Images, Sticky Footers**

Full Height:

`height: 100vh` constrains your web app to the _height of your viewport_. Make sure to apply `overflow` values on internal elements to prevent content from being cut off.
(`overflow-y: auto;`)

Sticky Footers:

`min-height: 100vh` will make your footer remain at the bottom of your page.

Hero Images:

Apply `height: 100vh` for full-screen sections and hero images.

**Fluid Aspect Ratios**

Constraining height-to-width ratios of an element can be useful (ie: embedded content).

For full-screen videos:

```css
/* full-width * aspect-ratio */
.full-width {
  width: 100vw;
  height: calc(100vw * (9 / 16));
}
```

**Breaking the Container**

To allow full width backgrounds to spill outside of a restricted container:

```css
.full-width {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}
```

## Fonts

**System Font Stack**

If a `font-family` that isn't installed on a user's computer, a fallback font is displayed. This is why a long list of fonts are often listed.

A popular stack is the **system font** stack, which defaults to the operating system's UI font.

> Useful when going for a "neutral" font-style

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

**Online Font Libraries**

Using fonts that are not stored on a user's computer is done through font libraries:

- [Google Fonts](https://fonts.google.com/)
- [Font Library](https://fontlibrary.org/)
- [Adobe Fonts](https://fonts.adobe.com/)

To add them to a site, use one of the following:

> Always add a backup font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
```

**Downloaded Fonts**

You can also import and define custom fonts using the `@font-face` rule. Note: Not all font file formats are supported by browsers.

```css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}
```

**Text Styles**

**`font-style`**

`<em>` allows you to italicize text in the middle of a sentence but it also adds emphasis to that text.

If you just want text to be bold, italic, underlined or highlighted, **use a CSS property.**

If you want to provide emphasis, use an html element.

```css
h1 {
  font-style: italic;
}
```

**`letter-spacing`**

Some fonts have too little or too much spacing between letters. To change this, use:

```css
h1 {
  letter-spacing: 0.5em;
}
```

**`line-height`**

Line height adjusts the space between lines of text and increasing it improves readability.

```css
p {
  line-height: 1.5;
}
```

**`text-transform`**

Text transform allows you to change the letter case.

```css
p {
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;
}
```

**`text-shadow`**

Text shadow is good for headers, etc.

```css
h1 {
  /* offset-x | offset-y | blur-radius | color */
  text-shadow: 1px 1px 2px black;

  /* color | offset-x | offset-y | blur-radius */
  text-shadow: #fc0 1px 0 10px;

  /* offset-x | offset-y | color */
  text-shadow: 5px 5px #558abb;

  /* color | offset-x | offset-y */
  text-shadow: white 2px 5px;

  /* offset-x | offset-y
/* Use defaults for color and blur-radius */
  text-shadow: 5px 10px;
}
```

**`ellipsis`**

`text-overflow: ellipsis` combined with a few other css rules can allow you to insert an ellipsis instead of overflowing out of an element:

```css
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## More CSS Properties

### Background

Background is a shorthand property for 8 different background related properties:

- `background-attachment`
- `background-clip`
- `background-color`
- `background-image`
- `background-origin`
- `background-position`
- `background-repeat`
- `background-size`

Syntax:

```css
/* Using a <background-color> */
background: green;

/* Using a <bg-image> and <repeat-style> */
background: url("test.jpg") repeat-y;

/* Using a <box> and <background-color> */
background: border-box red;

/* A single image, centered and scaled */
background: no-repeat center/80% url("../img/image.png");

/* Global values */
background: inherit;
background: initial;
background: revert;
background: revert-layer;
background: unset;
```

The background property is specified **as one or more background layers,** separated by commas.

[Codepen of examples](https://codepen.io/webinspect/pen/emBzRd)

### Border

Border is a shorthand property for:

- `border-color`
- `border-style`
- `border-width`

Border Syntax:

```css
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;
```

`border-radius` adds rounded corners.

### Box-shadow

`box-shadow` adds a shadow around an element's frame and it accepts multiple values:

- inset
- offset-x
- offset-y
- blur-radius
- spread-radius
- color

```css
/* Keyword values */
box-shadow: none;

/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

### Overflow

Overflow is a shorthand property that sets the behavior when an element's content is too big to fit in its block formatting context.

`visible` allows content to spill outside padding box.

`hidden` hides or clips content that doesn't fit, and the content is scrollable.

`clip` is similar to `hidden` but doesn't allow scrolling.

`scroll` clips content to fit inside the padding box, and shows scrollbars.

`auto` adds scrollbars on desktop. Looks the same as `visible` but still establishes a new block formatting context.

`overlay` is the same as `auto` but with scrollbars drawn on top of content instead of taking up space.

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;
```

### Opacity

Opacity sets opacity of an element, or the degree to which content behind an element is hidden.

`opacity` is the opposite of transparency.

```css
/* opaque */
opacity: 1;
/* transparent */
opacity: 0;
```

## Advanced Selectors

Exercise: [CSS Diner](https://flukeout.github.io/)

Cheatsheet: [freeCodeCamp](https://www.freecodecamp.org/news/css-selectors-cheat-sheet/)

Parent & Sibling Combinators

- `>` Child combinator
- `+` Adjacent Sibling combinator
  - Only the 1st match
- `~` General Sibling combinator
  - All siblings

```css
/* all direct children div elements */
main > div {
}

/* all direct grandchildren div elements */
main > div > div {
}

/* only elements on same level of indentation (adjacent) */
/* 1st div that directly follows .group1 */
.group1 + div {
}

/* 2nd div that directly follows .group1 */
.group1 + div + div {
}

/* all div siblings/adjacent to .group1 */
.group1 ~ div {
}
```

### Pseudo-classes

Pseudo-classes give us different ways to _target elements_. Some are based on:

- Their position or structure within HTML
- State of an element
- How user is currently interacting with it

Pseudo-classes share the same specificity as regular classes: `0,0,1,0`.

> Specificty notation: `inline, id, class, tag`, +1 per instance

**Dynamic/User Action Pseudo-classes**

`:focus` element is selected by user via cursor OR keyboard

`:hover` anything under mouse pointer

`:active` anything currently being clicked: great for giving user feedback that their action had an effect.

Hyperlinks are blue and turn purple after clicking them:

```css
/* This rule will apply to all links */
a {
  text-decoration: underline;
}

/* This will apply to unvisited links */
a:link {
  color: blue;
}

/* And you guessed it, this applies to all links the user has clicked on */
a:visited {
  color: purple;
}
```

**UI element states pseudo-classes**

- `:enabled`
- `:disabled`
- `:checked`

**Structural Pseudo-classes**

Structural pseudo-classes are a powerful way to select elements based on their _position within the DOM_.

`:root` very top level of your document. equivalent to `html` (web), with higher specificity.

- place global CSS rules in `:root` (anything you want available everywhere)
  - css variables
  - `box-sizing: border-box`

`:first-child` `:last-child` match elements that are the first or last sibling.

`:empty` matches elements that have no children at all.

`:only-child` matches elements that don't have any siblings.

`:nth-child` flexible with several uses:

```css
.myList:nth-child(5) {
  /* Selects the 5th element with class myList */
}

.myList:nth-child(3n) {
  /* Selects every 3rd element with class myList */
}

.myList:nth-child(3n + 3) {
  /* Selects every 3rd element with class myList, beginning with the 3rd */
}

.myList:nth-child(even) {
  /* Selects every even element with class myList */
}
```

`:nth-of-type(x)` matches the x instance of a selector.

- `div:nth-of-type(2)` matches the 2nd div in the dom
- `div:nth-of-type(2n)` matches every 2nd div: div DIV div DIV
- `div:nth-of-type(2n+2)` matches every 2nd div, starting at the 2 position: div div div DIV div DIV

`:nth-last-of-type(x)` does the same thing as `:nth-of-type`, starting at the end of the DOM, working upwards

`:target` matches URI fragment identifiers:

```css
section:target {
}
```

```html
<a href="#cta">Call To Action</a>
<!-- matches url.com/#cta-->
<section id="cta"></section>
```

`:empty` matches elements that don't contain any children

`:not(x)` matches elements that don't contain x

- `div:not(.cta)` matches all divs that don't have a class of `cta`

**Pseudo-elements**

Pseudo-elements are more abstract than pseudo-classes. They allow us to affect parts of our HTML that **aren't elements at all.**

Specificity of pseudo-elements: `0,0,0,1`

`::marker` changes li's bullets/numbers style

`::first-letter` `::first-line` changes styling to first letter/line of text.

`::selection` change highlighting when a user selects text on page

` ::before``::after ` adds extra elements with CSS, without the need for HTML. These allow you decorate text in many ways:

```html
<style>
  .emojify::before {
    content: "😎 🥸 🤓";
  }

  .emojify::after {
    content: "🤓 🥸 😎";
  }
</style>

<body>
  <div>Let's <span class="emojify">emojify</span>this span!</div>
</body>
```

**Attribute Selectors**

Attribute examples: ` src='picture.jpg'` `href="bmilcs.com" `

Attribute selector specificity: `0,0,1,0`

Basic usage:

- `[attribute]` targets anything where the attribute exists
- `selector[attribute]` targets a selector with an attribute
- `[attribute="value"]` targets an exact value
- `[attribute~="value"]` targets a whitespace separated list of words, where one of the words is _exactly_ the specified value.
- `[attribute|="value"]` targets exact match OR starts the specified value followed by - `attribute="value-one"` or `attribute="value"`

Regex can be used with attribute selectors to select partial matches:

- `[attribute^="value"]` matches values that begin with "value"
- `[attribute$="value"]` matches values that end with "value"
- `[attribute*="value"]` matches values that contain "value" anywhere

Examples:

```css
a {
  color: blue;
}

/* Internal links, beginning with "#" */
a[href^="#"] {
  background-color: gold;
}

/* Links with "example" anywhere in the URL */
a[href*="example"] {
  background-color: silver;
}

/* Links with "insensitive" anywhere in the URL,
   regardless of capitalization */
a[href*="insensitive" i] {
  color: cyan;
}

/* Links with "cAsE" anywhere in the URL,
with matching capitalization */
a[href*="cAsE" s] {
  color: pink;
}

/* Links that end in ".org" */
a[href$=".org"] {
  color: red;
}

/* Links that start with "https" and end in ".org" */
a[href^="https"][href$=".org"] {
  color: green;
}
```

## Positioning

[Learn CSS Position in 9 Minutes](https://www.youtube.com/watch?v=jx5jmI0UlXU)

### Static Positioning

Static is the default positioning mode for all elements.

`position: static`

- `top` `right` `bottom` `left` `z-index` have **NO EFFECT** with static positioning.

### Relative positioning

Relative positioning gives `top` `right` (etc.) the ability to displace the element _relative_ to its normal position.

`position: relative`

- Meaning: "relative to itself"
- Has no effect until `top` `left` `z-index` etc. are added
- Makes a parent element the reference point for children with absolute positioning

### Absolute Positioning

Absolute positioning lets you position something at **an exact point** on the screen without disturbing elements around it.

- Removes the element from the normal document flow while **_being positioned relative to an ancestor element_**.
- Common use cases:
  - Modals
  - Image w/ caption on it
  - Icons on top of other elements

### Fixed Positioning

Fixed elements are removed from the normal flow of the document and positioned relative to the `viewport`.

- `top` `bottom` `left` `right` properties position it and it remains in position while the user scrolls.
- Common use cases:
  - Navigation bars
  - Floating chat buttons

### [Sticky Positioning](https://codepen.io/theanam/pen/MPLBYy)

Sticky elements act like normal elements _until you scroll past them_, then they start to behave like fixed elements.

- Are not taken out of the normal flow of the document.
- Stay within its parent element. If you scroll beyond the parent, it disappears.
- Common use cases:
  - Section headings

## CSS Functions

[Practical Uses of CSS Math Functions](https://web.dev/min-max-clamp/)

CSS Properties that end with a pair of parenthesis and a value between them are called CSS Functions.

Functions are reusable pieces of code which perform specific tasks. They are passed "arguments" between parenthesis, which are used by the function in a specific way.

```css
color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);
```

The `color` property's value is the function `rgb()`, which accepts numbers for its arguments. It processes those numbers to calculate the correct color.

The `background` property's value is the function `linear-gradient()`, which is a function that generates a gradient image based on the parameters it's given.

> CSS does NOT allow us to create OUR OWN functions. CSS is bundled with premade functions to help solve the most common styling problems.`

**CSS Functions for Responsive Design**

There are several CSS functions that help with creating a responsive design.

### `calc()`

Most powerful use cases for calc are:

- Mixing Units
- Ability to nest `calc(calc() - calc())`

> This example shows how `calc()` can affect layout, but it's not the best way to go about it.

```css
:root {
  --header: 3rem;
  --footer: 40px;
  --main: calc(100vh - calc(var(--header) + var(--footer)));

  /* pseudocode: */
  main = 100% viewport height - (header's height + footer's height)
}
```

### `min()` & `max()`

Both `min` & `max` are great for creating responsive websites.

`min` selects the smallest value in its list of parameters

- behaves as a boundary for the `maximum` allowed value
- useful for
  - limiting size of container `min(400px, 50%)`
  - 400px on large screens, 50% on small screens

`max` selects the largest value in its list of parameters

- behaves as a boundary for the `minimum` allowed value
- most useful when the
  - viewing window is exceptionally small
  - the user increases the content size by using the browser's zoom feature
  - when accesibility is important
- Basic math can be done within within min/max's parameters

```css
width: min(150px, 100%);
height: min(150px, 100%);

- if 150px is smaller than 100% of the parent's width/height, 150px is used.
- if 100% of the parent's width/height is smaller than 150px, 100% is used.

width: max(100px, 4em, 50%);

- largest value wins: 100px, 4em, 50%

/* basic math example */
min(80ch, 100vw - 2rem);
- smallest value is selected: 80ch OR 100vw - 2rem
```

### `clamp()`

`clamp` is another great way to make elements fluid & responsive. It accepts 3 values:

```css
h1 {
  font-size: clamp(320px, 80vw, 60rem);
}
```

1. Smallest acceptable value (320px)
2. Ideal value (80vw)
3. Largest value (60rem)

### Text: Perfect Width

Anything from 45 to 75 characters is widely regarded as a satisfactory length of line for text:

```css
p {
  width: clamp(45ch, 50%, 75ch);
}
```

Alternatively, if you want an element to be `50%` wide and not exceed `75ch`:

```css
p {
  width: min(75ch, 50%);
}
```

Or, if you want the element to be at least `45ch`:

```css
p {
  width: max(45ch, 50%);
}
```

### Padding Management

Enable an element to have additional padding at larger screen sizes, while maintaining a minimum padding at smaller screen sizes.

```css
footer {
  padding: var(--blockPadding) max(2rem, 50vw - var(--contentWidth) / 2);
}

.element {
  padding: 1.5rem clamp(1rem, 5%, 3rem);
}
```

### Fluid Typography

`clamp()` is great for accomplishing fluid typography. You can set a minimum, ideal and maximum size that scales with the viewport width:

```css
p {
  font-size: clamp(1.5rem, 5vw, 3rem);
  - minimum: 1.5rem
  - ideal:   5vw
  - max:     3rem
}
```

### Creating HSL Color Pallette w/ `calc()`

```css
.colors {
  --base-hue: 140;
  --saturation: 95%;
  --lightness: 80%;
  --rotation: 60;

  color: #222;
  text-align: center;
}

.color {
  padding: 0.25rem;
  background-color: hsl(var(--hue), var(--saturation), var(--lightness));
}

.color1 {
  --hue: calc(var(--base-hue));
}

.color2 {
  --hue: calc(var(--base-hue) + var(--rotation));
}

.color3 {
  --hue: calc(var(--base-hue) + var(--rotation) * 2);
}
```

### Contextual Margins w/ `max()`

- Tall viewports (phones/tablets): `8vh` is used
- Short viewports (monitors): `2rem` is used

```css
.element + .element {
  margin-top: max(8vh, 2rem);
}
```

### Other CSS Functions

1. `url()` set background-image, list-style, cursor, border, etc.
2. `var()` insert the value of a CSS variable.

**Transform Functions**

- `translate(x, y)` \*
- `scale()` \*
- `rotate()` \*
- `perspective()`

**Stepped Value Functions**

- `round()` rounding
- `mod()` modulus

**Exponential Functions**

- `pow(a,b)` a to the power of b
- `sqrt(a)` square root of a

**Sign-related Functions**

- `abs()` absolute value
- `sign()` returns -1 (negative #), 1 (positive #)

**Filter Functions**

Applies graphical effect on an**Counter Functions**

- `drop-shadow()`
- `grayscale()`
- `hue-rotate()`
- `invert()`
- `opacity()`
- `saturate()`
- `sepia()`

**Color Functions**

- `rgb()` `rgba()`
- `hsl()` `hsla()`

**Image Functions**

May be used wherever an `<image>` is valid as a value for a property:

- `content` for pseudo-element
- `background-image`
- `list-style-image`
- `border-image-source`
- `cursor`

Functions:

- `conic-gradient()` \* circular gradient
- `linear-gradient()` \* linear gradient
- `cross-fade()`

**Counter Functions**

- `counter()`

**Shape Functions**

May be used as values for the `<basic-shape>` data type, which is used by `clip-path`, `offset-path` and `shape-outside` properties.

- `circle()`
- `ellipse()`
- `inset()`
- `polygon()`
- `path()`

**Reference Functions**

- `attr()`
- `env()`
- `url()`
- `var()`

**CSS Grid Functions**

- `fit-content()`
- `min-max()`
- `repeat()`

## Custom CSS Properties

CSS Variables (aka Custom CSS Properties) are useful & powerful tools when writing our CSS files. They allow us to reference a value several times throughout a file and allow us to change all of those values in a single place.

```css
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
```

### Fallback Values

`var()` accepts two parameters: a CSS custom property and an optional fallback value. The fallback value is used if the custom property is invalid or hasn't been declared yet.

```css
.fallback {
  --color-text: white;

  background-color: var(--undeclared-property, black);
  color: var(--undeclared-again, var(--color-text, yellow));
}
```

### Scope

The scope of custom properties is determined by the selector. This scope includes the selector the custom property lives in, as well as any descendant.

### `:root` Selector

Declaring custom properties in the `:root` selector is essentially the same as the `html` selector, but it has a higher specificity. It allows us to declare global variables that can be used throughout our projects.

```css
:root {
  --color-black: #000;
}

.div-container {
  background: var(--color-black);
}
```

### Creating Themes with Custom Properties

The `:root` selector allows us one way to add themes to our pages.

1. Add `class` attribute on our `html` element (_javascript_)
2. Add 2 scopes for the CSS custom properties, using the `.dark` and `.light` classes, which contain different values for the same custom CSS properties.

```html
<div class="container">
  <p>
    You're now viewing this example with the
    <span class="theme-name">dark</span> theme!
  </p>
  <button class="theme-toggle">Toggle Theme</button>
</div>
```

```css
:root.dark {
  --border-btn: 1px solid rgb(220, 220, 220);
  --color-base-bg: rgb(18, 18, 18);
  --color-base-text: rgb(240, 240, 240);
  --color-btn-bg: rgb(36, 36, 36);
}

:root.light {
  --border-btn: 1px solid rgb(36, 36, 36);
  --color-base-bg: rgb(240, 240, 240);
  --color-base-text: rgb(18, 18, 18);
  --color-btn-bg: rgb(220, 220, 220);
}

body,
.theme-toggle {
  color: var(--color-base-text);
}

body {
  background-color: var(--color-base-bg);
  padding: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 1.5rem;
}

.theme-toggle {
  background-color: var(--color-btn-bg);
  border: var(--border-btn);
  font-size: 1.125rem;
  padding: 10px 20px;
}

.theme-toggle:hover {
  cursor: pointer;
}

.theme-toggle:focus {
  outline: var(--border-btn);
}
```

```js
function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
```

## Media Queries

Media Queries allow us to theme our applications based on the user's operating system or user agent (like a browser)'s preference. This is accomplished with the `prefers-color-scheme` media query, which checks if a user has selected a theme preference in their OS/user agent.

- Possible values: `light` or `dark`

```css
:root {
  --border-btn: 1px solid rgb(36, 36, 36);
  --color-base-bg: rgb(240, 240, 240);
  --color-base-text: rgb(18, 18, 18);
  --color-btn-bg: rgb(220, 220, 220);
  --theme-name: "light";
}

@media (prefers-color-scheme: dark) {
  :root {
    --border-btn: 1px solid rgb(220, 220, 220);
    --color-base-bg: rgb(18, 18, 18);
    --color-base-text: rgb(240, 240, 240);
    --color-btn-bg: rgb(36, 36, 36);
    --theme-name: "dark";
  }
}

body {
  background-color: var(--color-base-bg);
  color: var(--color-base-text);
  padding: 10px;
}
```

**Default**: Light (no preference or browser doesn't support the media query)

If `dark` is the value of `prefers-color-scheme`, the media-query overwrites the default custom properties of `:root`.

### Retrieving Custom CSS in JavaScript

To use the values of custom properties in JavaScript:

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from whever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Browser Compatibility

Browser History:

- 1995 Internet Explorer
  - Netscape launched Mozilla > Firefox
- 2003 Apple Safari
- 2008 Google Chrome

### Today

Chrome & Chromium-based browsers are the dominant player.

A shift has occurred, from standalone applications to HTML5 and Progressive Web Apps, that allow applications to fully function within a web browser.

- Apps like Microsoft Word & Excel can now be utilized through any web browser, without the need of a standalone application.

Different browsers use different **engines** to display info on a page:

- Chrome/Chromium: **Blink**
- Safari: **WebKit**

Your applications may behave differently depending on what browser you're using.

- Vast majority of apps are designed to work smoothly with **Chromium**, and providing as good performance in other browsers is secondary.

For web development projects to have a broader reach, you must make sure you're testing your web apps **against the browsers which are most likely to be used**

- Chrome
- Safari
- Firefox
- Chromium: Edge, Brave, etc.

You also may need to support less common ones: IE.

### Browser Releases & New CSS Features

**W3C** World Wide Web Consortium is the authority behind developing web standards

- Maximize accessibility
- Consistency of the web experience
- Develop new CSS features

### When Is It Safe To Use New Features

Risk is involved when rushing to use new features.

To help prevent compatibility issues, ["Can I Use"](https://caniuse.com/) is a great tool for the job.

Implementing new features should wait until they are supposed by the most common browsers.

### Mobile Browsers

In some areas of the world, mobile users are a **vast majority**.

- Tablets
- Smartphones

Most popular mobile operating systems:

- Android
- Apple iOS

You must consider whether your application should be fully mobile compatible:

**iOS & iPadOS**

- Safari is technically the only supported browser.
- On iOS, Chrome/Firefox are not full browsers.
  - They use Safari rendering engine (WebKit).

For your web app to work for Apple users, **you have to support WebKit & other technologies used in Safari.**

Mobile browers != Desktop browsers. Adjustments may be needed to work properly on the mobile version of the same browser.

**Different Screen Sizes**

It's impossible to test every possible physical device. Browsers can emulate other devices, but _**only their screen sizes.**_

### The browser's high level structure

1. **UI** address bar, bookmark, back/forward
2. **Browser Engine** marshals actions between UI/rendering engine.
3. **Rendering Engine** displays request content. ie: html > parses html/css & displays it on screen
   1. html, xml, images, others via plugins: pdf
4. **Networking** calls, HTTP requests
5. **UI Backend** drawing widgets, combo boxes, windows. Exposes a generic interface that is _not_ platform specific. Underneath it uses the operating system user interface methods.
6. **JavaScript Interpreter** parse & execute JS code
7. **Data Storage** persistence layer, saves data locally, cookies. ie: localStorage, IndexedDB, WebSQL, FileSystem

> Chrome runs multiple instances of the rendering engine: 1 per tab.

![Browser High Level Structure](img/browser-high-level.avif)

**Rendering Engines**

- Internet Explorer: Trident
- Firefox: Gecko
- Safari: WebKit
- Chrome: Blink (fork of WebKit)

> WebKit is an open source rendering engine. Began as an engine for Linux & was modified by Apple to support Mac/Windows.

## Frameworks & Preprocessors

CSS Frameworks & Preprocessors can make writing CSS more streamlined and less tedious.

They are important because **they are commonly found in the workplace.** Many job requirements include _Bootstrap, SASS, and related technology._

### Frameworks

[Bootstrap](https://getbootstrap.com/), [Tailwind](https://tailwindcss.com/), [Bulma](https://bulma.io/) & [Foundation](https://get.foundation/)

- Bundle CSS you can use/access via classes defined by the framework
- Do a lot of the heavy lifting of packaging up commonly used CSS code
  - Icons
  - Interactions (dropdown menus)

> Example: `.btn` adds all the needed styles to your buttons

In order to use a framework, you need to understand:

- how it expects you to lay out your site.
- which classes it uses to designate its particular batch of styles

**Advantages**

- Gives teams ready made documentation
- Online communities: Easy access to help
- Grid system
- Speed of project delivery
- "I'm not a designer!"
- Dealing with CSS bugs & Browser compatibility
- Help with Responsive design

**Disadvantages**:

- All websites end up looking the same
- New developers jump into learning frames too early in their education
  - Never learn vanilla CSS
  - Don't get enough practice to solidify the fundamentals
- Overriding a framework's styling or debugging style issues is difficult if you haven't mastered CSS fundamentals
  - Need to know what's happening under the hood

### Preprocessors

[SASS](https://sass-lang.com/), [LESS](https://lesscss.org/), [Stylus](https://stylus-lang.com/)

Preprocessors (aka precompilers) are languages that help you write CSS more easily.

- Reduce repetition
- Provide time-saving & code-saving features
  - Write Loops
  - Join multiple stylesheets
  - Nest classes

Preprocessors are **extensions** to vanilla CSS that provide extra functionality:

- Nesting
- Mixins
- Variables

When you run the processor, it takes your code and turns it into vanilla CSS that you can import into your project.

**Disadvantages**

- Debugging is harder
- Compilation slows down development
- Can produce very large CSS files
- Maintenance & Over-engineering
- Tooling & Developer Convenience
- Saving generated files

## Grid

Grid was inspired by other forms of media: **newspapers and magazines**.

Flexbox allows us to position and align items on **one** of two axis: main & cross. It also allows us to grow, shrink and change the size of flex items. `flex-wrap` allows us to take flex items and move them to the next line. However, this isn't always easy and it's not the best tool for the job.

In other words, Flexbox is best used on a **single dimension**: up/down.

**Grid** makes creating **two-dimensional** layout much easier. Grid can also create one-dimensional layouts, giving developers the option of adding a second row later on.

Grid shares many similarities with Flexbox:

- Parent containers
- Child items
- Similar property names (alignment/positioning)

While Flexbox can struggle to make all child items match evenly in size, Grid makes this much easier.

- Flexbox Layout: mostly defined in child items
- **Grid Layout**: mostly defined in parent element

Grid is better at overlapping

- Place items on overlapping grid lines, or within the same exact grid cells.

Grid is sturdier

- Grid has space-occupying features: fractional units, content can break grids
- Flexbox sizing is complicated: `width` `min-width` `flex-basis` `flex-grow` `flex-shrink`

Quotes:

- "Flexbox is for alignment. Grid is for layout."
- "If you start giving flex items _a width_, grid will be easier to use."
- "Grid is best suited for 2D & overlapping elements, while flexbox shines in simpler/common layout requirements."

## Setting Up a Grid

**Grid Containers** will contain the whole grid. This is accomplished with:

```css
/* block level */
display: grid;
/* inline level */
display: inline-grid;
```

- Grid containers only affect their _direct children_.
- Grid items can also be grid containers.

### Columns & Rows

Specifying grid _columns_ and _rows_ defines the **grid track** or the space between lines on a grid. This is done with the `grid-template-columns` and `grid-template-rows` properties.

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
```

`grid-template` is a shorthand property for both `grid-template-columns` and `grid-template-rows`.

```css
.container {
  display: grid;
  grid-template: 50px 50px / 50px 50px;
  /* equivalent to:
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px; */
}
```

### Implicit vs Explicit Grid

Adding a **5th div** to a **2x2 grid** will land in a third row that isn't **explicitly** defined.

The **_implicit_** grid concept is how CSS automatically places grid items, even when we haven't _explicitly_ defined a layout for them.

- Size values established by our `grid-template-columns` `grid-template-rows` are **NOT carried over** into these **implicit** grid tracks.

Implicit guide track sizes are created using the `grid-auto-rows` and `grid-auto-columns` properties.

> If we want any new rows to stay the same value as our explicit row track sizes:

```css
.container {
  display: grid;
  /* explicit guide tracks */
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  /* implicit guide tracks */
  grid-auto-rows: 50px;
}
```

_Much less common option_: Add extra content **horizontally** (row) w/ `grid-auto-flow: column` property. Implicit track sizes are set w/ the `grid-auto-columns` property.

### Gap

Gaps between rows/columns are known as gutters / alleys.

There are `column-gap` and `row-gap` properties to control which axis receives a gap.

`gap` is shorthand for `column-gap` and `row-gap`.

### Grid Terminology

- **Grid track**: entire row or column of a the grid.
  - Defined exlicitly
- **Grid line**: dividing line that makes up the grid structure.
  - Created implicitly - after our tracks are defined.
- **Grid cell**: space between row/column grid lines.
  - Smallest unit of measurement in grid.
  - Default size of each child element
- **Grid area**: any space surrounded by 4 grid lines
  - ie: 2x1 group of cells, 2x6 group of cells

### Grid DevTools

To get grid badges in devtools, click on `(grid)` in the DOM tree. The `layout` tab also have useful settings for grid.

![Grid Badges](./img/devtools-grid-badges.png)

To test grid alignment properties:

![Grid Properties Testing](img/devtools-grid-properties.png)

### Grid Positioning: Columns/Rows

The following properties allow us to position grid items based on column grid and column row **lines**. This allows them to span across multiple lines.

```css
/* Grid ITEM Level */

grid-column: 1 / 6; /* grid-column: start / end */
grid-column-start: 1;
grid-column-end: 6;

grid-row: 1 / 3; /* grid-row: start / end; */
grid-row-start: 1;
grid-row-end: 3;
```

**Defaults**: If an item spans _one track_ (column/row), you can omit `grid-column-end`/`grid-column-row`.

#### Grid Positioning: Area (Shorthand)

Grid Area is another shorthand available, which includes all 4 positioning properties:

`grid-area: `

- `grid-row-start /`
- `grid-column-start /`
- `grid-row-end /`
- `grid-column-end;`

```css
#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
```

However, this can get confusing. Instead of using **grid lines**, we can create a visual layout of the grid _in words_. To do this, we give each item on the grid a name using `grid-area`:

```css
#living-room {
  grid-area: living-room;
}
```

This is possible for _all grid items_. We can then map out the whole structure with the **grid container**, using `grid-template-areas`.

```css
.container {
  display: inline-grid;
  grid-template: 40px 40px 40px 40px 40px / 40px 40px 40px 40px 40px;
  background-color: lightblue;

  grid-template-areas:
    "living-room living-room living-room living-room living-room"
    "living-room living-room living-room living-room living-room"
    "bedroom bedroom bathroom kitchen kitchen"
    "bedroom bedroom bathroom kitchen kitchen"
    "closet closet bathroom kitchen kitchen";
}
```

`.` can be used to indicate an **empty cell**.

### Negative Grid Lines

Negative grid lines can be used to go from right to left.

### Span Keyword

Instead of specifying a grid start/end lines by number, you can specify a start line and then _the number of tracks you'd like the area to span._

```css
.box2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}
```

### Grid Alignment

Verically aligning items on the **block axis**: `align-self`, `align-items`.

Horizontally justifying items on the **inline axis**: `justify-self` `justify-items`

- auto
- normal
- start
- end
- center
- stretch
- baseline
- first baseline
- last baseline

`margin-left/right: auto`

### [Grid Properties List](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-properties)

### Grid: Repeat Function

`repeat()` is a css function that allows us to define multiple values without repeating it over and over.

```css
.grid-container {
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(5, 150px);
}
```

### Grid: Fractional Units & Min-Content

`fr` is a grid specific unit of measurement that allows us to start making them _dynamic or flexible._

`fr` represents a **fraction of _the available space_** in a container.

- `2fr` would be twice as large as `1fr`

`min-content` is the smallest size an element can be without overflowing.

- in a `<p>`, `min-content` would be the size of the largest word within it.

### Grid: `Min()` & `Max()` Track Sizes

Using CSS functions `min()` and `max()` are useful in declaring track sizes in responsive designs:

```css
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}
```

### Grid: `minmax()` Dynamic Minimum & Maximum Sizes

`minmax()` is a grid-only CSS function. It can be used with:

- `grid-template-columns`
- `grid-template-rows`
- `grid-auto-columns`
- `grid-auto-rows`

`minmax()` accepts two values: minimum track size & maximum track size.

**Unlike `min()/max()`**, it _can_ make sense to use _2 static values_ for both arguments.

```css
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```

Dynamic sizing occurs when grid container changes size.

### Grid: `clamp()`

`clamp(minimum-size, ideal-size, maximum-size)`

Since clamp's purpose is to create _flexibly-size track with constraints_, we want to use:

- **Ideal value**: _Dyanmic_ measurement
- **Min/Max**: _Static_ measurement

```css
.simple-example {
  width: clamp(500px, 80%, 1000px);
}
```

### Grid: Auto-Fit & Auto-Fill

`auto-fill` & `auto-fit` functions return **“the largest possible positive integer”** without the grid items overflowing their container

The real magic of `auto-fill` and `auto-fit` is when we use `minmax()` as well.

With `minmax()`, we tell grid that we want _as many columns as possible_, while limiting each column's size without overflowing our grid.

```css
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

In the above example:

- `autofit()` returns **highest possible integer** without overflowing
- It needs grid width. default: window width, minus margins. (ie: `500px`)
- Browser determines how many grid column tracks could fit in that width.
- Using `minmax()`, it takes the minimum value `150px` to find out.
  - Grid will render 3x `150px` columns in the grid (3x `150px` = `450px`)
- Browser then resizes those 3x columns to fit the _maximum_ allowed value of `minmax()` -- `1fr`

**`auto-fill`** works the exact same way as `auto-fit`, except when there are not enough items to fill up an entire grid row _once_.

- `auto-fit` keeps grid items at their `MAX` size.
- `auto-fill` keeps grid items at their `MIN` size.

## Grid vs Flexbox

### Content First vs. Layout First Design

If your design originates with the content first, Flexbox is a good choice when starting with the smallest parts outwards.

If given a specific overall layout to adhere to (explicit placement of elements in **two dimensions**).

Ultimately, it's PERSONAL PREFERENCE.

## Transforms

Transforms:

- change appearance of elements
- **don't affect natural document flow**

Basics:

- Takes 1+ CSS transform functions as values
- Each ^ function takes own value: angle or number
- All elements can have transform, except for:
  - `<col>` `<colgroup>`
  - `<span>`, `<b>`, `<em>` (non-replaced inline elements)

### 2D Transforms

#### ** rotate(0.05turn) translate(50%, -50%);**

```css
.element {
  transform: rotate();
}

/* examples */
.rotate-by-deg {
  transform: rotate(45deg);
}

.rotate-by-rad {
  transform: rotate(-1rad);
}

.rotate-by-turn {
  transform: rotate(0.3turn);
}
```

#### **Scale**

```css
.element {
  transform: scaleX();
  transform: scaleY();
  transform: scale();
}

/* examples */
.scaleX {
  transform: scaleX(0.25);
}

.scaleY {
  transform: scaleY(1.5);
}

.scaleXY {
  transform: scale(0.25, 1.5);
}

.scale {
  transform: scale(0.5);
}
```

#### **Skew**

Skew: `| |` to `\ \`

```css
.element {
  transform: skewX();
  transform: skewY();
  transform: skew();
}

/* examples */
.skewX {
  transform: skewX(45deg);
}

.skewY {
  transform: skewY(-0.5rad);
}

.skewXY {
  transform: skew(45deg, -0.5rad);
}

.skew {
  /* single value behaves the same as skewX */
  transform: skew(45deg);
}
```

#### **Translate**

```css
.element {
  transform: translateX();
  transform: translateY();
  transform: translate();
}

/* examples */
.translateX {
  transform: translateX(20px);
}

.translateY {
  /* percent values are of the element's width */
  transform: translateY(-33%);
}

.translateXY {
  transform: translate(20px, -33%);
}
```

#### Chaining Multiple Transforms

Transforms are executed from left > right.

```html
<div class="red-box"></div>
<div class="blue-box"></div>
```

```css
.red-box,
.blue-box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.red-box {
  background: red;
  transform: rotate(45deg) translate(200%);
}

.blue-box {
  background: blue;
  transform: translate(200%) rotate(45deg);
}
```

### 3D Transforms

`perspective` is required to work on a 3d plane:

- `rotate`, `scale` and `translate` work on a 3d plane as well.

#### Perspective

[How perspective works](https://css-tricks.com/how-css-perspective-works/)

Setting a perspective value: object should render as if we're viewing it from a specific distance on the z-axis.

- Perspective must be declared 1st w/ multiple transform functions

```css
.element {
  transform: perspective();
}
```

**Perspective Rotate:**

```css
.element {
  transform: rotateX();
  transform: rotateY();
  transform: rotateZ();
  transform: rotate3d();
}

/* examples */
.rotateX {
  transform: rotateX(60deg);
}

.rotateY {
  transform: rotateY(60deg);
}

.rotateZ {
  transform: rotateZ(60deg);
}

.rotate3d {
  transform: rotate3d(x, y, z, a);
}
```

**Perspective Scale:**

```css
.element {
  transform: scaleZ();
  transform: scale3d();
}
```

**Perspective Translate:**

```css
.element {
  transform: translateZ();
  transform: translate3d();
}
```

`translateZ()` & `perspective`: create illusion of 3d distance

**Matrix** (uncommonly used):

- Combines all transform functions into one

### Pixel Pipeline

Most devices: 60fps

- Screens refresh 60 times a second
- Animations/transitions/scrolling: browser needs to match ^ refresh rate
- Each frame: budget of 16ms (1 second / 60)
- Brower has maintenance to do: work needs to finish in 10ms

If you fail to meet the budget, frame rate drops & content judders.

- ie: **jank**

Pixel Pipeline: 5 areas where you have the most control

- **JavaScript / CSS animations/transitions / Web Animations API**
- **Style calculations**: each element > which rules to apply where & then applied
- **Layout**: calculates how much space is taken up & where on screen, how elements affect one another
- **Paint**: filling in pixels, drawing text, colors, images, borders, etc. **on layers**
- **Composite**: when multiple layers are drawn ^, they need to be drawn in the correct order. (overlapping)

The type of changes made affect the pixel pipeline:

1. Layout: element geometry, height, width, etc.
   1. browser has to check all other elements
   2. JS > Style > Layout > Paint > Composite
2. Paint only: background image, text color, shadows
   1. browser skips _Layout_ step
   2. JS > Style > Paint > Composite
3. **Animations/scrolling**
   1. **Skips layout & paint**
   2. **JS > Style > Composite**

### Benefits of Transforms

Because of the Pixel Pipeline, transform property is great.

- It occurs during **composition**
- Can be hardware-accelerated (device's GPU)

### [Most Common Uses of Transform](https://www.joshwcomeau.com/css/transforms/)

- Translate
  - move item around
  - close button outside of modal
- Scale
  - grow or shrink an element
  - old time tv: `transform: scale(0.5, 0);` (shrinks width 50%, height 100%)
- Rotate
  - rotate elements
  - `0.2turn` for percentages (of 360 degrees)
- Skew (seldomly used)

### [3D Transforms MDN](https://www.w3schools.com/css/css3_3dtransforms.asp)

## Transitions

Transitions: change an element's **initial** & **end** state.

- Hover effects

`transition` is a shorthand property for:

- `transition-property`
  - _what css property will be transitioned_
- `transition-duration`
  - _how long it takes_
- `transition-timing-function`
  - _speed of transition_
- `transition-delay`
  - _delay before transition starts_

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}

/* example */

button {
  /* ... other CSS properties ... */
  background-color: white;
  transition: background-color 1s ease-out 0.25s;
}

button:hover {
  background-color: black;
}
```

### Performance

Performance: Generally _not an issue_. There are a few gotchas:

```css
div {
  width: 100px;
  height: 100px;
  transition: transform 2s 1s;
}

div:hover {
  transform: rotate(180deg);
}
```

- Stacking contexts **causes nested elements to repaint every time the parent does.**
- Restrict animations to **opacity** & **transform** (for performance reasons)
  - Things like **background-color** are expensive operations

### [Transitions & JS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#javascript_examples)

```js
const f = document.getElementById("foo");
document.addEventListener(
  "click",
  (ev) => {
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
  },
  false,
);
```

```css
.ball {
  border-radius: 25px;
  width: 50px;
  height: 50px;
  background: #c00;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s;
}
```

### Detecting Start & Stop of Transition w/ JS

```js
el.addEventListener("transitionend", updateTransition, true);
// before any delay
el.addEventListener("transitionrun", signalStart, true);
// after any delay
el.addEventListener("transitionstart", signalStart, true);
```

### [High Performance Animations](https://web.dev/animations-guide/)

### [Debugging Layout Repaint Issues](https://dzhavat.github.io/2021/02/18/debugging-layout-repaint-issues-triggered-by-css-transition.html)

- What exactly am I animating?
- Could it be "layers"?
  - "Layer borders" in Edge DevTools
- What about "stacking context"?
  - "3D View" panel in Edge DevTools

### Stacking Context

- Root `<html>`
- `z-index` other than `auto` AND
  - `position: relative/absolute`
  - `flex` child w/ `z-index`
  - `grid` child w/ `z-index`
- `position: fixed/sticky`
- `opacity` other than `1`
- `mix-blend-mode` other than normal
- `transform`
- `filter`
- `backdrop-filter`
- `perspective`
- `clip-path`
- `mask / mask-image / mask-border`
- `isolation`
- `will-change`
- `contain` value layout, paint, composite:
  - `contain: strict`
  - `contain: content`

### [Cubic Bezier Generator](https://www.cssportal.com/css-cubic-bezier-generator/)

## Keyframes (Animations)

- Transitions: animate element, one state, to another

  - Can loop, but weren't meant to
  - Animations: were designed to explicitly enable loop

- Transitions: need a trigger: hover, focus, toggling classes

  - Animations: do NOT need a trigger

- Transitions: not as flexible as animations
  - Transitions: straight line, point a to point b

### Animation Properties

```css
#ball {
  /* ... other CSS properties ... */
  animation-duration: 2s;
  animation-name: change-color; /* @keyframes */
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

### Keyframes

```css
@keyframes change-color {
  from {
    background-color: red;
  }

  to {
    background-color: green;
  }
}
```

Keyframes at-rule (single cycle - not a complete loop)

- **from**: alias for 0% (at zero seconds)
- **to**: alias for 100% (at 2 seconds/animation-duration value)

Shorthand Notation:

```css
#ball {
  /* ... other CSS properties ... */
  background-color: red;
  animation: 2s change-color infinite alternate;
}

@keyframes change-color {
  from {
    background-color: red;
  }

  50% {
    width: 200px;
    height: 200px;
    background-color: blue;
  }

  to {
    background-color: green;
  }
}
```

- 50% (percentage of animation-duration)
  - 50% of 1s duration: 0.5s
- Only `0/100%` can use `from/to` aliases

### Chaining Animations

```css
div {
  /* unique durations/iteration counts */
  animation-name: fadeInOut, moveLeft300px, bounce;
  animation-duration: 2.5s, 5s, 1s;
  animation-iteration-count: 2, 1, 5;

  /* all 3 animations share duration/count */
  animation-name: fadeInOut, moveLeft300px, bounce;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
```

### Walkthrough

- Back & forth: `animation-direction: alternate;`
- Loops: `animation-iteration-count: infinite`

Animate drop down menu:

```css
.container {
  /* offscreen, above viewport */
  transform: translate(-50%, -75vh);
  /* first moves the container in position, then fades out after */
  transition: transform 0.5s ease-in-out, opacity 0.5s ease;
}

.container
```
