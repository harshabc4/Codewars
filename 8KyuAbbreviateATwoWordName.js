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