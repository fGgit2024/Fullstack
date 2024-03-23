console.log("                       PAGE 27 EXERCISE NUMBER 10");

var num = +prompt("Please input a number");
var leftdigit = 0;

console.log(num);

while (parseInt(num / 10) > 0) {
  leftdigit = parseInt(num / 10);
  num = parseInt(num / 10);
  console.log(num);
}
console.log("The left digit of the input number is: " + leftdigit);
console.log("                                    End");
