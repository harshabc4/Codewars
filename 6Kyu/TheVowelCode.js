// Description:

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// Mine
function encode(string) {
  let splitString = string.split("");
  for (let i = 0; i < string.length; i++) {
    switch (splitString[i]) {
      case "a":
        splitString[i] = 1;
        break;
      case "e":
        splitString[i] = 2;
        break;
      case "i":
        splitString[i] = 3;
        break;
      case "o":
        splitString[i] = 4;
        break;
      case "u":
        splitString[i] = 5;
        break;
    }
  }
  return splitString.join("");
}

function decode(string) {
  let splitString = string.split("");
  console.log(splitString);
  for (let i = 0; i < string.length; i++) {
    switch (splitString[i]) {
      case "1":
        splitString[i] = "a";
        break;
      case "2":
        splitString[i] = "e";
        break;
      case "3":
        splitString[i] = "i";
        break;
      case "4":
        splitString[i] = "o";
        break;
      case "5":
        splitString[i] = "u";
        break;
    }
  }
  return splitString.join("");
}

// Highly Rated
const table = ["a", "e", "i", "o", "u"];
const encode = (string) =>
  string
    .split("")
    .map((x) => table.indexOf(x) + 1 || x)
    .join("");
const decode = (string) =>
  string
    .split("")
    .map((x) => table[Number(x) - 1] || x)
    .join("");
