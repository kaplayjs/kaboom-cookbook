# nineSlice()

nineSlice() allows you to stretch a texture using 9-slice scaling. The corners will remain unscaled (useful for buttons with rounded corners for example) and the other areas will be scaled horizontally and or vertically.

See PixiJS for a similar implementation: https://pixijs.download/dev/docs/PIXI.NineSlicePlane.html

## Parameters

Takes a config object with the following parameters:

- `width` - the desired width for the graphic
- `height` - the desired height for the graphic
- `sprite` - the string for the loaded sprite (must have alreaday been loaded using `loadSprite()`)

## Example

```.js
add([
  pos(vec2(100, 100)),
  nineSlice({
    width: 100,
    height: 220,
    sprite: "balloon9"
  })
]
```
