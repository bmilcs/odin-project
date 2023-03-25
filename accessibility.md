# Web Accessibility

Accessibility: **"a11y"**

- 11 letters between A & Y

## What is Web Accessibility?

Web Accessibility: Websites, tools & tech are designed and developed so that...

- **People w/ disabilities & other limitations can use them with as few barriers as possible.**

**Disability types**:

- Auditory
- Physical/motor
- Cognitive
- Visual
- Permanent: blind/deaf
- Temporary: broken arm
- Elderly: changing abilities

**Situational limitations**:

- Phone, outdoors, bright day
- One handed operation, multitasking
- Slow internet
- Expensive bandwidth

^ All are important to keep in mind.

## Why Web Accessibility Matters

Multi-story Building with no elevator

- Some people: annoyance
- Others: impossible or very difficult
- Wheelchair users: stuck on 1st floor

^ Building = **Your website**

^ Elevator = **Accessibility features & tools**

- Develop sites for users
- Needs to be useable by all
  - Disabilities
  - Situational limitations
  - Non-technical people

## Solutions

- Keyboard navigation
- Video captions
- Colors / Good Contrast
- Customizable text (size, spacing, font, colors)
- Clear Layout, Design, Styling, Navigation
- Speech recognition (Voice-To-Text)
- Understandable Content
- Large Links, Buttons, Controls
- Notifications & Feedback

## Business Case for Accessibility

- Drives Innovation: often solves unanticipated problems
- Enhance Your Brand: Diversity/inclusion
- Extend Market Reach: Disabled Global Market 1+ Billion People ($6 Trillion) & Improves online experience for all
- Minimize Legal Risk: Prevent lawsuits

## Web Content Accessibility Guides (WCAG)

WCAG exists to create a shared standard for web accessibility.

### Four Principles

1. **Perceivable**
   1. Must understand info & interfaces
2. **Operable**
   1. Must be able to operate interfaces & navigation
   2. Drop-down menu _w/ keyboard nav_
3. **Understandable**
   1. Info must be understandable
   2. Form submit, Error: "Error 113: Bad data" = unclear
4. **Robust**
   1. Assistive technology friendly

### Conformance Levels

WCAG has 3 conformance levels:

1. **Level A**
   1. Essential support (minimal level)
2. **Level AA**
   1. Ideal support (many strive for)
3. **Level AAA**
   1. Specialized support (not recommended for entire sites to meet in full)
   2. Some content = impossible to reach this level

### Before Implementing Accessibility

- Goal of these lessons = introduce _some_ of the common/simpler concepts.
- No site is 100% accessible
- First few steps matters as much as those that follow
- Any minor addition could be a huge improvement for more users than you realize

### [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)

## Semantic HTML

Generic containers: `div` and `span`

- Not most a11y friendly elements to use

### Importance of Semantics

Semantics are important because:

- _Assistive technologies_
- Provides meaning & context

Differences:

- `<p>` `<div>` `<span>` **= no context**
- `<button>` **= have meaning & announced, so users can perceive & operate them**

> When no context is provided, some users cannot perceive, operate or understand.

Example:

> Clickable areas using `<div>` or `<span>`

```html
<!-- These are buttons... right? -->
<div class="button-container">
  <div class="rock">Rock</div>
  <div class="paper">Paper</div>
  <div class="scissors">Scissors</div>
</div>
```

^ Screen readers have no idea what these elements mean or that they're clickable.

> Semantic HTML to the rescue:

```html
<!-- Okay, these are *definitely* buttons -->
<div class="button-container">
  <button class="rock">Rock</button>
  <button class="paper">Paper</button>
  <button class="scissors">Scissors</button>
</div>
```

### Using Semantics Correctly

What is _your intent_ for users?

What context you need to provide to them?

- If user is meant to **click on something**, use a `<button>`
  - Users know they can interact w/ element by clicking
- If user is meant to **sort data**, use a `<table>`
  - Allow users to easily navigate/understand data
- If you use an **input element**, always create a relationship between `<label>` and it.
  - Labels provide context as to what the input means
  - Labels increase clickable area

```html
<!-- Useful when you need the input itself to have an ID -->
<label for="name">Name</label>
<input type="text" id="name" />

<!-- Look, Ma, no ID! -->
<label>
  Name
  <input type="text" />
</label>
```

