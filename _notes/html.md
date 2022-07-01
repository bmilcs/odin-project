# HTML
* Is a language that determines how documents & web pages are displayed
* Building blocks of any web site
	
### CSS		
* Style sheet language, how document written in HTML is styled
* Font styles, colors, layout, responsive features

### JAVASCRIPT 
* Allows you change CSS & HTML elements after site is loaded.
* Interactive, engaging for users

# HTML Breakdown

## TAGS	
* used to create ELEMENTS `<p> </p>` 
* Important to use correct tags for content.
* Determines rank in search engines.
* Accessibility to users who rely on assistive technologies
* Screen readers


## BOILERPLATE

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
* Always have charset encoding in <head>
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
* Lower level headings for cont of smaller sections of page

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

## HTML Comments

`<!-- this is a comment -->`
* Commenton our code for other developers and future selves

