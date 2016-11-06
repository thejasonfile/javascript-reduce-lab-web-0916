const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const monologueLines = [
  'Who are you talking to right now?',
  'Who is it you think you see?',
  'Do you know how much I make a year?',
  'I mean, even if I told you, you wouldn\'t believe it.',
  'Do you know what would happen if I suddenly decided to stop going into work?',
  'A business big enough that it could be listed on the NASDAQ goes belly up.',
  'Disappears!',
  'It ceases to exist without me.',
  'No, you clearly don\'t know who you\'re talking to, so let me clue you in.',
  'I am not in danger, Skyler.',
  'I am the danger.',
  'A guy opens his door and gets shot and you think that of me?',
  'No.',
  'I am the one who knocks!'
];


var totalBatteries = batteryBatches.reduce(function(a,b){
  return a + b;
})



// wordCount is the 'accumulator', inital value being '{}'
// sentence is the curent iteration through the monologueLines array

var wordCountMap = monologueLines.reduce(function(wordCount, sentence){
  var length = sentence.split(' ').length.toString() // find the length of the current sentence
  if (!Object.keys(wordCount).includes(length)){ // if that length is not a current key in wordCount
      wordCount[length] = 1 // create the key in WordCount and set its value to 1
    } else {
      wordCount[length] += 1 // if that length is already a key, then increment its value by 1
    }
    return wordCount; // return the whole accumulator after iterating through all of the sentences
  }, {}); // this sets the initial value of the accumulator to an object

