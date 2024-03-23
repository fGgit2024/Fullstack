console.log(
  "==================================Homework 13/03/2024 page 35 Q no'8"
);

var Num = +prompt("Please input a number");
var Sum = 0;

for (Index = 4; Index <= Num; Index = Index + 4) {
  if (Index % 4 == 0) {
    console.log("4=> " + Index);
    Sum = Sum + Index;
  }
  if (Index % 7 == 0) {
    console.log("7=> " + Index);
    Sum = Sum + Index;
  }
}
console.log(
  "The sum of the numbers that are divisible by 4 and/or sevev is :" + Sum
);
