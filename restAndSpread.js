//Old Function

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

/* Write an ES2015 Version */
const filterOutOddsES2015 = (...args) => args.filter((v) => v % 2 === 0);

//findMin
const findMin = (...args) => Math.min(...args);

// mergeObject
const mergeObjects = (objA, objB) => ({ ...objA, ...objB });

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];

//Slice and Dice Portion

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

/* removeRandom Arrow Refractor */

const removeRandomArrow = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

/* extend Arrow Refractor */
const extendArrow = (array1, array2) => {
  return [...array1, array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/* addKeyValArrow Refractor */
const addKeyValArrow = (obj, key, vak) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
}

/* removeKey Arrow Refractor */
const removeKeyArrow = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

/** Combine two objects and return a new object. */

function combine(objA, objB) {
  return { ...objA, ...objB };
}

/* combine Arrow Refeactor */
const combineArrow = (objA, objB) => {
  return { ...objA, ...objB };
};

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/* update Arrow Refractor */

const updateArrow = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
