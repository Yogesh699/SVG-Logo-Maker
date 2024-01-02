import Shape from './Shape.js'

class Triangle extends Shape {
    constructor() {
        super(); 
        this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const points = '150,18 244,182 56,182';
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }

export default Triangle