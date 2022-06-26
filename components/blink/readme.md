# blink() - Make your objects blink

You can create interplations between the visible object and the invisible object, for situations where your object must blink, it is very simple!

## Parameters

**time**: `number` - The time it will take to change the state, for example, if it is 2 seconds, will take 4 to make an entire cycle between visible and non-visible

## Example

```js
const playText = add([
    text("Press any key for start"),
    pos(center()),
    origin("center"),
    blink(2),
]);

onKeyPress(("space") => {
    playText.use(blink(1));
});
```
