import fs from "fs";

import Mocha from "mocha";
import { expect } from "chai";

import { sing, verse } from "../examples/finalAct.js";

var mocha = new Mocha();

describe("Test suite", function () {
  describe("Milk cartons", function () {
    const options = {
      itemStructure: `#count #drink #container`,
      drink: "milk",
      container: "carton",
    };

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
Take one down and pass it around, 1 milk carton on the wall.
1 milk carton on the wall, 1 milk carton.
Take it down and pass it around, no more milk cartons on the wall.
No more milk cartons on the wall, no more milk cartons.
Go to the store and buy some more, 99 milk cartons on the wall.`;
      expect(sing(3, 0, options)).to.equal(expected);
    });
  });

  describe("Milk", function () {
    const options = {
      drink: "milk",
    };

    it("prints an arbitrary verse", () => {
      const expected = `8 bottles of milk on the wall, 8 bottles of milk.
Take one down and pass it around, 7 bottles of milk on the wall.`;

      expect(verse(8, options)).to.equal(expected);
    });

    it("handles 1 bottle", () => {
      const expected = `1 bottle of milk on the wall, 1 bottle of milk.
Take it down and pass it around, no more bottles of milk on the wall.`;
      expect(verse(1, options)).to.equal(expected);
    });

    it("handles 0 bottles", () => {
      const expected = `No more bottles of milk on the wall, no more bottles of milk.
Go to the store and buy some more, 99 bottles of milk on the wall.`;
      expect(verse(0, options)).to.equal(expected);
    });

    it("sings several verses", () => {
      const expected = `8 bottles of milk on the wall, 8 bottles of milk.
Take one down and pass it around, 7 bottles of milk on the wall.
7 bottles of milk on the wall, 7 bottles of milk.
Take one down and pass it around, 6 bottles of milk on the wall.
6 bottles of milk on the wall, 6 bottles of milk.
Take one down and pass it around, 5 bottles of milk on the wall.`;
      expect(sing(8, 6, options)).to.equal(expected);
    });

    it("sings the rest of the verses", () => {
      const expected = `3 bottles of milk on the wall, 3 bottles of milk.
Take one down and pass it around, 2 bottles of milk on the wall.
2 bottles of milk on the wall, 2 bottles of milk.
Take one down and pass it around, 1 bottle of milk on the wall.
1 bottle of milk on the wall, 1 bottle of milk.
Take it down and pass it around, no more bottles of milk on the wall.
No more bottles of milk on the wall, no more bottles of milk.
Go to the store and buy some more, 99 bottles of milk on the wall.`;
      expect(sing(3, 0, options)).to.equal(expected);
    });
  });

  describe("withPreposition", function () {
    it("prints an arbitrary verse", () => {
      const expected = `8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.`;

      expect(verse(8)).to.equal(expected);
    });

    it("handles 1 bottle", () => {
      const expected = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`;
      expect(verse(1)).to.equal(expected);
    });

    it("handles 0 bottles", () => {
      const expected = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
      expect(verse(0)).to.equal(expected);
    });

    it("sings several verses", () => {
      const expected = `8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.
7 bottles of beer on the wall, 7 bottles of beer.
Take one down and pass it around, 6 bottles of beer on the wall.
6 bottles of beer on the wall, 6 bottles of beer.
Take one down and pass it around, 5 bottles of beer on the wall.`;
      expect(sing(8, 6)).to.equal(expected);
    });

    it("sings the rest of the verses", () => {
      const expected = `3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
      expect(sing(3, 0)).to.equal(expected);
    });

    it("sings all the verses", () => {
      const song = sing(99, 0);
      expect(song).to.equal(fs.readFileSync("99_bottles_song.txt").toString());
    });
  });

  describe("Standard", function () {
    it("prints an arbitrary verse", () => {
      const expected = `8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.`;

      expect(verse(8)).to.equal(expected);
    });

    it("handles 1 bottle", () => {
      const expected = `1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.`;
      expect(verse(1)).to.equal(expected);
    });

    it("handles 0 bottles", () => {
      const expected = `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
      expect(verse(0)).to.equal(expected);
    });

    it("sings several verses", () => {
      const expected = `8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.
7 bottles of beer on the wall, 7 bottles of beer.
Take one down and pass it around, 6 bottles of beer on the wall.
6 bottles of beer on the wall, 6 bottles of beer.
Take one down and pass it around, 5 bottles of beer on the wall.`;
      expect(sing(8, 6)).to.equal(expected);
    });

    it("sings the rest of the verses", () => {
      const expected = `3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
      expect(sing(3, 0)).to.equal(expected);
    });

    it("sings all the verses", () => {
      const song = sing(99, 0);
      expect(song).to.equal(fs.readFileSync("99_bottles_song.txt").toString());
    });
  });
});

mocha.run();
