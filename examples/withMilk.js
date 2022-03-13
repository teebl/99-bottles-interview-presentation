const defaultOptions = {
  drink: "beer",
};

export const sing = (start, end, options = defaultOptions) => {
  var song = [];

  for (let i = start; i >= end; i--) {
    song.push(verse(i, options));
  }

  return song.join("\n");
};

export const verse = (num, options = defaultOptions) => {
  const { drink } = options;

  const newNum = num - 1;

  switch (num) {
    case 0:
      return [
        `No more bottles of ${drink} on the wall, no more bottles of ${drink}.`,
        `Go to the store and buy some more, 99 bottles of ${drink} on the wall.`,
      ].join("\n");
    case 1:
      return [
        `1 bottle of ${drink} on the wall, 1 bottle of ${drink}.`,
        `Take it down and pass it around, no more bottles of ${drink} on the wall.`,
      ].join("\n");
    case 2:
      return [
        `2 bottles of ${drink} on the wall, 2 bottles of ${drink}.`,
        `Take one down and pass it around, 1 bottle of ${drink} on the wall.`,
      ].join("\n");
    default:
      return [
        `${num} bottles of ${drink} on the wall, ${num} bottles of ${drink}.`,
        `Take one down and pass it around, ${newNum} bottles of ${drink} on the wall.`,
      ].join("\n");
  }
};
