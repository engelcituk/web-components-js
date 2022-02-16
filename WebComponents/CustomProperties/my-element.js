
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
                    <slot name="title"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }

    getStyles(){
        return `
            <style>
                :host{
                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;
                    display: inline-block;
                    width:100%;
                    min-width: 300px;
                    max-width: 450px;
                }
                section {
                    background: var(--primary-color)
                }
                section div {
                    background: var(--secondary-color)
                }
                h1 {
                    font-size: var(--heading-primary)
                }
                p {
                    font-size: var(--heading-secondary)
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