// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^

// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// Mine
function calc(x){
    let splitArr = x.split('')
    let asciiArr = splitArr.map(el => el.charCodeAt())
    let total1 = asciiArr.join('')
    total1 = total1.split('')
    let total2 = asciiArr.join('')
    total2 = total2.split('')
    for(let i = 0; i<total2.length; i++){
      if(total2[i] == 7){
        total2[i]=1
      }
    //   return total2
    }
    total1=total1.map(Number)
    total2=total2.map(Number)
    total1 =  total1.reduce((acc,c)=>acc+c)
        total2 = total2.reduce((acc,c)=>acc+c)
      return total1-total2
    }

// Top Rated
const calc=x=>(x.replace(/./g,x=>x.charCodeAt()).match(/7/g)||[]).length*6