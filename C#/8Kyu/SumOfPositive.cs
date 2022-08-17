// Description:

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Mine
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    int counter = 0;
    for(int i = 0; i < arr.Length; i++)
    {
      if(arr[i] >= 0) counter += arr[i];
    }
    return counter;
  }
}

// Top Rated
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    return arr.Where(x => x > 0).Sum();
  }
}