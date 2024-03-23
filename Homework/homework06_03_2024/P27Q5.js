console.log(
  "======================================עמוד 27 תרגיל 5====================================="
);
var Num = +prompt("Please input a number");
var Sum = 0;

while (Num != -99) {
  Sum = Sum + Num;
  var Num = +prompt("Please input a number");
}
console.log("The Sum of the all inputs numbers is: " + Sum);
