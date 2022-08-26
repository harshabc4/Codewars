// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// Mine
using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static int[] CountPositivesSumNegatives(int[] input)
    {
      
      int[] ReturnArray = new int [2];
      int[] EmptyArray = new int [0];
      
      if (input == null || input.Length < 1 ) return EmptyArray;
      
      int PositiveCount = 0;
      int NegativeCount = 0;
        for(int i = 0; i < input.Length; i++)
          {
          if (input[i] > 0) PositiveCount++;
          else NegativeCount+= input[i];
        }
      ReturnArray[0] = PositiveCount;
      ReturnArray[1] = NegativeCount;
      return ReturnArray;
    }
}

// Top Rated
using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
    public static int[] CountPositivesSumNegatives(int[] input)
    {
        if(input == null || !input.Any())
        {
            return new int[] {};
        }
        
        int countPositives = input.Count(n => n > 0);
        int sumNegatives = input.Where(n => n < 0).Sum();

        return new int[] { countPositives, sumNegatives };
    }
}