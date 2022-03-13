import fs from "fs";

import Mocha from "mocha";
import { expect } from "chai";

import { sing, verse } from "../examples/withMilkAndCarton.js";

var mocha = new Mocha();

const options = {
  drink: "milk",
  container: "carton",
};

describe("Test suite", function () {
  it("prints an arbitrary verse", () => {
    const expected = `8 cartons of milk on the wall, 8 cartons of milk.
Take one down and pass it around, 7 cartons of milk on the wall.`;

    expect(verse(8, options)).to.equal(expected);
  });

  it("handles 1 carton", () => {
    const expected = `1 carton of milk on the wall, 1 carton of milk.
Take it down and pass it around, no more cartons of milk on the wall.`;
    expect(verse(1, options)).to.equal(expected);
  });

  it("handles 0 cartons", () => {
    const expected = `No more cartons of milk on the wall, no more cartons of milk.
Go to the store and buy some more, 99 cartons of milk on the wall.`;
    expect(verse(0, options)).to.equal(expected);
  });

  it("sings several verses", () => {
    const expected = `8 cartons of milk on the wall, 8 cartons of milk.
Take one down and pass it around, 7 cartons of milk on the wall.
7 cartons of milk on the wall, 7 cartons of milk.
Take one down and pass it around, 6 cartons of milk on the wall.
6 cartons of milk on the wall, 6 cartons of milk.
Take one down and pass it around, 5 cartons of milk on the wall.`;
    expect(sing(8, 6, options)).to.equal(expected);
  });

  it("sings the rest of the verses", () => {
    const expected = `3 cartons of milk on the wall, 3 cartons of milk.
Take one down and pass it around, 2 cartons of milk on the wall.
2 cartons of milk on the wall, 2 cartons of milk.
Take one down and pass it around, 1 carton of milk on the wall.
1 carton of milk on the wall, 1 carton of milk.
Take it down and pass it around, no more cartons of milk on the wall.
No more cartons of milk on the wall, no more cartons of milk.
Go to the store and buy some more, 99 cartons of milk on the wall.`;
    expect(sing(3, 0, options)).to.equal(expected);
  });
});

mocha.run();
