const defaultOptions = {
  drink: "beer",
  container: "bottle",
};

export const sing = (start, end, options = {}) => {
  var song = [];

  for (let i = start; i >= end; i--) {
    song.push(verse(i, options));
  }

  return song.join("\n");
};

export const verse = (num, options = {}) => {
  const { drink, container } = { ...defaultOptions, ...options };

  const newNum = num - 1;

  switch (num) {
    case 0:
      return [
        `No more ${container}s of ${drink} on the wall, no more ${container}s of ${drink}.`,
        `Go to the store and buy some more, 99 ${container}s of ${drink} on the wall.`,
      ].join("\n");
    case 1:
      return [
        `1 ${container} of ${drink} on the wall, 1 ${container} of ${drink}.`,
        `Take it down and pass it around, no more ${container}s of ${drink} on the wall.`,
      ].join("\n");
    case 2:
      return [
        `2 ${container}s of ${drink} on the wall, 2 ${container}s of ${drink}.`,
        `Take one down and pass it around, 1 ${container} of ${drink} on the wall.`,
      ].join("\n");
    default:
      return [
        `${num} ${container}s of ${drink} on the wall, ${num} ${container}s of ${drink}.`,
        `Take one down and pass it around, ${newNum} ${container}s of ${drink} on the wall.`,
      ].join("\n");
  }
};
