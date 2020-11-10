class Script {
    constructor(destiny) {
        this.destiny = document.querySelector(destiny);
        this.render();
    }

    render() {
        new Visual('#app');
    }
}

new Script('#app');