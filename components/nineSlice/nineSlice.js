function nineSlice(config) {

  var s = config.sprite
  var twi = config.tw
  var the = config.th

    return {

    id: "nineSlice",

    draw() {
      var obj = this;

      drawSprite({
        sprite: s,
        frame: 0,
        pos: vec2(0),
      })

      drawSprite({
        sprite: s,
        frame: 1,
        origin: "top",
        pos: vec2(obj.area.width / 2, 0),
        scale: vec2((obj.area.width - (twi * 2)) / twi, 1)
      })

      drawSprite({
        sprite: s,
        frame: 2,
        origin: "topright",
        pos: vec2(obj.area.width, 0)
      })

      drawSprite({
        sprite: s,
        frame: 3,
        origin: "left",
        pos: vec2(0, obj.area.height / 2),
        scale: vec2(1, (obj.area.height - (the * 2)) / the)
      })

      drawSprite({
        sprite: s,
        frame: 4,
        origin: "center",
        pos: vec2(obj.area.width / 2, obj.area.height / 2),
        scale: vec2((obj.area.width - (twi * 2)) / twi, (obj.area.height - (the * 2)) / the)
      })

      drawSprite({
        sprite: s,
        frame: 5,
        origin: "right",
        pos: vec2(obj.area.width, obj.area.height / 2),
        scale: vec2(1, (obj.area.height - (the * 2)) / the)
      })

      drawSprite({
        sprite: s,
        frame: 6,
        origin: "botleft",
        pos: vec2(0, obj.area.height)
      })

      drawSprite({
        sprite: s,
        frame: 7,
        origin: "bot",
        pos: vec2(obj.area.width / 2, obj.area.height),
        scale: vec2((obj.area.width - (twi * 2)) / twi, 1)
      })

      drawSprite({
        sprite: s,
        frame: 8,
        origin: "botright",
        pos: vec2(obj.area.width, obj.area.height)
      })

    }

  }

}
