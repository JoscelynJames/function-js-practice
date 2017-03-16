function sentenceBuilder(part1, part2, part3) {
  if (typeof part1 !== 'string' || typeof part2 !== 'string' || typeof part3 !== 'string') {
    return 'hey, you have to putin strings';
  }

  return part1 + part2 + part3;
}

console.log(sentenceBuilder('', 2, ' #1'));
console.log(sentenceBuilder('she', ' is', ' fluffy'));
console.log(sentenceBuilder('string', ' smells', ' bad'));

function helloWorld() {
  return 'Hello World';
}

console.log(helloWorld());

function countLetters(word) {
  var count = 0;
  var wordArray = word.split('');

  for (var i = 0; i < wordArray.length; i++) {
    count++;
  }

  return count;
}

countLetters('Missy');

console.log(countLetters('Missy')) ;

function longestWord(arrayOfStrings) {
  var count = 0;
  var word;

  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > count) {
      count = arrayOfStrings[i].length;
      word = arrayOfStrings[i];
    }
  }
  return word;
}

var names = ['Bradford', 'Missy', 'Josce', 'Bradford is the best'];

longestWord(names);

console.log(longestWord(names));
