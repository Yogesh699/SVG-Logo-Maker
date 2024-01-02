import Shape from './Shape.js'

class Circle extends Shape {
    constructor() {
      super();
      this.radius = 50;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }

export default Circle