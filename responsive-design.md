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
