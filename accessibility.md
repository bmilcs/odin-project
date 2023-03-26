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

> [Importance of headings/landmarks](https://www.youtube.com/watch?v=vAAzdi1xuUY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=20) > [Landmarks & HTML Sectioning Elements](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/HTML5.html)

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

## Meaningful Text

Meaningful Text: users should be able to immediately understand what text means without any surrounding context.

### Links

> Examples

```html
<!-- Example 1: Where's "here"? -->
<a href="...">Click here</a> to start your career in web development!

<!-- Example 2: I love that place! -->
Visit <a href="...">The Odin Project</a> to start your career in web
development!
```

Users who use a screen reader:

- Can navigate between each element of a specific type
- If looping through links, `<a>Click here</a>` provides no context

Example #2: `<a>The Odin Project</a>`:

- Makes sense for ALL users
- Screen readers announce: "The Odin Project, link"

Rules for adding links:

- Make text content indicate _where link redirects to_ & make it _brief (< 100 characters)_
- If opens/downloads a file, include file type & file size
- If opens in a new tab `target="_blank"`, indicate it to the user:

```html
<!-- Example 1: Now the user is aware that this link will open or download a PDF file. -->
<a href="...">2021 Sign Up Statistics (PDF, 1MB)</a>

<!-- Example 2: And now the user knows this link opens in a new tab! -->
<a href="...">GitHub (opens in new tab)</a>
```

**TIP**: **Read the link out loud.**

### Forms

Provide meaningful errors to users filling out forms.

```html
<!-- Example 1: Huh? -->
<div class="input-error">Error: Invalid input.</div>

<!-- Example 2: That makes more sense. -->
<div class="input-error">Error: Email is invalid.</div>

<!-- Example 3: Even better! -->
<div class="input-error">
  Error: 'JohnSmith@@test.com' is not valid. Example of a valid email:
  example@yourdomain.com.
</div>
```

Questions to ask:

- What input is invalid?
- Why is it invalid?
- How can I fix it?

Provide meaningful text via instructions:

- Password requirements: letters, numbers, symbols
- Place alongside input element
- Global instructions be placed at the top of the form
  - `* indicates a required field`
- Field requirements be placed in/alongside the label
  - `Name (required)`

[Usable & Accessible Form Validation & Error Recovery](https://webaim.org/techniques/formvalidation/)

### Alternative Text

Image elements have the `alt` attr.

```html
<!-- Example 1 -->
<img src="..." alt="" />

<!-- Example 2 -->
<img src="..." alt="Odin" />
```

Both examples are valid:

- `alt=""` = **no meaningful text, purely decorative, not important**
- `alt="Odin"` = announced "Odin, graphic", alerts the user what the image is of

## WAI-ARIA

WAI-ARIA is a specification that stands for:

- Web
- Accessibility
- Initiative's
- Accessible
- Rich
- Internet
- Application

Purpose: ARIA makes web content more accessible **when native html is unable to do so**

- Fills in gaps left by native HTML
- ARIA **can modify the semantics or context** of an element.

ARIA:

- **CAN'T** modify element appearance
- **CAN'T** modify element behavior
- **CAN'T** add focusability
- **CAN'T** add keyboard event handling
  - Acronym: ABFK

### Five Rules of ARIA

ARIA can be extremely powerful, but equally as dangerous if used incorrectly:

1. Use native elements & attributes over ARIA when possible
2. Never change native semantics, unless you have no choice
3. All interactive ARIA controls must be usable with a keyboard.
4. On focusable elements, NEVER use `role='presentation'` or `aria-hidden='true'`
5. All interactive elements must have an accessible name

### Accessibility Tree

Accessibility Tree is based on the DOM.

- DOM: nodes & objects that make up a web page
- Accessibility Tree: only accessibility related info, used by assistive tech

ARIA modifies properties of objects that make up the accessibility tree.

Properties:

- `Name`: "accessible name"
  - is announced to users
  - separates elements of same type from one another
  - set by native labels: `<label>`, `<alt>`
- `Description`: announced in addition to its ^ Name

### ARIA Labels

ARIA Labels: help assistive tech users understand context on a page

- Overrides native labels
- Or provides additional descriptive text
- Unlike `<label>`
  - ARIA Labels = not limited to a few select elements

`id` attribute:

- void using it when NOT necessary
- Many ARIA attributes **require** `id`

When using ARIA attributes:

- provide `id` to one element
- pass `id` value to another element's ARIA attr value
  - similar to `<label>` & `<input>`

### `aria-label`

- overrides native labels
- modifies name property in accessibility tree
- best used **when elements don't have a native label**

When adding an `aria-label`:

- pass in string value
- becomes element's accessible name
- doesn't work on every HTML element
  - ie: no effect on `<div>` & `<span>`

> Common use case: "close" button, menus & modals

```html
<!-- announces "X, button" -->
<button type="button">X</button>

<!-- announces: "Close menu, button" -->
<button type="button" aria-label="Close menu">X</button>
```

Screen reader announcing **"X, button"** doesn't make sense to the user. However, **"Close menu, button"** does.

> Another use case: landmark elements

```html
<nav aria-label="main navigation">...</nav>
```

Screen reader reads **"Main navigation, navigation landmark"**

- Multiple nav elements could be given a different `aria-label`
- Separate them from one another
- More understandable for screen reader users

Some words **may be mispronounced** by screen readers:

- DON'T USE `aria-label` to change how a word is phonetically pronounced
- May fix how a word is announced by a screen reader
- Could make no sense when announced by _other assistive technologies_
  - ie: **braille reader**

### `aria-labelledby`

- Overrides native labels
- Overrides `aria-label`

Elements with a `aria-labelledby` have it's name changed by id'ed element passed in:

- to a concatenated string
- OR text contents of `alt` attr (those w/ `id` passed in)

Example:

```html
<!-- Here's the labelling element -->
<h2 id="label">Shirts</h2>

<!-- And here's the labelled element. Note the order of the ID references passed in -->
<button type="button" id="shop-btn" aria-labelledby="label shop-btn">
  Shop Now
</button>
```

^ gets announced as: "Shirts, Shop Now, button"

- `label` id: Shirts
- `shop-btn` id: Shop Now
- Element type itself: Button

Benefits:

- Makes 'shop now' buttons unique
- Even if visually hidden (`hidden` attr or w/ CSS), it will still modify the accessible name of the labeled element

Works similarly to `<label>`, except:

- `aria-labelledby` doesn't have same event handling by default
- To achieve event handling, add JS

```html
<!-- Clicking the <label> element gives focus to the input element -->
<label for="name">Name:</label>
<input id="name" type="text" />

<!-- Clicking the <div> element won't give focus to the input element -->
<div id="label">Name:</div>
<input type="text" aria-labelledby="label" />
```

### `aria-describedby`

- Modifies description property in accessibility tree
- Similar to `aria-labelledby`: pass in `id` of other elements
- Passed in `id` elements can be visually hidden

```html
<label
  >Password:
  <input type="password" aria-describedby="password-requirements" />
</label>

<!-- Meaningful text + ARIA! -->
<span id="password-requirements"
  >Password must be at least 10 characters long.</span
>
```

When `<input>` receives focus, a screen reader announces:

- "Password, edit protected, password must be at least ten characters long"
- ^ immediately notifies screen reader user **any time the input receives focus**

### Hidden Content From The Accessibility Tree

`aria-hidden` is similar to visually hiding elements with:

- `hidden`
- `display`
- `visibility`

However:

- `aria-hidden` => element is visible to sighted users.

```html
<!-- #1 "Add add book, button" -->
<button type="button">
  <span class="material-icons">add</span>
  Add Book
</button>

<!-- #2 "Add book, button" -->
<button type="button">
  <span class="material-icons" aria-hidden="true">add</span>
  Add Book
</button>
```

^ Visually, both look identical to sighted users

- #1: Announced as "Add add book, button"
  - `<span>` & `<button>` text content are concatenated
- #2: Announced as "Add book, button"
  - `<span>` has `aria-hidden="true"`

\* **ALL children become hidden as well** (Be careful)

- `aria-hidden="false"` has no effect if parent has `aria-hidden="true"`

**Never add `aria-hidden="false"` to focusable elements!**

- Element receives focus & nothing announced
- Breaks screen reader / keyboard nav

### [ARIA Roles](https://www.a11yproject.com/posts/an-indepth-guide-to-aria-roles/#landmark-roles)

ARIA Roles are used to describe elements:

- May not exist within HTML
- May not have full cross-browser support
- May have implementation gaps (screen readers / assistive tech)

IE: Roles are useful when native HTML semantics are not well understood in legacy user agents

Examples:

- `role="toolbar"`
- `role="tooltip"`

```html
<!-- toolbar -->
<div role="toolbar">
  <div class="text-characteristics">
    <button>Bold</button>
    <button>Italic</button>
    <button>Underline</button>
  </div>
</div>

<!-- tooltip -->
<button aria-describedby="notifications-desc">Notifications</button>
<div role="tooltip" id="notifications-desc">View and manage notifications</div>
```

Landmarks:

- `banner` for `<header>`
- `complementary` for `<aside>`
- `contentinfo` for `<footer>`

Navigation:

- `navigation` for `<nav>`

Search:

- `search` for `form`

Live Region:

- `alert` for error messages, etc. `<div role='alert'>`
- should NOT be focusable

**Widgets Roles:**

Tabs role:

- `tablist`
- `tab`
- `tabpanel`

Example:

```html
<div>
  <div role="tablist" aria-label="Fruits">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="apples-tab"
      id="apples"
    >
      Apples
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="oranges-tab"
      id="oranges"
    >
      Oranges
    </button>
  </div>

  <div role="tabpanel" id="apples-tab" aria-labelledby="apples">
    <p>Apples tab content</p>
  </div>

  <div role="tabpanel" id="oranges-tab" aria-labelledby="oranges">
    <p>Oranges tab content</p>
  </div>
</div>
```

**Window Roles:**

Alert Dialog:

- `alertdialog` alert message / focus is set to element inside of it

```html
<div role="alertdialog">
  <h2>Confirmation</h2>
  <p>Are you sure you want to discard all of your notes?</p>
  <div>
    <button type="button">No</button>
    <button type="button">Yes</button>
  </div>
</div>
```

Dialog:

- `dialog` can be modal or not

```html
<div role="dialog" aria-labelledby="dialog-label">
  <h2 id="dialog-label">Dialog Title</h2>
  <p>This is the dialog content.</p>

  <button>Close Dialog</button>
</div>
```
