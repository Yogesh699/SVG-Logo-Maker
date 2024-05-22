// Import the Shape class from another file
const Shape = require("./Shape");

// Define a new class Triangle that extends the Shape class
class Triangle extends Shape {
  // Constructor function that gets called when a new instance of the class is created
  constructor() {
    // Call the constructor of the parent class (Shape) to initialize any properties it has
    super();
    // Set the color property of the Triangle instance to black
    this.color = "black";
  }

  // Method to set the color of the triangle
  setColor(color) {
    // Update the color property of the Triangle instance
    this.color = color;
  }

  // Method to render the triangle as an SVG polygon
  render() {
    // Return an SVG polygon element as a string, with the points and fill color set
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

// Export the Triangle class so it can be used in other files
module.exports = Triangle;
