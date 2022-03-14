const defaultOptions = {
  drink: "beer",
  container: "bottle",
  withPreposition: true,
};

export const sing = (start, end, options = {}) => {
  var song = [];

  for (let i = start; i >= end; i--) {
    song.push(verse(i, options));
  }

  return song.join("\n");
};

export const verse = (num, options = {}) => {
  const { drink, container, withPreposition } = {
    ...defaultOptions,
    ...options,
  };

  const items = withPreposition
    ? `${container}s of ${drink}`
    : `${drink} ${container}s`;
  const item = withPreposition
    ? `${container} of ${drink}`
    : `${drink} ${container}`;

  const newNum = num - 1;

  switch (num) {
    case 0:
      return [
        `No more ${items} on the wall, no more ${items}.`,
        `Go to the store and buy some more, 99 ${items} on the wall.`,
      ].join("\n");
    case 1:
      return [
        `1 ${item} on the wall, 1 ${item}.`,
        `Take it down and pass it around, no more ${items} on the wall.`,
      ].join("\n");
    case 2:
      return [
        `2 ${items} on the wall, 2 ${items}.`,
        `Take one down and pass it around, 1 ${item} on the wall.`,
      ].join("\n");
    default:
      return [
        `${num} ${items} on the wall, ${num} ${items}.`,
        `Take one down and pass it around, ${newNum} ${items} on the wall.`,
      ].join("\n");
  }
};
