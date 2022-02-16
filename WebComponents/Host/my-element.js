
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
            :host {
                display: inline-block;
                width: 100%;
                min-width: 300px;
                max-width: 450px;
                font-size: 20px;
                background: grey;
            }
            :host(.blue){
                background: blue;
            }
            :host([yellow]){
                background: yellow;
            }
            :host([yellow]) h2 {
                color: grey;
            }
            :host([yellow]) p {
                color: red;
            }

            :host-context(article.card){
                display: block;
                max-width: 100%;
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