// Import the Shape class from another file
const Shape = require("./Shape");

// Define a new class Circle that extends the Shape class
class Circle extends Shape {
  // Constructor function that gets called when a new instance of the class is created
  constructor() {
    // Call the constructor of the parent class (Shape) to initialize any properties it has
    super();
  }

  // Method to render the Circle as an SVG circle element
  render() {
    // Return an SVG circle element as a string, with the position, radius, and fill color set
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}

// Export the Circle class so it can be used in other files
module.exports = Circle;
