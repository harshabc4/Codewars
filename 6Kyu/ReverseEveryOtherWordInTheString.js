// Description:

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// Mine
function reverse(str) {
  return str
    .split(" ")
    .map((el, i) => (i % 2 ? el.split("").reverse().join("") : el))
    .join(" ")
    .trim();
}

// Top Rated
function reverse(str) {
  let arr = str.split(" ");

  for (var i = 1; i < arr.length; i += 2) {
    arr[i] = arr[i].split("").reverse().join("");
  }

  return arr.join(" ").trim();
}
