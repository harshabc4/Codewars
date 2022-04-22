// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// Mine
var capitals = function (word) {
    let finalArr = []
    let individualLetters = word.split('')
    for(let i = 0; i < individualLetters.length; i++){
      if(individualLetters[i] == individualLetters[i].toUpperCase())
        finalArr.push(i)
      
      }
    return finalArr
  };
  

// Top rated
var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };