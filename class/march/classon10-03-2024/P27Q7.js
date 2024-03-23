console.log("                       PAGE 27 EXERCISE NUMBER 7");

var num = +prompt("Please input a number");
var highestnumber = 0;

while (num > 0) {
  if (num > highestnumber) {
    highestnumber = num;
  }
  num = +prompt("Please input a number");
}
console.log("The highest number is : " + highestnumber);
