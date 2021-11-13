function nineSlice(config) {

  const s = config.sprite
  const w = config.width
  const h = config.height
  const tw = config.tw
  const th = config.th

    return {

    id: "nineSlice",

    draw() {

      k.drawSprite({
        sprite: s,
        frame: 0,
        pos: this.pos,
      })

      k.drawSprite({
        sprite: s,
        frame: 1,
        origin: "topleft",
        pos: k.vec2(this.pos.x + tw, this.pos.y),
        scale: k.vec2( (w - 2 * tw) / tw , 1)
      })

      k.drawSprite({
        sprite: s,
        frame: 2,
        origin: "topright",
        pos: k.vec2(this.pos.x + w, this.pos.y)
      })

      k.drawSprite({
        sprite: s,
        frame: 3,
        origin: "topleft",
        pos: k.vec2(this.pos.x, this.pos.y + 32),
        scale: k.vec2(1, (h - 2 * th) / th)
      })

      k.drawSprite({
        sprite: s,
        frame: 4,
        origin: "topleft",
        pos: k.vec2(this.pos.x + tw, this.pos.y + th),
        scale: k.vec2( (w - 2 * tw) / tw , (h - 2 * th) / th)
      })

      k.drawSprite({
        sprite: s,
        frame: 5,
        origin: "topright",
        pos: k.vec2(this.pos.x + w, this.pos.y + th),
        scale: k.vec2(1, (h - 2 * th) / th)
      })

      k.drawSprite({
        sprite: s,
        frame: 6,
        origin: "botleft",
        pos: k.vec2(this.pos.x, this.pos.y + h)
      })

      k.drawSprite({
        sprite: s,
        frame: 7,
        origin: "botleft",
        pos: k.vec2(this.pos.x + 32, this.pos.y + h),
        scale: k.vec2( (w - 2 * tw) / tw , 1)
      })

      k.drawSprite({
        sprite: s,
        frame: 8,
        origin: "botright",
        pos: k.vec2(this.pos.x + w, this.pos.y + h)
      })

    }

  }

}
