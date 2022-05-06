// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

// Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

// Mine
function keysAndValues(data){
    let data1=[]
    let data2=[]
    let allData=[]
  for(const property in data) {
    data1.push(property)
    data2.push(data[property])
    }
    allData.push(data1)
    allData.push(data2)
    return allData
  }

// Top Rated
function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}