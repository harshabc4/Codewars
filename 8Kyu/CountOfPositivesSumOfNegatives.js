// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// Mine
function countPositivesSumNegatives(input) {
  let finalArr = []
if(input == null || input.length === 0){
  return finalArr
}else{
  let countPositives = input.filter(x => x >0)
  finalArr.unshift(countPositives.length)
  let negArray = input.filter (x => x < 0)
  let sumNegatives = negArray.reduce((acc, c) => acc + c, 0)
  finalArr.push(sumNegatives)
  return finalArr;
  }
}

// Top Rated

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}