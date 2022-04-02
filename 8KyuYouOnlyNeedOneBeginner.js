// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// Mine
const check = (a,x) => a.filter(element => element === x).length > 0 ? true : false


// Top Rated
const check = (a,x) => a.includes(x);