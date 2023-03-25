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
