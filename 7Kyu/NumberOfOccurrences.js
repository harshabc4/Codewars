Write a function that returns the number of occurrences of an element in an array.
Examples

var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;


// Mine
Array.prototype.numberOfOccurrences = function(val) {
    let score = 0
    for(let i = 0; i < this.length; i++){
      if(this[i] === val){
        score++
      }
    }
    return score
  }

  
// Top Rated
Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
  }