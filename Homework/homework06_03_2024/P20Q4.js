console.log(
  "======================================עמוד 20 תרגיל 4====================================="
);
var num = +prompt("Please input a number");
var numdigits = 1;
while (parseInt(num / 10) != 0) {
  num = parseInt(num / 10);
  numdigits++;
}

console.log("The number of digits in the input is: " + numdigits);
