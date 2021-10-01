function openClose(config) {

    return {

        id: "openClose",
        require: [ "sprite" ],

        add() {

            this.openFrequency = config.frequency;
            this.openChance = config.chance;
            this.openDuration = config.duration;

            this.open = () => {
                if(k.rand() > this.openChance) return;
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

};
