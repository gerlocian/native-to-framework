export class HelloWorldComponent extends HTMLElement {
    static register() {
        console.log('registering');
        if (!customElements.get('ntf-native-helloworld'))
            customElements.define('ntf-native-helloworld', HelloWorldComponent);
    }

    constructor() {
        super();
    }
    
    connectedCallback() {
        console.log('connected');
        this.innerHTML = 'Hello World!';
        this.intervalId = setInterval(
            () => this.dispatchEvent(new CustomEvent('customEvent')),
            1000
        );
    }

    destroyCallback() {
        clearInterval(this.intervalId);
    }
}