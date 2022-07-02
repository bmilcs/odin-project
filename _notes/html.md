# HTML
* Is a language that determines how documents & web pages are displayed
* Building blocks of any web site
	
### CSS		
* Style sheet language, how document written in HTML is styled
* Font styles, colors, layout, responsive features

### JAVASCRIPT 
* Allows you change CSS & HTML elements after site is loaded.
* Interactive, engaging for users

# HTML Fundamentals

## TAGS	
* Used to create ELEMENTS `<p> </p>` 
* Important to use the correct tags for content.
* Determines rank in search engines.
* Affects accessibility to users who rely on assistive technologies
  * Screen readers

## BOILERPLATE

All HTML docs have the same basic structure or boilerplate.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

### The DOCTYPE
* Declaration, tells browser what version of HTML to render document, default: HTML5 

	`<!DOCTYPE html>`

### HTML element

* Root element of document
* Becomes important when adding Javascript

``` html
<!DOCTYPE html>
<html lang="en">
</html>
```	

* Lang attribute: improves accessibility

### HEAD element
* Important meta-information about webpages
* Should NOT contain elements that display anything

### CHARSET META element
* Always have charset encoding in `<head>`
* Ensures web page will display symbols & characters of different languages
* `UTF-8` : Unicode Transformation Format 8-bit
  * `Unicode` industry standard used for consistency of character encoding
  * Most popular HTML character encoding since 2008
  * More than 90% of all websites use UTF-8
  * Supports many languags
  * Compatible with ASCII
  * Natively used by XML
  * Uses less space than other Unicode encodings

### TITLE element
* Always have human-readable title
* Displays in web browser tab
* Defaults to filename

``` html
<title>My First Webpage</title>
```

### BODY element
* Final element needed to complete boilerplate
* Contains text, images, lists, etc.

# Working with Text

## Paragraphs

`<p>My first paragraph</p>`

* Creates a new line after each paragraph element

## Headings

`<h1><h1>` through `<h6></h6>`
* Display in bold, larger font
* Using correct level of heading is important to provide hierachy to content
* `<h1>` for heading of overall page
* Lower level headings for content of smaller sections of page

## Strong Element

`<strong>` makes text bold
* Also semantically marks text as important
* Affects screen readers
* Affects tone of voice 
* Used in combination with other elements
`<p>My name is <strong>Bryan Miller</strong></p>`

## Em Element

`<em>` makes text italic
* Also places emphasis on text
* Affects screen readers

## Nesting & Indentation

* Elements within other elements are indented
  * Aka nesting elements
* Creates parent and child relationship
* Siblings: Elements at the same level

## HTML Comments

`<!-- this is a comment -->`
* Comment on our code for other developers and our future selves
* Not visible to the browser

## Lists

[Shay Howe's HTML list tutorial](https://learn.shayhowe.com/html-css/creating-lists/)

## Unordered Lists

Unordered lists are created with the `<ul>` tag, and each item within that list is created with `<li>`

``` html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Ordered Lists

Ordered lists are created with the `<ol>` tag.

``` html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

## Description Lists

Dictionary-like list used to outline multiple items and their descriptions, such as a glossary.

``` html
<dl>
  <dt>word</dt>
  <dd>definition</dd>
</dl>
```

## Attributes

* Give additional information to an HTML element
* Goes in element's opening tag
* Consists of two parts: name & value


## Links & Images

### Anchor Elements

To create a link in HTML you must use the `<a>` tag. Without an `attribute`, the `<a>` tag will go nowhere.

``` html
<a href="https://www.bmilcs.com">Click me</a>
```

The `href` attribute is a `hyperlink reference`.

Anchor tags can link to any resource on the internet, not just other HTML documents.

* Videos
* PDF files
* Images

Generally there are 2 types of links:

### Absolute Links

Must contain a protocol and a domain.

`protocol://domain/path`

`https://www.bmilcs.com/home`

In the above example, `https` is the protocol and the domain is `bmilcs.com`

### Relative Links

Links to other pages within a website are called `relative links`.

* Doesn't contain the domain
* Relative to the `index` file

`<a href="about.html">About</a>`
`<a href="pages/about.html">About</a>`

`pages/about.html` can cause unexpected issues. Adding `./` before the link will usually prevent them.

`./` starts searching in your `current` directory.

## Images

Images are displayed with the `<img>` tag. The `<img>` tag is *empty*, meaning it doesn't have a *closing tag*.

* Embedding an image requires the `src` attribute.

`<img src="images/dog.jpg">`

The four main image formats on the web are:

* JPG
  * Handle large color pallettes without huge file sizes
  * Used for photos/images with lots of gradients
  * NO transparency
* GIF
  * Simple animations
  * Limited in color palette
  * Transparency is binary: Full or Opaque, no semi-opaque pixels
* PNG
  * Great for non-animated, non-photo
  * Larger than equivalent JPG for photos
  * Opacity is not an issue
  * Don't have color palette limitations
  * Best use: icons, technical diagrams, logos, etc.
* SVG
  * Vector-based graphics format
  * Scale up/down to any dimension without loss of quality
  * Great for responsive designs
  * Same use as PNG, should be used whenever you can.
  * Issue: for them to display consistently across browsers, you have to convert text fields to outlines using an image editor.
    * If image contains a lot of text, file size will be big

## Alt Attribute

Every image should contain the `alt` (alternative text) attribute.

* Used to describe an image
* Used in place of the image **if it can't be loaded**
* Used with screen readers to describe image for the visually impaired

`<img src="images/dog.jpg" alt="A picture of a dog">

## Parent Directories

To reference paths one level out of the current directory, you need to use `../`.

If you want to reference `/images/dog.jpg` from `/pages/about.html`:

`<img src="../images/dog.jpg">

## Link Targets

Define where to display a page when user clicks a link.

* Default: Replace current page w/ new one
* `target="_blank"` specfies a new tab

## Naming Conventions

Best practices:

* All lower case
* Hyphens `-` instead of spaces