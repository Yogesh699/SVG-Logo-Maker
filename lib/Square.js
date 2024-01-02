import Shape from './Shape.js'

class Square extends Shape {
    constructor() {
      super();
      this.sideLength = 100;
    }

    render() {
      const x = 150 - this.sideLength / 2;
      const y = 100 - this.sideLength / 2;
      return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }

export default Square