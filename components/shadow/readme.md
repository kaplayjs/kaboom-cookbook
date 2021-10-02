# shadow() - Give your objects a shadow that follows it

Apply this component to a game object for a shadow that:

* follows the object
* respects platforms, holes, etc.

It works by always "falling" until it hits a solid object (ie "the ground").

## Requires

A sprite called "shadow"

## Parameters

None

## Example

```.js

"P": () => [
  k.sprite("player"),
  k.solid(),
  shadow(),
  (etc.)
  
```
