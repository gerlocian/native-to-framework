export class HelloWorldComponent extends HTMLElement {
    static register() {
        if (!customElements.get('ntf-native-helloworld'))
            customElements.define('ntf-native-helloworld', HelloWorldComponent);
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = 'Hello World!';
        this.intervalId = setInterval(() => this.dispatchEvent(new CustomEvent()), 1000);
    }

    destroyCallback() {
        clearInterval(this.intervalId);
    }
}

export class CustomEvent extends Event {
    constructor() {
        super('customEvent', { bubbles: true, cancelable: true, composed: false });
    }
}