- Inputs should always have a `type`
  - `type="text"` = address field, name
  - `type="email"` / `type="tel"`
    - Provide numerical keyboards
- Lists, always use a list element: `<ol>` `<ul>` `<dl>`
  - Lets users know its a list & how many items are in it

### Headings & Landmarks

- **Headings** (`<h1>` through `<h6>`): act as headings for sections of a page
- **Landmarks**: act as regions of a page

Landmark Regions:

- `<aside>`
- `<footer>`
- `<form>`
- `<header>`
- `<main>`
- `<nav>`
- `<section>`

Landmarks & headings:

- provide assistive technology users a more operable and understandable page:
  - have their roles announced to provide context
  - help navigate the page
    - screen readers: keyboard navigation commands / opening menu

> [Importance of headings/landmarks](https://www.youtube.com/watch?v=vAAzdi1xuUY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=20)

> [Landmarks & HTML Sectioning Elements](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html)

## Accessible Colors

Color contrast ratio:

- 21:1 - Highest: black text, white background
- 1:1 - Lowest: white text & background

Two conformance levels for contrast ratios:

1. Normal text:
   1. Regular: < 24px
   2. Bold: < 18.66px
2. Large text:
   1. Regular: > 24px
   2. Bold: > 18.66px

**Level AA** (minimum contrast)

- 4.5:1 - Normal Text
- 3:1 - Large Text

**Level AAA** (enhanced contrast):

- 7:1 - Normal Text
- 4.5:1 - Large Text

**Exceptions to conformance levels:**

- Incidental text within an image
- Inactive/disabled user interface component
  - Disabled button / lowered opacity
- Logo or brand name text

Checking Contrast:

- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools
  - Element picker & hover over
  - Color picker for color property under styles

## Conveying Information

**Color blindness**: _Never use color to convey information_

Required fields: red **with asterisk \***

## Keyboard Navigation

### Focus

We need to make **all interactive elements** focusable & have event handlers.

Another issue w/ `<div>` `<span>`:

- not focusable
- don't have any event handling

> Here's how we make the Rock Paper Scissors example keyboard friendly:

```html
<!-- The `tabindex` attribute makes the `<div>` elements focusable. -->
<div class="button-container">
  <div class="rock button" tabindex="0">Rock</div>
  <div class="paper button" tabindex="0">Paper</div>
  <div class="scissors button" tabindex="0">Scissors</div>
</div>
```

```js
// We also need to manually add in event handling for both mouse and keyboard events.
const buttons = document.querySelectorAll(".button");

function nameAlerter(e) {
  if (e.type === "click" || e.key === " " || e.key === "Enter") {
    alert(e.target.textContent);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", nameAlerter);
  button.addEventListener("keydown", nameAlerter);
});
```

**However**, this makes it _less understandable_ for a screen reader.

Using `<button>`:

- Provides context
- Focusable
- Event handling by default

Pressing space/enter key triggers a click.

### Focus Styles

Focusable elements need to indicate that they're focused:

- Leave default style
- Create custom focus styles
  - `transform: scale()`
  - Outlines to a link
  - Increase border size

No focus styles = impossible for keyboard users to navigate.

### Tab Order

**Tab order**: what elements receive focus when pressing tab key.

By default, the order is the same as order of elements in the HTML.

```html
<!-- 1ST TAB -->
<div tabindex="0">This is the first element listed in the HTML.</div>

<!-- 2ND TAB -->
<div tabindex="0">This is the second element listed in the HTML.</div>
```

Sometimes we need to change the order of elements using css or tab order via `tabindex`.

- Make sure: **Tab Order = Visual order of elements**

### Hidden Content

Sometimes we need to **hide content** until an event occurs.

- Button click => Open Menu Or Modal Box

Hidden content must be:

- Visually hidden
- **Hidden from assistive technologies**

If not hidden, keyboard users can tab into things off the screen & lose track of visual focus on the page.

**`tabindex="-1"`** (not so good)

- Prevents element from receiving focus via tab
- However, **assistive technologies still have access to & can announce this hidden content**

**Best solutions** (removes tab order & prevents assistive tech)

- `diplay: none`
- `visibility: hidden`
