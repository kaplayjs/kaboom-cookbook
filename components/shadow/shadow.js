export function shadow() {

  const SHADOW_DISTANCE_THRESHOLD = 160
  
  return {

    id: "shadow",
    require: [ "pos" ],

    add() {

      // a handle so that we can update it every frame
      this.shadow = k.add([
        k.sprite("shadow"),
        k.pos(this.pos.x, this.pos.y + 40),
        k.area({
          height: 0,
        }),
        k.body(), // shadow "falls" to the ground
        k.layer("effects"),
        k.origin("bot"),
        k.scale()
      ])

      // remove shadows when the object is destroyed
      this.on("destroy", () => {
        k.destroy(this.shadow)
      })

    },

    update() {
      // shadow follows me
      this.shadow.pos.x = this.pos.x
      
      // hide the shadow if it's still falling to the ground
      if(this.shadow.grounded()) {
        this.shadow.hidden = false
      } else {
        this.shadow.hidden = true
      }

      // reset shadow if it's far enough
      let shadowDistance = this.shadow.pos.y - this.pos.y
      //console.log(shadowDistance)
      if(shadowDistance > SHADOW_DISTANCE_THRESHOLD) {
        this.shadow.hidden = true
        this.shadow.pos.y = this.pos.y + 20
      }

      // shadow gets slightly larger when the object is close
      let dist = this.shadow.pos.y - this.pos.y
      this.shadow.frame = Math.floor(k.mapc(dist, 0, 100, 0, 3))

    }
  }

}
