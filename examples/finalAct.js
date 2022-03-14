const DRINK_REGEX = /#drink/;
const CONTAINER_REGEX = /#container/;
const COUNT_REGEX = /#count/;

const DEFAULT_OPTIONS = {
  drink: "beer",
  container: "bottle",
  itemStructure: `#count #container of #drink`,
};

export const sing = (start, end, options = {}) => {
  var song = [];

  for (let i = start; i >= end; i--) {
    song.push(verse(i, options));
  }

  return song.join("\n");
};

export const verse = (num, submittedOptions = {}) => {
  const options = { ...DEFAULT_OPTIONS, ...submittedOptions };

  const { itemAndCount, newItemAndCount } = getItemTerms(num, options);

  const changeTheCount = getChangeTheCount(num);

  return [
    `${capitalize(itemAndCount)} on the wall, ${itemAndCount}.`,
    `${changeTheCount}, ${newItemAndCount} on the wall.`,
  ].join("\n");
};

const getItemTerms = (num, options) => {
  const { drink, itemStructure } = options;

  const { count, newCount } = getCounts(num);

  const itemAndCount = replaceKeywords(
    itemStructure,
    count,
    drink,
    getContainer(num, options)
  );

  const newItemAndCount = replaceKeywords(
    itemStructure,
    newCount,
    drink,
    getContainer(num - 1, options)
  );

  return { itemAndCount, newItemAndCount };
};

const getChangeTheCount = (num) => {
  switch (num) {
    case 0:
      return `Go to the store and buy some more`;
    case 1:
      return `Take it down and pass it around`;
    default:
      return `Take one down and pass it around`;
  }
};

const getCounts = (num) => {
  switch (num) {
    case 0:
      return { count: `no more`, newCount: `99` };
    case 1:
      return { count: `${num}`, newCount: `no more` };
    default:
      return { count: `${num}`, newCount: num - 1 };
  }
};

const getContainer = (num, { container }) =>
  num == 1 ? container : `${container}s`;

const replaceKeywords = (itemStructure, count, drink, container) =>
  itemStructure
    .replace(DRINK_REGEX, drink)
    .replace(CONTAINER_REGEX, container)
    .replace(COUNT_REGEX, count);

const capitalize = (s) => s[0].toUpperCase() + s.slice(1);
