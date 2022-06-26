function openCloseComponent(k) {
    return {
        openClose({ frequency = 5, chance = 1, duration = 3 } = {}) {
            return {
                id: "openClose",
                require: ["sprite"],

                add() {
                    this.openFrequency = frequency;
                    this.openChance = chance;
                    this.openDuration = duration;

                    this.open = () => {
                        if (k.rand() > this.openChance) return;
                        this.play("open");
                        k.wait(this.openDuration, this.close);
                    };

                    this.close = () => {
                        this.play("close");
                        k.wait(this.openFrequency, this.open);
                    };

                    k.wait(this.openFrequency, this.open);
                },
            };
        },
    };
}
