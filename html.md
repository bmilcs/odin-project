# HTML

**HTML** is a language that determines how documents & web pages are displayed. It is
the building blocks of any web site.

## Tags

**Tags** (`<p>`) are used to create **ELEMENTS** `<p>Element</p>`

It is important to use the correct tags for content, because they:

- Determine web site ranking in search engines.
- Affect accessibility to users who rely on assistive technologies, such as screen readers

## HTML Boilerplate

All HTML documents have the same basic structure or _boilerplate_.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

**DOCTYPE declaration** (`<!DOCTYPE>`) tells browser what version of HTML to render document in and the default is HTML5.

```html
<!DOCTYPE html>
```

**HTML element** (`<html>`) is the root element of the document. It becomes important when _adding Javascript._

**Language attribute** (`lang`) of the html element improves accessibility.

```html
<!DOCTYPE html>
<html lang="en"></html>
```

**HEAD element** (`<head>`) contains important meta-information about webpages.

> It should _NOT contain elements that display things on a web page_.

**CHARSET META element** (`<meta charset="" />`) goes inside the `<head>` element and it sets the charset encoding. This ensures that the web page will display symbols & characters of different languages.

- _Unicode Transformation Format 8-bit_ or `UTF-8` is the most popular HTML character encoding since 2008.
- `Unicode` is the industry standard used for _consistency of character encoding_
- More than 90% of all websites use `UTF-8`
- Supports many languages, is compatible with ASCII, and is natively used by XML
- Uses less space than other Unicode encodings

```html
<head>
  <meta charset="UTF-8" />
  ...
</head>
```

**TITLE element** (`<title>`) is also placed in the `<head>` element and it should always contain a **human-readable title**. This title displays in **web browser tab.**

- Defaults to filename of HTML document.

```html
<head>
  ...
  <title>My First Webpage</title>
</head>
```

**BODY element** (`<body>`) is the final element needed to complete boilerplate and it _contains all content that is displayed to users_

- Text, images, lists, etc.

```html
<body>
  <p>Content of page</p>
</body>
```

## Working with Text

**Paragraphs** (`<p>`) create a new line after each paragraph element

```html
<p>My first paragraph</p>
```

**Headings** (`<h1>`) are displayed in bold, larger font.

- They range from `<h1>` through `<h6>`
- Using correct level of heading is important to provide hierarchy to content
- `<h1>` for heading of overall page
- Lower level headings for content of smaller sections of page

```html
<h1>Biggest</h1>
...
<h6>Smallest</h6>
```

**Strong Element** (`<strong>`) makes text **bold**.

- Semantically marks text as important
- Affects screen readers
- Affects tone of voice
- Used in combination with other elements

```html
<p>My name is <strong>Bryan Miller</strong></p>
```

**Em Element** (`<em>`) makes text _italic_.

- Places emphasis on text
- Affects screen readers

```html
<p>My name is <em>Bryan Miller</em></p>
```

## Nesting & Indentation

Elements within other elements are indented, and are known as **nested elements.**

- Creates parent and child relationship
- Siblings: Elements at the same level

## HTML Comments

**HTML Comments** allow us to comment on our code for other developers and our future selves. This is to provide context about something that may be unclear in the code.

- Not visible to the browser

```html
<!-- THIS IS A COMMENT -->
<p>This is not a comment</p>
```

## Lists

