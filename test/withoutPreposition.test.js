import fs from "fs";

import Mocha from "mocha";
import { expect } from "chai";

import { sing, verse } from "../examples/withoutPreposition.js";

var mocha = new Mocha();

const options = {
  with_preposition: false,
  drink: "milk",
  container: "carton",
};

describe("Test suite", function () {
  it("prints an arbitrary verse", () => {
    const expected = `8 milk cartons on the wall, 8 milk cartons.
Take one down and pass it around, 7 milk cartons on the wall.`;

    expect(verse(8, options)).to.equal(expected);
  });

  it("handles 1 carton", () => {
    const expected = `1 milk carton on the wall, 1 milk carton.
Take it down and pass it around, no more milk cartons on the wall.`;
    expect(verse(1, options)).to.equal(expected);
  });

  it("handles 0 cartons", () => {
    const expected = `No more milk cartons on the wall, no more milk cartons.
Go to the store and buy some more, 99 milk cartons on the wall.`;
    expect(verse(0, options)).to.equal(expected);
  });

  it("sings several verses", () => {
    const expected = `8 milk cartons on the wall, 8 milk cartons.
Take one down and pass it around, 7 milk cartons on the wall.
7 milk cartons on the wall, 7 milk cartons.
Take one down and pass it around, 6 milk cartons on the wall.
6 milk cartons on the wall, 6 milk cartons.
Take one down and pass it around, 5 milk cartons on the wall.`;
    expect(sing(8, 6, options)).to.equal(expected);
  });

  it("sings the rest of the verses", () => {
    const expected = `3 milk cartons on the wall, 3 milk cartons.
Take one down and pass it around, 2 milk cartons on the wall.
2 milk cartons on the wall, 2 milk cartons.
Take one down and pass it around, 1 carton of milk on the wall.
1 carton of milk on the wall, 1 carton of milk.
Take it down and pass it around, no more milk cartons on the wall.
No more milk cartons on the wall, no more milk cartons.
Go to the store and buy some more, 99 milk cartons on the wall.`;
    expect(sing(3, 0, options)).to.equal(expected);
  });
});

mocha.run();
