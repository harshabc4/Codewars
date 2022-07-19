// Description:

// Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

// In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

// 'X' --> busy
// 'O' --> empty

// If all rooms are busy, return "None available!"

// Mine
function meeting(x) {
  return x.includes("O") ? x.indexOf("O") : "None available!";
}

// Top Rated
function meeting(x) {
  var idx = x.indexOf("O");
  return idx === -1 ? "None available!" : idx;
}
