//Page 35 Q4

var Num = +prompt("Enter a number");
sum = 0;
console.log("Num input = " + Num);
console.log("sum = " + sum);
// for (numberForCheck = 3; numberForCheck <= Num; numberForCheck++) {
for (
  numberForCheck = 3;
  numberForCheck <= Num;
  numberForCheck = numberForCheck + 3
) {
  console.log("numForCheck = " + numberForCheck);
  if (numberForCheck % 3 == 0) {
    var sum = sum + numberForCheck;
    console.log("Interim sum = " + sum);
  }
}
console.log("Final sum = " + sum);
