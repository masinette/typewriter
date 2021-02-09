const sentence = "Hello there from Lighthouse Labs\n";

const printSentence = function() {
  //iterate through sentence, letter by letter
  for (let i = 0; i < sentence.length; i++) {
    //print each letter to console, and increment delay after each letter
    setTimeout(() => process.stdout.write(sentence[i]), 50 * i);
  }
};
//call function
printSentence(sentence);