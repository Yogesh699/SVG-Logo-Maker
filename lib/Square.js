const Shape = require('./Shape')

class Square extends Shape {
    constructor() {
      super();
    }

    render() {

      return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
  }

  module.exports = Square