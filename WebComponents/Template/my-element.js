
class MyElement extends HTMLElement {
    constructor(){
        super();
        
    }
    getTemplate(){
        const template = document.createElement('template')
        template.innerHTML = `
            <section>
            <h2>Hola mundo</h2>
            <div>
                <p>Soy más texto de ejemplo</p>
            </div>
            </section>
            ${this.getStyles()}
        `
        return template
    }

    getStyles(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `
    }

    render(){
        this.appendChild( this.getTemplate().content.cloneNode(true) ) //cloneNode(true) clona toda la estructura
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('my-element', MyElement)