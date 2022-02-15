
class MyElement extends HTMLElement {
    constructor(){
        super();
        //Agregamos shadow down (API) y lo ponemos en modo open para poder acceder a este
        this.attachShadow({mode: 'open'}) //
        this.title = this.getAttribute('title')
        this.parrafo = this.getAttribute('parrafo')
        this.imgSrc = this.getAttribute('imgSrc')

    }
    static get observedAttributes(){
        return ['title', 'parrafo', 'imgSrc']
    }

    attributeChangedCallback( attr, oldVal, newVal ){
        if ( oldVal !== newVal ) {
            this[attr] = newVal
        }
    }

    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
                <h2>
                ${this.title}
                </h2>
                <div>
                    <p>
                        ${this.parrafo}
                    </p>
                    <img src="${this.imgSrc}"/>
                </div>
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