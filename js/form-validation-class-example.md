# Creating a Custom Form Validator

Source: https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/

## Validation Class Example

```js
// custom form validation
class FormValidate {
  constructor(form, field) {
    // active form
    this.form = form;
    this.form.noValidate = true;

    // custom validation functions
    this.custom = [];

    // validate fields on focus change?
    this.validate = !!field;

    // field focusout event
    this.form.addEventListener("focusout", (e) => this.changeHandler(e));

    // form submit event
    this.form.addEventListener("submit", (e) => this.submitHandler(e));
  }

  // add a custom validation function
  // it's passed the field and must return true (valid) or false (invalid)
  addCustom(field, vfunc) {
    // get index
    let c = field.CustomValidator;
    if (typeof c === "undefined") {
      c = this.custom.length;
      field.CustomValidator = c;
    }

    // store function reference
    this.custom[c] = (this.custom[c] || []).concat(vfunc);
  }

  // validate a field when focus changes
  changeHandler(e) {
    const t = e.target;
    if (this.validate && t && t.checkValidity) this.validateField(t);
  }

  // validate all fields on submit
  submitHandler(e) {
    // validate all fields
    let first,
      invCount = 0;
    Array.from(this.form.elements).forEach((f) => {
      if (!this.validateField(f)) {
        // find first visible invalid
        if (f.offsetHeight) first = first || (f.focus && f);
        invCount++;
      }
    });

    // at least one field is invalid
    if (invCount) {
      // stop submission
      e.stopImmediatePropagation();
      e.preventDefault();

      // enable field focusout validation
      this.validate = true;

      // focus first invalid field
      if (first) {
        first.parentElement.scrollIntoView(true);
        setTimeout(() => first.focus(), 800);
      }
    }
    // form is valid - submit
    else if (this.submit) this.submit(e);
  }

  // validate a field
  validateField(field) {
    const parent = field.parentElement,
      c = field.CustomValidator,
      inv = "invalid";

    field.setCustomValidity("");

    // default validation
    let valid = field.checkValidity();

    // custom validation
    if (valid && typeof c !== "undefined") {
      valid = !this.custom[c].some((fn) => !fn(field));
    }

    if (valid) {
      // field is valid
      parent.classList.remove(inv);
      return true;
    } else {
      // field is not valid
      field.setCustomValidity(inv);
      parent.classList.add(inv);
      return false;
    }
  }
}

// ___________________________________________________________________
// validate contact form
const contactForm = new FormValidate(document.getElementById("contact"), false);

// custom validation - email and/or telephone
const email = document.getElementById("email"),
  tel = document.getElementById("tel");

contactForm.addCustom(email, (f) => f.value || tel.value);
contactForm.addCustom(tel, (f) => f.value || email.value);

// custom submit
contactForm.submit = (e) => {
  e.preventDefault();

  alert("Form is valid!\n(open the console)");

  const fd = new FormData(e.target);
  for (const [name, value] of fd.entries()) {
    console.log(name + ": " + value);
  }
};
```

`FormValidate` is a generic form validation class. A form element is passed and the second parameter can be set:

- `true` validate each field as user interacts with it
- `false` (default) validate all fields after first submit

```js
// validate contact form
const contactForm = new FormValidate(document.getElementById("contact"), false);
```

`.addCustom(field, func)` method defines custom validation functions.

- ensures `email` or `tel` fields are valid (neither have `required` attributes)

`FormValidate` object monitors:

- `focusout` event, which then check an individual field
- form `submit` events, which check every field

^ Both call `.validateField(field)` method, which checks whether a field passes standard constraint validation.

- when it does, custom validation functions assigned to that field execute
- all must return `true` for field to be valid

Invalid fields have an `invalid` class applied to the fields parent element, which displays a red message using CSS.

Finally, the object calls a custom `submit` function when the form is valid:

```js
// custom submit
contactForm.submit = (e) => {
  e.preventDefault();
  alert("Form is valid!\n(open the console)");
  const fd = new FormData(e.target);
  for (const [name, value] of fd.entries()) {
    console.log(name + ": " + value);
  }
};
```

Alternatively, you can use a standard `addEventListener` to handle form submit events, since `FormValidate` prevents further handlers running when the form is invalid.
