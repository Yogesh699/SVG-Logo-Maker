const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/Circle.js');
const Square = require('./lib/Square.js');
const Triangle = require('./lib/Traingle.js');
const Svg = require('./lib/SVG.js');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter a Text (up to 3 characters):",
        validate: function (input) {
            return input.length === 3 ? true : "Please enter up to 3 characters.";
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter Text Color: (Color keyword or Hexadecimal)",
        validate: function (input) {
            const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
            return colorRegex.test(input) ? true : "Please enter a valid color keyword or hexadecimal.";
        },
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter Shape Color: (Color keyword or Hexadecimal)",
        validate: function (input) {
            const colorRegex = /^#([0-9A-Fa-f]{3}){1,2}$|^[a-zA-Z]+$/;
            return colorRegex.test(input) ? true : "Please enter a valid color keyword or hexadecimal.";
        },
    },
    {
        type: "list",
        name: "shape",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        console.log(`Generated "${fileName}".`);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

const shapes = {
    Circle: new Circle(),
    Square: new Square(),
    Triangle: new Triangle()
}

function init(){
    inquirer.prompt(questions).then((answers) => {
        const text = answers['text'];
        const textColor = answers['textColor'];
        const shapeColor = answers['shapeColor'];
        const shape = answers['shape']
        const svgShape = shapes[shape]
        svgShape.setColor(shapeColor)
        const svg = new Svg(svgShape.render(), textColor, text)

        writeToFile("logo.svg",svg.render())
    });
}

init();