[Shay Howe's HTML list tutorial](https://learn.shayhowe.com/html-css/creating-lists/)

## Unordered Lists

Unordered lists are created with the `<ul>` tag, and each item within that list is created with `<li>`

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Ordered Lists

Ordered lists are created with the `<ol>` tag.

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

## Description Lists

Dictionary-like list used to outline multiple items and their descriptions, such as a glossary. The `<dl>` tag creates the list, the `<dt>` tag creates a term, and the `<dd>` creates the definition.

```html
<dl>
  <dt>word</dt>
  <dd>definition</dd>
</dl>
```

## Attributes

Attributes give additional information to an HTML element.

- Go inside an element's opening tag
- Consists of two parts: name & value

## Links

**Anchor Elements** (`<a>`) create a link in HTML. Without an _attribute_, the `<a>` tag will go nowhere.

- `href` attribute = _hyperlink reference_ (URL)
- `<a>` can link to any resource on the internet, not just other HTML documents (_Videos, PDF files, Images, etc._)

```html
<a href="https://www.bmilcs.com">Click me</a>
```

### Link Types

**Absolute Links** must contain a protocol and a domain.

`protocol://domain/path`

`https://www.bmilcs.com/home`

In the above example, `https` is the protocol and the domain is `bmilcs.com`

### Relative Links

Links to other pages within a website are called `relative links`.

- Doesn't contain the domain
- Relative to the `index` file

`<a href="about.html">About</a>`
`<a href="pages/about.html">About</a>`

`pages/about.html` can cause unexpected issues. Adding `./` before the link will usually prevent them.

`./` starts searching in your `current` directory.

## Images

Images are displayed with the `<img>` tag. The `<img>` tag is _empty_, meaning it doesn't have a _closing tag_.

- Embedding an image requires the `src` attribute.

`<img src="images/dog.jpg">`

The four main image formats on the web are:

- **JPG**
  - Handle large color pallettes without huge file sizes
  - Used for photos/images with lots of gradients
  - NO transparency
- **GIF**
  - Simple animations
  - Limited in color palette
  - Transparency is binary: Full or Opaque, no semi-opaque pixels
- **PNG**
  - Great for non-animated, non-photo
  - Larger than equivalent JPG for photos
  - Opacity is not an issue
  - Don't have color palette limitations
  - Best use: icons, technical diagrams, logos, etc.
- **SVG**
  - Vector-based graphics format
  - Scale up/down to any dimension without loss of quality
  - Great for responsive designs
  - Same use as PNG, should be used whenever you can.
  - Issue: for them to display consistently across browsers, you have to convert text fields to outlines using an image editor.
    - If image contains a lot of text, file size will be big

## Alt Attribute

Every image should contain the `alt` (alternative text) attribute.

- Used to describe an image
- Used in place of the image **if it can't be loaded**
- Used with screen readers to describe image for the visually impaired

`<img src="images/dog.jpg" alt="A picture of a dog">`

## Parent Directories

To reference paths one level out of the current directory, you need to use `../`.

If you want to reference `/images/dog.jpg` from `/pages/about.html`:

`<img src="../images/dog.jpg">`

## Link Targets

Define where to display a page when user clicks a link.

- Default: Replace current page w/ new one
- `target="_blank"` specifies a new tab

## Naming Conventions

Best practices:

- All lower case
- Hyphens `-` instead of spaces

# DIV

DIV is one of the most basic HTML elements.

- Empty container for other elements

```html
<div>Welcome to the machine.</div>
```

# Classes

- Attributes that you place in an HTML element
- Case sensitive
- Multiple classes can be added to a single element
- Classes can be reused on as many elements as you want
  - Whitespace is used to separate multiple classes

```html
<div class="alert-text pink-floyd">Welcome to the machine.</div>
```

# [Emmet (Visual Studio Code)](https://docs.emmet.io/abbreviations/syntax/)

Creating elements

```html
<!-- create button with id "btnId" and classes "class1" "class2" -->
button.class1.class2#btnID
<!-- hit tab and it becomes: -->
<button class="class1 class2" id="btnID"></button>
```

Children `>`

```html
div>ul>li
<!-- tab -->
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

Sibling `+`

```html
div+p+bq
<div></div>
<p></p>
<blockquote></blockquote>
```

Climb-up `^`

```html
div+div>p>spam+em
<div></div>
<div>
  <p><span></span><em></em></p>
</div>

div+div>p>span+em^bq (blockquote rises above current sibling)
<div></div>
<div>
  <p><span></span><em></em></p>
  <blockquote></blockquote>
</div>

div+div>p>span+em^^^bq (bq rises above multiple parents)
<div></div>
<div>
  <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

Multiplication `*`

```html
ul>li*5
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Grouping `()`

```html
div>(header>ul>li*2>a)+footer>p
<div>
  <header>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </header>
  <footer>
    <p></p>
  </footer>
</div>

(div>dl>(dt+dd)*3)+footer>p
<div>
  <dl>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>
<footer>
  <p></p>
</footer>
```

ID `#` & Class `.`

```html
div#header+div.page+div#footer.class1.class2.class3
<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```

Custom Attributes

```html
td[title="Hello world!" colspan=3]
<td title="Hello world!" colspan="3"></td>
```

Item Numbering `$`

```html
ul>li.item$*5
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>

<!-- number padding -->
ul>li.item$$$*5
<ul>
  <li class="item001"></li>
  <li class="item002"></li>
  <li class="item003"></li>
  <li class="item004"></li>
  <li class="item005"></li>
</ul>
```

Changing Numbering Base & Direction

```html
<!-- Change direction 5-1 -->
ul>li.item$@-*5
<ul>
  <li class="item5"></li>
  <li class="item4"></li>
  <li class="item3"></li>
  <li class="item2"></li>
  <li class="item1"></li>
</ul>

<!-- Change counter base value -->
ul>li.item$@3*5
<ul>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
  <li class="item6"></li>
  <li class="item7"></li>
</ul>
```

Text `{}`

```html
a{click meeee}
<a href="">click meeee</a>

p>{Click }+a{here}+{ to continue}
<p>Click <a href="">here</a> to continue</p>

p{Click }+a{here}+{ to continue}
<p>Click</p>
<a href="">here</a> to continue
```
