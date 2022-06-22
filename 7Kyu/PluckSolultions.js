// Description:

// Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

// For example:

// pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
// pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]


// Mine
function pluck(objs, name) {
    let newArr = []
    objs.forEach(el => newArr.push(el[name]))
    return newArr
  }

// Top Rated
function pluck(objs, name) {
    return objs.map(function(obj) { return obj[name] });
  }