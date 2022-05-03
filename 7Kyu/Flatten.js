// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// Mine
var flatten = function (array){

    let flat = [];
    for (var i = 0; i < array.length; i++) {
        flat = flat.concat(array[i]);
    }
    return flat;
}

// Top Rated
var flatten = function (lol){
    return [].concat.apply([],lol);
  }