// Description:

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

// Mine
public class Kata
{
  public static string Well(string[] x)
  {
    int count = 0;
    for(int i = 0; i < x.Length; i++)
      {
      if (x[i] == "good")count++;
    }
    if(count == 1 || count == 2 )return "Publish!";
      else if( count>2)return "I smell a series!";
    else return "Fail!";
  }
}

// Top Rated
using System.Linq;

public class Kata
{
  public static string Well(string[] x)
  {
    int count = x.Count(v => v == "good");
    return (count > 2) ? "I smell a series!" : (count >= 1) ? "Publish!" : "Fail!";
  }
}