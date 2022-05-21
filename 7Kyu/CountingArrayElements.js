// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

// Mine
function count(array){
    let counts = {};
    for (let i = 0; i < array.length; i++) {
        counts[array[i]] = 1 + (counts[array[i]] || 0);
    }
      return counts
    }

// Top Rated
function count(array){
    return array.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
  }