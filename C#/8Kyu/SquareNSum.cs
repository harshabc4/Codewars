// Description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Mine
using System.Linq;

public static class Kata
{
  public static int SquareSum(int[] numbers)
  { 
   int[] squaredNums = numbers.Select(el => el*el).ToArray();
    int sum = squaredNums.Sum();
    return sum;
  }
}

// Top Rated
using System.Linq;
public static class Kata
{
  public static int SquareSum(int[] n) => n.Sum(i => i * i);
}