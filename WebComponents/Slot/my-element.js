
class MyElement extends HTMLElement {
    constructor(){
        super();
        //Agregamos shadow down (API) y lo ponemos en modo open para poder acceder a este
        this.attachShadow({mode: 'open'}) //
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h2>
                    <slot></slot>
                </h2>
            </section>
            ${this.getStyles()}
        `
        return template
    }

    getStyles(){
        return `
            <style>
                .title {
                    color: red;
                }
            </style>
        `
    }

    render(){
        this.shadowRoot.appendChild( this.getTemplate().content.cloneNode(true) ) //cloneNode(true) clona toda la estructura
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('my-element', MyElement)