// Import the Shape class from another file
const Shape = require("./Shape");

// Define a new class Square that extends the Shape class
class Square extends Shape {
  // Constructor function that gets called when a new instance of the class is created
  constructor() {
    // Call the constructor of the parent class (Shape) to initialize any properties it has
    super();
  }

  // Method to render the Square as an SVG rect element
  render() {
    // Return an SVG rect element as a string, with the position, size, and fill color set
    return `
    <!-- Define the rect element -->
    <rect 
      x="100"  // x-coordinate of the top-left corner
      y="50"   // y-coordinate of the top-left corner
      width="100"  // width of the rect
      height="100"  // height of the rect
      fill="${this.color}"  // fill color of the rect
    />`;
  }
}

// Export the Square class so it can be used in other files
module.exports = Square;
