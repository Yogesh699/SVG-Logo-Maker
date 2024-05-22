// Import required modules
const fs = require("fs");
const Circle = require("./lib/Circle.js");
const Square = require("./lib/Square.js");

const Svg = require("./lib/SVG.js");
const inquirer = require("inquirer");
const Triangle = require("./lib/Triangle.js");

// Define questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter a Text (up to 3 characters):",
    validate: function (input) {
      // Validate input length
      return input.length === 3 ? true : "Please enter up to 3 characters.";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter Text Color: (Color keyword or Hexadecimal)",
    validate: function (input) {
      // Validate color input using regular expression
      const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
      return colorRegex.test(input)
        ? true
        : "Please enter a valid color keyword or hexadecimal.";
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter Shape Color: (Color keyword or Hexadecimal)",
    validate: function (input) {
      // Validate color input using regular expression
      const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
      return colorRegex.test(input)
        ? true
        : "Please enter a valid color keyword or hexadecimal.";
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Choose which Pixel Image you would like?",
    choices: ["Circle", "Square", "Triangle"],
  },
];

// Function to write data to a file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    console.log(`Generated "${fileName}".`);
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}

// Define shapes and their instances
const shapes = {
  Circle: new Circle(),
  Square: new Square(),
  Triangle: new Triangle(),
};

// Main function to initialize the program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const text = answers["text"];
    const textColor = answers["textColor"];
    const shapeColor = answers["shapeColor"];
    const shape = answers["shape"];
    const svgShape = shapes[shape];
    svgShape.setColor(shapeColor);
    const svg = new Svg(svgShape.render(), textColor, text);

    writeToFile("logo.svg", svg.render());
  });
}

// Call the main function
init();
