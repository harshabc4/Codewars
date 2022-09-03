// Description:

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//     if x > y: 3 points
//     if x < y: 0 point
//     if x = y: 1 point

// Notes:

//     there are 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

// Mine
using System.Linq;
using System;

public static class Kata {
    public static int TotalPoints(string[] games) {
      int count = 0;
        for(int i = 0; i < games.Length; i++)
          {
          string[] newArr = games[i].Split(":");
          if (Int32.Parse(newArr[0]) > Int32.Parse(newArr[1])) count+=3;
          else if (Int32.Parse(newArr[0]) < Int32.Parse(newArr[1])) count+=0;
          else count+=1;
        }
        return count;
    }
}

// Top Rated
using System.Linq;
using System;
public static class Kata {
    public static int TotalPoints(string[] games) {
        int total = 0;
        foreach (string game in games) {
          if (game[0] > game[2])
            total += 3;
          else if (game[0] == game[2])
            total += 1;            
        }
        return total;
    }
}