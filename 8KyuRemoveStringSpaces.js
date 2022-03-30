// Simple, remove the spaces from the string, then return the resultant string.

// Mine
const noSpace = x => x.split(' ').join('')


// Top Rated
function noSpace(x){
    return x.replace(/\s/g, '');
  }