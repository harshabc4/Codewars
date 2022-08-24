Description:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

// Mine
public class Kata
{
  public static string AbbrevName(string name)
  {
    string [] nameArr = name.Split(' ');
    char firstLetter = nameArr[0][0];
    firstLetter = char.ToUpper(firstLetter);
    char secondLetter = nameArr[1][0];
    secondLetter = char.ToUpper(secondLetter);
    return ($"{firstLetter}.{secondLetter}");
  }
}

// Top Rated
using System;
using System.Linq;
public class Kata
{
       public static string AbbrevName(string name) => string.Join(".", name.Split(' ').Select(w => w[0])).ToUpper();
}