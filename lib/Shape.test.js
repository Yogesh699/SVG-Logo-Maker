const Circle = require("./Circle.js");
const Square = require("./Square.js");
const Triangle = require("./Triangle.js");

test("Test 1", () => {
  const shape = new Circle();
  const color = "red";
  shape.setColor(color);
  expect(shape.render()).toEqual(
    `<circle cx="150" cy="100" r="50" fill="${color}" />`
  );
});

test("Test 2", () => {
  const shape = new Square();
  const color = "red";
  shape.setColor(color);
  expect(shape.render()).toEqual(
    `<rect x="100" y="50" width="100" height="100" fill="${color}" />`
  );
});

test("Test 3", () => {
  const shape = new Triangle();
  const color = "red";
  shape.setColor(color);
  expect(shape.render()).toEqual(
    `<polygon points="150,18 244,182 56,182" fill="${color}" />`
  );
});
