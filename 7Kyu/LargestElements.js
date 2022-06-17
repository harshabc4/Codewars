// Description:

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

// Mine
function largest(n,xs){
    let returnArr = []
    let sortedArr = xs.sort((a,b) => b-a)
    for(let i = 0; i < n; i++){
      returnArr.unshift(sortedArr[i])
    }
  return returnArr
}

// Top Rated
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }