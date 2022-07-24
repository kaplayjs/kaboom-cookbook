export default function ssControllerComponent(k) {
	return {
		// adds better movement && coyote time && jump buffer
		ssController({moveSpeed = 240, accel = 8, deccel = 5, velPower = 1, friction = 0.9, jumpForce = 480, coyoteTime = 0.15, jumpBufferTime = 0.2, blockTag = "block", useInput = true} = {}) {	

			// movement	
			var velocity = 0;
			var targetSpeed = 0;
			var amount;

			// coyoteTime
			var coyoteCount = 0;

			var canJump = false;

			// jump buffer
			var jumpBufferCount = 0;

			return {

				id: "sscontroller",
				require: ["pos", "body"],

				add() {

					this.input = 0;

					k.onKeyPress(["space", "up"], () => {
						if (canJump)
							this.jump(jumpForce);
						else
							jumpBufferCount = jumpBufferTime;
					});

					this.onCollide(blockTag, (other, c) => {
						if (c.isRight() && velocity > 0)
							velocity = 0;
						else if (c.isLeft() && velocity < 0)
							velocity = 0;
					});

				},

				update() {

					// input

						// should players change input themselves?

					if (useInput) {
						this.input = 0;

						if (k.isKeyDown("a") || k.isKeyDown("left"))
							this.input -= 1;

						if (k.isKeyDown("d") || k.isKeyDown("right"))
							this.input += 1;
					}

					// movement

					targetSpeed = this.input * moveSpeed;

					speedDif = targetSpeed - velocity;

					accelRate = (Math.abs(targetSpeed) > 0.01) ? accel : deccel;

					movement = Math.pow(Math.abs(speedDif) * accelRate, velPower) * Math.sign(speedDif);

					velocity += movement * k.dt();

					this.move(velocity, 0);

					amount = Math.min(Math.abs(velocity), Math.abs(friction));

					amount *= Math.sign(velocity);

					velocity -= amount;

					// coyote time
					if (this.isGrounded()) {
						coyoteCount = coyoteTime;
					} else {
						coyoteCount -= k.dt();
					}

					if ((coyoteCount > 0 && this.isFalling()) || this.isGrounded())
						canJump = true;
					else
						canJump = false;

					// jump buffer
					if (jumpBufferCount > 0 && canJump)
						this.jump(jumpForce);
					else
						jumpBufferCount -= k.dt();
				},

				draw() {},

				destroy() {},

				inspect() {
					return "{\n\tInput: " + this.input + "\n\tVelocity: " + (Math.round(velocity*10)/10) + "\n\tCoyote: " + (Math.round(coyoteCount*10)/10) + "\n\tJump Buffer: " + (Math.round(jumpBufferCount*10)/10) + "\n\tCanJump: " + canJump + "\n}";
				},
			}
		}
	}
}
