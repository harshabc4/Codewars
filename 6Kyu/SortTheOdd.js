// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Mine
function sortArray(array) {
    let sortedArr=[]
    let oddIndex=0
    let evenIndex=0
    let oddArr= array.filter(el=>el%2 != 0)
    let evenArr=array.filter(el => el%2 == 0)
    oddArr.sort((a,b)=> a-b)
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 != 0){
            sortedArr.push(oddArr[oddIndex])
            oddIndex++
        }else{
            sortedArr.push(evenArr[evenIndex])
            evenIndex++
        }
    }
    return sortedArr
}

// Top Rated
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }