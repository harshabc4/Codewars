// Description:

// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]

// Mine
const opposite =
  (f) =>
  (...args) =>
    !f(...args);

function reject(array, predicate) {
  return array.filter(opposite(predicate));
}

// Top Rated
function reject(array, iterator) {
  return array.filter(function (x) {
    return !iterator(x);
  });
}
