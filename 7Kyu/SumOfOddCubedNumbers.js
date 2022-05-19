// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// Mine
function cubeOdd(arr) {
    if(!arr.some(isNaN)){
      let oddArr = arr.filter(el => el%2!=0)
    let cubedArr = oddArr.map(num => num**3)
    let summedArr = cubedArr.reduce((acc,c)=> acc+c, 0)
    return summedArr
    }else{
    return undefined;
      }
    }

// Top Rated
let cubeOdd = a => {
    var isNumeric = a.every(x=>!isNaN(x))
    return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
  }

  