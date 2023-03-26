# Responsive Design

Responsive design: creating websites that **respond to changes in browser size** in order to create something that works on all devices.

What is it?

- Since iPhone 2007, responsiveness = requirement
- Must function on desktop monitors to tiny phone screens
- Doesn't happen automatically

What screen sizes should be supported?

- Rarely smaller than `320px`
- `320px` should cover all small devices
- Upper limit is difficult to clarify
- Ultrawide aren't uncommon
- Set max width & center main column

## Natural Responsiveness

Plain HTML, with no CSS is responsive.

Keep in mind: it's responsive until you change it with CSS.

### Viewport Meta Tag

When mobile phones first got web browsers, most web sites:

- were not optimized for small resolutions
- simulated a larger screen
- zoomed out view

To avoid this behavior:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- `minimum-scale` restricts zoom out
- `maximum-scale` restricts zoom in
- `user-scalable` enables/disables zoom actions
- `interactive-widget` effect that virtual keyboards have on viewport:
  - `resizes-visual` (default)
  - `resizes-content`
  - `overlays-content`

**Screen Density:** smart phones have up to 400 dpi (1920x1080p pixels)

- `initial-scale=1` on high dpi screens will effectively be zoomed by browsers
- text will be smooth/crisp BUT bitmap images may not take full advantage
- to get sharper images, design layouts/images at a higher scale than final size
  - then scale down using css/viewport

To set a minimum viewport width:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

> ie: your page needs at least 500px of width

### Avoid Fixed Width & Height

No. 1 Enemy of Flexibility: `width: 600px` (Fixed width/height)

Replace:

- `height` with `max-height` or `min-height`
- `width` with `max-width` or `min-width`

**Avoid Heights Altogether**!

### Fixed Widths When Appropriate

The smaller your widths are, the more likely it's fine to make them fixed.

- `32px` icons isn't going to benefit from `max-width`
  - Because you don't want it to shrink
- `250px` sidebar needs to always be `250px`

### Use Flex & Grid

Flex & Grid were created for flexible layouts:

- `flex-wrap`
- `minmax`
- `auto-fill`
- Similar properties

### Percentages

Most elements will automatically fill to `width: 100%`.

