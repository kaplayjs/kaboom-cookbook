# Button() - Adds useful button events

Adds events that apply directly to the game object. These events can be accessed through the `on` built-in kaboom function.


## Events

* `onHoverStart`: Fired when the player hovers over the game object.
* `onHovering`: Fired when the player is hovering over the game object.
* `onHoverEnd`: Fired when the player stops hovering over the game object.
* `onClickStart`: Fired when the player presses a mouse button over the game object.
* `onClicking`: Fired when the player is pressing a mouse button over the game object.
* `onClickEnd`: Fired when the player stops pressing a mouse button over the game object.
* `onClicked`: Same as `onClickEnd`.

>Note that all mouse button events are only using the left button for now.

## Requires

* Any game-object.
* The object to have an `["area"]` component.

## Example Usage

```.js

let button = add([
	pos(center()),
	origin("center"),
	rect(64,32),
	area(),
	scale(),
	button(),
]);

button.on("onHoverStart", () => {
	button.scale = 2;
});

button.on("onHoverEnd", () => {
	button.scale = 1;
})
  
```
