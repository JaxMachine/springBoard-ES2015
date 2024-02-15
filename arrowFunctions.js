// ES5 Map Callback

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// ES2015 Arrow Functions Shorthand

function doubleArrow(arr) {
  return arr.map((val) => {
    return val * 2;
  });
}

// Refactor the following function to use arrow functions:

//Odd Version
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

//Refractor
const squareAndFindEvensArrow = (numbers) =>
  numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);
