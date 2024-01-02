# SVG Logo Maker

This Node.js command-line application allows freelance web developers to generate simple logos for their projects without the need for a graphic designer. Users can customize the logo by choosing text, text color, shape, and shape color. The generated logo is saved as an SVG file.

![image](https://github.com/Yogesh699/SVG-Logo-Maker/assets/143371945/bc91c3c8-55d6-4c04-8b06-1ea2d12d70f1)


## Getting Started

1. **Clone this repository to your local machine.**

    ```bash
    git clone https://github.com/Yogesh699/SVG-Logo-Maker.git
    ```

2. **Install dependencies.**

    ```bash
    npm install
    ```

3. **Run the application.**

    ```bash
    node index.js
    ```

## Directory Structure

```bash
├── examples/           // Example SVG file(s) created with the app
├── lib/                // Folder for classes or functions
│   ├── shapes.js       // Shape
│   ├── shapes.test.js  // Jest tests for shapes
│   ├── Traingle.js  // Traingle
│   ├── Square.js  // Square
│   ├── SVG.js  // SVG.js
│   └── Circle.js         // Circle
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions
```


## User Instructions

1. When prompted for text, enter up to three characters.
2. When prompted for text color, enter a color keyword or a hexadecimal number.
3. When prompted for a shape, choose from the list: circle, triangle, or square.
4. When prompted for the shape's color, enter a color keyword or a hexadecimal number.
5. After entering all the prompts, an SVG file named `logo.svg` will be created.
6. The output text "Generated logo.svg" will be printed in the command line.

## Testing

This application uses Jest for unit tests. To run the tests:

```bash
npm test

## Author
Contact: If you have additional questions or concerns, feel free to reach out to me at yogesh.ye63@gmail.com.
