// Define a base class Shape that other shape classes can extend
class Shape {
  // Constructor function that gets called when a new instance of the class is created
  constructor() {
    // Initialize the color property of the Shape instance to black
    this.color = "black";
  }

  // Method to set the color of the shape
  setColor(color) {
    // Update the color property of the Shape instance
    this.color = color;
  }

  // Abstract method that must be implemented by subclasses
  render() {
    // Throw an error if this method is called directly on the Shape class
    throw new Error("Render method must be implemented by the subclass");
  }
}

// Export the Shape class so it can be used in other files
module.exports = Shape;
