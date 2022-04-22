/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/


// Mine
function abbrevName(name){
    let fullName=name.split(' ')
    let firstInitial=fullName.shift().charAt(0)
    let lastInitial=fullName.pop().charAt(0)
    return(`${firstInitial}.${lastInitial}`).toUpperCase();
    }

// Top Rated
function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }