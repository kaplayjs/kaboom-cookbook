export default function buttonComponent(k) {
	return {
		button() {
			var isHoveredOn;
			var isHolding;
		
			return {
				
				id: "button",
				require: ["area"],
		
				add() {
					this.isHoveredOn = false;
					this.isHolding = false;
				},
		
				update() {
					// on hover start
					if (this.isHoveredOn == false && this.isHovering()) {
						this.isHoveredOn = true;
						this.trigger("onHoverStart");
					}
		
					// on hovering
					if (this.isHoveredOn == true && this.isHovering()) {
						this.trigger("onHovering");
					}
					
					// on hover leave
					if (this.isHoveredOn == true && !this.isHovering()) {
						this.isHoveredOn = false;
						this.trigger("onHoverEnd");
					}
		
					// on click start
					if (this.isHolding == false && this.isHoveredOn == true && isMouseDown("left")) {
						this.isHolding = true;
						this.trigger("onClickStart");
					}
		
					// on mouse down
					if (this.isHolding == true && this.isHoveredOn == true && isMouseDown("left")) {
						this.trigger("onClicking");
					}
					
					// on click end
					if (this.isHolding == true && (this.isHoveredOn == false || !isMouseDown("left"))) {
						this.isHolding = false;
						this.trigger("onClickEnd");
						this.trigger("onClicked");
					}
				},
		
				// getters
				
				isMouseHover() {
					return this.isHoveredOn;
				},
		
				isMouseDown() {
					return this.isHolding;
				},
				
			}
		}
	}
}