Use a breakpoint (if you don't want full width)

```css
.card {
  margin: 48px;
  background: red;
  padding: 48px;
  font-size: 32px;
}

@media (max-width: 500px) {
  .card {
    padding: 16px;
    margin: 16px;
  }
}
```

## Responsive Images

Most common problems w/ images:

- Aspect Ratio
- Relationship between height & width

Solution:

- Flexible width
- Height: `auto`

### `background-size`, `background-position` & `object-fit`

If you don't want your image to simply shrink in both height & width?

- `background-size` & `object-fit` provide more flexibility with how aspect ratios are handled
  - `cover`
  - `contain`
- `background-position` & `background-size` work on elements w/ a background image
  - Do not work on `<img>`
- `background-position: center`: center background in its container
- `background-position: cover`: resize image completely fills a container while cropping as little as possible

For `<img>`, `object-fit` works similarly:

- _Can_ specify height/width & how it's to fit itself to those dimensions
- Default value: `fill` (stretching image to fit dimensions)
- `cover` or `contain`

You can also use **different images** depending on screen size:

- smaller screens: cropped image
- use `<picture>` tag

#### `background-size: contain`

- `contain` large as possible in container, no cropping, **with empty space**
- `cover` smallest possible size to fill container, **no empty space**
- `auto` scales image & maintains proportions
- `<length>`/`<percentage>` scales image in corresponding dimensions

### Resolution Switching: Different Sizes

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>
```

`srcset`:

- defines set of images that browser can choose from & their sizes
- comma separate list of images & sizes

1. image filename: `elva-fairy-480w.jpg`
2. space
3. width in pixels: `480px`

`sizes`:

1. media condition: `(max-width: 600px)` - ie: less than 600px
2. space
3. width of the slot the image will fill when ^ true

### Resolution switching: Same size, different resolutions

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy"
/>
```

The above HTML adds the following CSS:

```css
img {
  width: 320px;
}
```

### Art Direction

Art direction problem: Want to change image displayed to suit different image display sizes

Example:

- Desktop: Large landscape shot w/ person in middle
- Mobile: Shrunk down, person is too small / hard to see

Solution: Show a smaller portrait image on mobile, zooming in on person using `<picture>`

```html
<picture>
  <source srcset="" media="" />
  <source srcset="" media="" />
  <img src="" alt="" />
</picture>

<!-- example: -->
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

### [CSS Tricks Guide to Responsive Image Syntax](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture)

For huge performance gains:

```html
<img srcset="" src="" alt="" />
```

For huge performance gains & design control:

```html
<picture>
  <source srcset="" media="" />
  <source srcset="" media="" />
  <img src="" alt="" />
</picture>
```

#### `srcset` (w/ x descriptors)

`srcset` = **same exact image** but different sizes (visually identical)

```html
<img
  alt="A baby smiling with a yellow headband."
  src="baby-lowres.jpg"
  srcset="baby-highres.jpg 2x"
/>
```

Easiest responsive images:

- `src` = default, low res img
- `srcset` w/ x descriptor `2x` => high pixel density display, use this

X descriptors only account for display pixel density.

- Not as useful: browsers need layout size of image

#### `srcset` (w/ image sizes)

\* **85% of responsive images on the web use this syntax**

```html
<img
  alt="A baby smiling with a yellow headband."
  srcset="baby-s.jpg 300w, baby-m.jpg 600w, baby-l.jpg 1200w, baby-xl.jpg 2000w"
  sizes="70vmin"
/>
```

- Allows browsers to make decisions
- Adapts to pixel-density & layout size
- Same image, multiple copies
- `sizes` => how big of an area the image will take up

#### Accurate `sizes`

Creating `sizes` can be tricky:

- describes width image will display _within layout of site_
- closely tied to css
- layout-dependent (rather than just viewport dependent)

Advanced example:

```html
<img
  ...
  sizes="
    (max-width: 500px) calc(100vw - 2rem), 
    (max-width: 700px) calc(100vw - 6rem),
    calc(100vw - 9rem - 200px)
  "
/>
```

- under 500px, margin + padding only
- 500-700px, body margin, margin + padding
- 700px+, sidebar, body margin, margin, padding

^ Wrong according to [Responsive Image Linter](https://github.com/ausi/respimagelint):

```html
<img
  ...
  sizes="
    (min-width: 2420px) 2000px, 
    (min-width: 720px) calc(94.76vw - 274px), 
    (min-width: 520px) calc(100vw - 96px), 
    calc(100vw - 32px)
  "
/>
```

Simpler examples:

- `sizes="96vw"` large on page, almost full width, padding around edges
- `sizes="(min-width: 1000px) 33vw, 96vw` image is in 3 column layout, on large screen, close to full width otherwise

#### Browser's Choice

Browser works its magic example:

- `40vw` wide
- viewport: `1200px`
- `2x` pixel density
- Perfect image: `960px` wide

Browser tries to find the closest option to `960px` wide.

However, browsers factor in more things into the equation if it chooses to:

- current network speeds
- user has `data saver` enabled
- pull from cache:
  - should use `300px`
  - has `600px` in local cache
  - uses `600px`

^ Strength of srcset and why **you should always include different sizes of the same image within srcset**.

You have no idea what's going to be selected. _Browser's choice!_

### Using `<picture>`

Unlike `srcset`, the browser **must respect the rules you set** w/ `<picture>` elements.

> Art Direction

```html
<picture>
  <source srcset="baby-zoomed-out.jpg" media="(min-width: 1000px)" />
  <source srcset="baby.jpg" media="(min-width: 600px)" />
  <img src="baby-zoomed-in.jpg" alt="Baby Sleeping" />
</picture>
```

- Large screens: zoomed out photo
- Medium screens: same photo, zoomed in
- Small screens: zoom in even more

^ Browser respects media queries & swap images at our exact breakpoints.

Art direction can not only **crop** & **zoom**:

- Dark-ify images (dark mode)
- Avoid sending animated gif's (prefers reduced motion)
- Rearrange image content (fits 'above the fold' on short viewports)
- Set max resolution cap (save users on 3x plus devices)
- Send static, high-res, monochrome images (printers & e-ink devices)

#### Combining `source` & `srcset`

`source` uses `srcset` syntax:

- reap benefits of `srcset` while swapping out different size images w/ `source`

```html
<picture>
  <source
    srcset="baby-zoomed-out-2x.jpg 2x, baby-zoomed-out.jpg"
    media="(min-width: 1000px)"
  />
  <source srcset="baby-2x.jpg 2x, baby.jpg" media="(min-width: 600px)" />
  <img
    srcset="baby-zoomed-out-2x.jpg 2x"
    src="baby-zoomed-out.jpg"
    alt="Baby Sleeping"
  />
</picture>
```

#### Fallbacks for modern image formats

`<picture>` is able to handle fallbacks:

- WebP images (not all browsers support)

```html
<picture>
  <source srcset="party.webp" />
  <img src="party.jpg" alt="A huge party with cakes." />
</picture>

<picture>
  <source srcset="/images/cereal-box.webp" type="image/webp" />
  <source srcset="/images/cereal-box.jp2" type="image/jp2" />
  <img src="/images/cereal-box.jxr" type="image/vnd.ms-photo" />
</picture>
```

#### Getting Different Size Images

Automated image variations is offered by many services

- Manipulated via URL
- Common feature for image hosting/image CDN services
  - Cloudinary
  - Netlify
  - imgix
  - Image Optim
  - Filestack
  - Cloudflare

Figma allows us to export multiple sizes at once.

#### Automating Responsive Imagesj

A lot of tools exist for this purpose:

- [Cloudinary Responsive Breakpoints](https://www.responsivebreakpoints.com/)
- Wordpress outputs multiple images/syntax by default
- Gatsby has plugins
- [React's Ideal Image](https://github.com/stereobooster/react-ideal-image)
- [Image Responsiver Node Module](https://github.com/nhoizey/images-responsiver)
  - [Eleventy Plugin](https://github.com/nhoizey/eleventy-plugin-images-responsiver)

#### Responsive images in CSS w/ background images

Use media queries:

```css
.img {
  background-image: url(small.jpg);
}
@media (min-width: 468px),
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
  .img {
    background-image: url(large.jpg);
  }
}
```

### [Responsive Images 101](https://cloudfour.com/thinks/responsive-images-101-definitions/)

## Media Queries

Media queries let us completely restyle our sites based on the size of the user's screen.

Syntax:

```css
body {
  margin: 24px;
}

@media (max-width: 600px) {
  body {
    margin: 8px;
  }
}
```

^ On all screens _less than `600px`_

Measurements:

- `max-width`
- `min-width`
- `max-height`
- `min-height`

### Limit Media Queries

It's possible to create an unlimited # of media queries.

Best practice:

- Use minimal media queries
- Rely on natural flexibility of layouts
- K.I.S.S.

### Common Breakpoints

Breakpoint: screen-size triggers

Think about the user's screen sizes:

- Mobile < `500px`
- Tablets `500px` - `1000px`
- Desktop: `1000px+`

Each project will have different requirements based on the design you use.

- Limit breakpoints to what _you need_

### Zooming

Most browsers, zooming changes the effective resolution of the page.

Zooming in on a window that's `1000px` = behaves as if it's smaller.

**Zooming out** = handy for debugging issues that arise

### Print Styles

Media queries are often defined with `screen` keyword:

```css
@media screen and (max-width: 480px) {
}
```

^ Mostly unnecessary.

^ Points to another useful capability of media queries:

- Changing styles based **on media-type**
- Everything so far is intended to be viewed on a screen, so specifying screen is redudant
- It's possible to create a set of styles for when it is sent to yourr printer
  - `print` keyword: print preview

```css
@media print {
  /* print styles go here! */
  background: white;
  color: black;
}
```

> For example, make print black/white for printing

### [MDN Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

- Media types: all (default), print, screen
- Media features:
  - any-hover
  - any-pointer
  - aspect-ratio
  - color
  - color-gamut
  - color-index
  - device-aspect-ratio Deprecated
  - device-height Deprecated
  - device-width Deprecated
  - display-mode
  - dynamic-range
  - forced-colors
  - grid
  - height
  - hover
  - inverted-colors
  - monochrome
  - orientation
  - overflow-block
  - overflow-inline
  - pointer
  - prefers-color-scheme
  - prefers-contrast
  - prefers-reduced-motion
  - resolution
  - scripting
  - update
  - video-dynamic-range
  - width

Targetting media features:

```css
@media (hover: hover) {
  /* … */
}
```

> Targetting users w/ a mouse (hover)

### Combining Multiple Types/Features

Landscape mode & min-width:

```css
@media (min-width: 30em) and (orientation: landscape) {
  /* … */
}
```

### Inverting Query's Meaning

`not` keyword inverts the meaning of an entire media query:

```css
@media not all and (monochrome) {
  /* … */
}

/* above is evaluated as: */
@media not (all and (monochrome)) {
  /* … */
}
```

### Improving Compatibility w/ older browsers

```css
@media only screen and (color) {
  /* … */
}
```

^ `only` prevents older browsers that don't support media queries

### Level 4 Syntax Improvements

````css
@media (max-width: 30em) {
  /* … */
}

/* can be written as */
```@media (width <= 30em) {
  /* … */
}

@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}

/* This would convert to the Level 4 syntax as: */

@media (30em <= width <= 50em) {
  /* … */
}
````

### Negating a feature

`not()` around a media feature negates it.

- ie: `not(hover)`
- matches devices that don't have hover (phones)

### Testing for multiple features

`or` can match multiple features:

```css
@media (not (color)) or (hover) {
  /* … */
}
```

^ Monochrome devices OR devices that can hover (mouse)
