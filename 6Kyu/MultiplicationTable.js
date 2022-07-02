// Description:

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// Mine
multiplicationTable = function(size) {
    let newArr = []
      for(let i = 1, counter = 1; counter <= size;i++, counter++){
      
        for(let j = 1; j <= size; j++){
          newArr.push(i*j)
        }
      }
    let finalArr=[]
    for(let i = 0; i < size; i++){
      finalArr.push(newArr.slice(i*size,(i+1)*size))
    }
    return finalArr
  }

// Top Rated
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }