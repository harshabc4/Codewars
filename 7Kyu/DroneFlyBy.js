// Description:

// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

// Mine
function flyBy(lamps, drone) {
  let droneLocation = drone.indexOf("T");
  return lamps
    .split("")
    .map((el, i) => (i <= droneLocation ? "o" : "x"))
    .join("");
}

// Top Rated
const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);
