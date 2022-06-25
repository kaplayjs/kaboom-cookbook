# ssController() - 2D Sidescroll Platformer Controller

Apply this component to a game object for a 2D Sidescroll Platformer Controller that:

* Has player input built into the controller (can be turned off).
* Has advanced movement options using friction & acceleration.
* Implements CoyoteTime (jump after falling off a block for a short period of time).
* Implements a Jump Buffer (hitting space before landing allows you to buffer a jump that will execute as soon as you land).

## Requires

* A tag on any object you wish to be a wall.
* The object to have ["area", "body"] components.

## Parameters

* `moveSpeed: 240`: number - how fast, in pixels/sec, the character should move.
* `accel: 8`: number - how fast, in pixels/sec/sec, the character accelerates.
* `deccel: 5`: number - how fast, in pixels/sec/sec, the character deccelerates.
* `velPower: 1`: number - extra control over how fast, in pixels/sec/sec the character changes speed.
* `friction: 0.9`: number - an extra amount the character loses speed when not having any input.
* `jumpForce: 480`: number - initial jump speed of the object (uses the built-in body() component to jump (for now)).
* `coyoteTime: 0.15`: number - how long, in seconds, the character has to jump after falling off an object.
* `jumpBufferTime: 0.2`: number - how long, in seconds, the character can press jump before being able to jump, and still have it execute.
* `blockTag: "block"`: string - what tag the character should check for when hitting a wall to reset its velocity.
* `useInput: true`: boolean - whether or not the character should use the built in controller movement inputs.

## Example Usage

```.js

"P": () => [
  k.sprite("player"),
  k.area(),
  k.body(),
  ssController({moveSpeed: 800}),
  (etc.)
  
```