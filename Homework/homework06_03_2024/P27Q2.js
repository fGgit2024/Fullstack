console.log(
  "======================================עמוד 27 תרגיל 2====================================="
);
var num1 = +prompt("Please input first number");
var num2 = +prompt("Please input secound number");
if (num1 > num2) {
  while (num2 <= num1) {
    console.log(num2), num2++;
  }
} else {
  while (num1 <= num2) {
    console.log(num1), num1++;
  }
}
