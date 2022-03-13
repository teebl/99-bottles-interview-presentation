import fs from "fs";

import Mocha from "mocha";
import { expect } from "chai";

import { sing, verse } from "../examples/withMilk.js";

var mocha = new Mocha();

describe("Test suite", function () {
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

mocha.run();
