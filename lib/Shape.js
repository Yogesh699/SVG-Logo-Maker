class Shape {
    constructor() {
      this.color = 'black';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Render method must be implemented by the subclass');
    }
  }

  module.exports = Shape