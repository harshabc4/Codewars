// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// Mine
function fakeBin(x){
    let individualNumbersAsStrings = x.split('')
    let individualNumbers = individualNumbersAsStrings.map(Number)
    for (let i = 0; i < individualNumbers.length; i++){
      if(individualNumbers[i]<5){
        individualNumbers[i] = 0
      }else{
        individualNumbers[i] = 1
      }
    }
          return(individualNumbers.join(''))
  }

// Top
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}