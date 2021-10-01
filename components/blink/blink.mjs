function blink(time) {
    return {
        id: "blink",
        require: [],
        add() {
            if(this.loopBlink) this.loopBlink();
        
            this.loopBlink = loop(time, (time) => {
                if(!time) time = 0.3;

                this.hidden = !this.hidden;
            });
        }
    };
};

export default blink;
