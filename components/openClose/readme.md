# openClose() - a cyclic animation component

This component cycles an animation between an open and a close state. The object must have a sprite with "open" and "close" animation sequences defined. For example, how often an elevator "arrives," a door opens or a platform appears.

Its parameter is a config object that takes:

-   **frequency**: `number` - how long, in seconds, before each open state
-   **chance**: `number` - on a 0-1 scale what's the chance of opening actually happening when the time comes and
-   **duration**: `number` - how long, in seconds, before the close state begins

## Example usage

For example, an elevator game object has a sprite with an open and close animation. Every 5 seconds, there's a 100% chance it will arrive, then stay open for 3 seconds.

```js
"E": () => [
        k.sprite("elevator"),
        openClose({ frequency: 5, chance: 1, duration: 3 }),
        (etc.)
```
