console.log("                                   PAGE 28 EXERCISE NUMBER 13");

var num = +prompt("Please enter a number for checking");
var numforchacking = +prompt("Please enter the number for checking");
var numberoftime = 0;
var newnum = num;

// while (parseInt(num / 10) > 0) {
while (num > 0) {
  if (num % 10 == numforchacking) {
    numberoftime++;
  }
  num = parseInt(num / 10);
}
// if (num % 10 == numforchacking) {
//   numberoftime++;
// }
console.log(
  "The number of times thet the digit " +
    numforchacking +
    " appears in the number" +
    newnum +
    " is " +
    numberoftime
);
