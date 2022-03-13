export function sing(start, end) {
  var song = [];

  for (let i = start; i >= end; i--) {
    song.push(verse(i));
  }

  return song.join("\n");
}

export function verse(num) {
  if (num == 0) {
    return (
      "No more bottles of beer on the wall, no more bottles of beer.\n" +
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  } else if (num == 1) {
    return (
      "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles of beer on the wall."
    );
  } else if (num == 2) {
    return (
      "2 bottles of beer on the wall, 2 bottles of beer.\n" +
      "Take one down and pass it around, 1 bottle of beer on the wall."
    );
  } else {
    var newNum = num - 1;
    return (
      num +
      " bottles of beer on the wall, " +
      num +
      " bottles of beer.\n" +
      "Take one down and pass it around, " +
      newNum +
      " bottles of beer on the wall."
    );
  }
}
