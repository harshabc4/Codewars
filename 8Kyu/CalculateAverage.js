// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// Mine
function find_average(array) {
    if (array.length === 0){
      return 0;
    }else{
    let sum = array.reduce((a, b) => (a + b))
    let average = sum / array.length
    return average;
  }}



// Top Rated
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }