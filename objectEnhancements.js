/* Same Keys  and Values */

function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

/* Same keys and values ES2015 */
function createInstructorES2015(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

/*Computed Property Names */
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

/*Computer Proptery Names ES2015 */

let favoriteNumber = 37;

const instructor = {
  firstName: "Colt's Brother",
  [favoriteNumber]: "That's my favorite!",
};

/* Object Methods */
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};

/* Object Methods ES2015 */
const speakingInstructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says Bye!";
  },
};

/* createAnimal Function */
const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

/* createAnimal Function ES2015 Enhancement*/
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
