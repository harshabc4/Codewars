// Description:

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// Mine
using System;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    int counter = 0;
    foreach (bool sheep in sheeps) 
      {
      if (sheep == true)
        {
          counter ++;
        }
      }
    return counter;
  }
}

// Top Rated
using System;
using System.Linq;

public static class Kata
{
  public static int CountSheeps(bool[] sheeps)
  {
    return sheeps.Count(s => s);
  }
}