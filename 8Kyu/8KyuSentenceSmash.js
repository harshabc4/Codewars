// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Mine
function smash (words) {
    if (words.length === 0){
      return('')
    }else if(words.length === 1){
      return(words.join())
    }else{
    let fullSentence=[words[0]]
     for(let i = 1; i < words.length; i++){
       fullSentence += ` ${words[i]}`
     }
    return fullSentence
      }
  };

// Top Rated
smash = function (words) {
    return words.join(" ");
  };