// Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


public class Kata
{
    public static int SumMix(object[] x)
    {
        var number = 0;

        foreach (var val in x)
        {
            number += int.Parse(val.ToString());
        }
        return number;
    }
}

// or

using static System.Convert;
using System.Linq;

class Kata
{
  public static int SumMix(object[] x) => x.Sum(ToInt32);
}