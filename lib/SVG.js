class Svg{

    constructor(shape, textColor, text){
        this.shape = shape
        this.textColor = textColor
        this.text = text
    }
    
    render(){
        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${this.shape}
            <text x="150" y="110" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Svg;