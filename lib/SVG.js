// Define a class Svg that represents an SVG element
class Svg {
  // Constructor function that gets called when a new instance of the class is created
  constructor(shape, textColor, text) {
    // Initialize the properties of the Svg instance
    this.shape = shape;
    this.textColor = textColor;
    this.text = text;
  }

  // Method to render the Svg element as a string
  render() {
    // Return an SVG element as a string, with the shape, text, and text color set
    return `
      <!-- Define the SVG element -->
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <!-- Add the shape element (e.g. a polygon or rectangle) -->
        ${this.shape}
        <!-- Add a text element with the specified text and color -->
        <text x="150" y="110" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
  }
}

// Export the Svg class so it can be used in other files
module.exports = Svg;
