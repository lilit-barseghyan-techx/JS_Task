//Declaring variables
const firstName = "Lilit";
const lastName = "Barseghyan";
const birthYear = 2003;
let currentYear = 2025;
let isStudent = true;
const hobbies = ["reading", "drawing", "guitar"];
const contact = {
  email: "lilit.barseghyan.techx@gmail.com",
  phone: "123-456-7890",
  city: "Ashtarak"
};

//Log personal info
console.log(
  `Hi, my name is ${firstName} ${lastName}. I live in ${contact.city}.`
);
console.log(
  `I am ${currentYear - birthYear} years old and currently ${
    isStudent ? "a student" : "not a student"
  }.`
);


// Type Coercion & Comparison
const ageString = "25";
const ageNumber = 25;

console.log(ageString == ageNumber);
console.log(ageString === ageNumber);

console.log(typeof ageString);
console.log(typeof ageNumber);

//Grading (if/else)
const score = 85;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}


//Switch Statements
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent work!");
    break;
  case "B":
    console.log("Good job!");
    break;
  case "C":
    console.log("Keep improving.");
    break;
  case "D":
    console.log("Try harder.");
    break;
  case "F":
    console.log("Needs serious effort.");
    break;
  default:
    console.log("Invalid grade.");
}


//Ternary operator
const result =
  grade == "A" || grade == "B" || grade == "C" ? "You passed" : "You failed";
console.log(result);