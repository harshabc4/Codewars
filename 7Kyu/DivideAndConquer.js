// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// Mine
function divCon(x){
    let numArray = x.filter(el => typeof el === 'number')
    let stringArray = x.filter(el => typeof el === 'string')
    let numSum = numArray.reduce((acc,c)=> acc + c, 0)
    let stringToNums = stringArray.map(el => Number(el))
    let stringSum = stringToNums.reduce((acc,c)=> acc + c, 0)
    return numSum - stringSum
   }

// Top Rated
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }

  