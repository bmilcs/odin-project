# [Regular Expressions (regex)](https://www.youtube.com/watch?v=r6I-Ahc0HB4&list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD&index=1)

Regex allows us to check a series of characters for _matches_.

For example: Checking a form field to try & match a valid email address

- Must have `@` symbol at a certain position
- Must have extension like `.com`, `.org`, `co.uk`

## Flags

```js
/match/; // 1st match only
/match/g; // all matches (don't return after 1st match)
/match/i; // insensitive, ignores care
```

## Character Sets

```js
// Matching characters in a single position
/[ng]inja/ // would match ginja & ninja

// Exception (Inverse)
/[^p]/  // everything EXCEPT p

// Ranges
/[a-z]/ // a-z, lowercase
/[A-Z]/ // A-Z, uppercase
/[a-zA-Z]/ // all letters
/[0-9]/ // all numbers

// Repeat multiple characters
/[0-9]+/ // match any number of characters, unlimited, at least 1
/[0-9]{11}}/ // matches 11 numbers
/[a-z]{5}/ // match 5 lowercase letters
/[a-z]{5,8}/ // match 5 to 8 lowercase letters
/[a-z]{5,}/ // match 5 or MORE lowercase letters
```

## Metacharacters

The `\` creates a metacharacter.

- `\d` Digit (`0-9`)
- `\w` Word Character (`a-z` `A-Z` `0-9` `_`)
- `\s` Whitespace (` `, `tab`, etc.)
- `\t` Tab only (`tab`)

## Special Characters

- `\` Escape character
- `[]` Character set
- `[^]` Negate Symbol in character set
- `+` 1 or more quantifier
- `*` 0 or more quantifier
- `?` 0 or 1 quantifier (zero or one)
- `.` Any character _except newline_
- `^` Start (of string)
- `$` End (end of string)
- `()` Capturing group
- `|` OR

`.+` Any string

## JavaScript Regex

```js
let reg = /[a-z]/gi;
let reg2 = new RegExp(/[a-z]/, "gi");
```

Form Validation example

```js
const inputs = document.querySelectorAll("input");

const patterns = {
  // must match name= attribute of input
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5, 12}$/i, // 5-12, lowercase letters, digits
  password: /^[\w@-]{8-20}$/, //8-12, letters, @, -, _
  slug: /^[a-z\d-]{8,20}$/, // 8-20, lowercase letters, hyphen
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2-8})(\.[a-z]{2-8})?$/i,

  // name @ domain . extension .again
  // name @ domain . extension

  // name: letters, numbers, dots, hyphens, 1+
  // @
  // domain: letters, numbers, hyphens
  // .
  // extension: any letters
  // (. extension): any letters
};

// validation function
function validate(field, regex) {
  // console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    // pass validation
    field.className = "valid";
  } else {
    // not a match
    field.className = "invalid";
  }
}

// validation function
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    // validate(e.target, patterns[telephone]);
    validate(e.target, patterns[e.target.attributes.value]);
  });
});
```

CSS changes

```css
input.valid {
  border-color: green;
}

input.invalid {
  border-color: red;
}

/* p next to each input, side by side */
input + p {
  font size: 0.9em;
  color: red;
  opacity: 0;
  height: 0;
}

input.invalid + p {
  opacity: 1;
  height: auto;
  margin-bottom: 20px;
}
```

```html
<!-- html -->
<form>
  <input type="text" name="username" placeholder="username" />
  <p>Username must be and contain 5 - 12 characters</p>

  <input type="text" name="email" placeholder="email" />
  <p>Email must be a valid address, e.g. me@mydomain.com</p>

  <input type="password" name="password" placeholder="password" />
  <p>
    Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20
    characters
  </p>

  <input type="text" name="telephone" placeholder="telephone" />
  <p>Telephone must be a valid UK telephone number (11 digits)</p>

  <input type="text" name="slug" placeholder="profile slug" />
  <p>
    Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20
    characters
  </p>
</form>
```
