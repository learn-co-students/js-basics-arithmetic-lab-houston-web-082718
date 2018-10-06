/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

/*Create a variable named newID that adds 1000000000 to the value in oldID*/
const newID = oldID + 1000000000;

/*Create a variable named ageIsValid that checks whether the value in currentAge is a valid integer*/
const ageIsValid = Number.isInteger(currentAge);

/*randomNumber, which should contain a randomly-generated number between 0 (inclusive) and 20 (exclusive)*/
const randomNumber = Math.random()*20;

/*randomInteger, which should take the value in randomNumber and round it down to the nearest integer*/
const randomInteger = Math.floor(randomNumber);

/*randomUserID, which should convert randomInteger into a valid ID number — an integer between 1000000001 and 1000000020*/
const randomUserID = randomInteger + 1000000000;