console.log("Page 32 exercise 5");

var Num = +prompt("Please input a number");
var Counter = 0;

if (Num != 0 && Num != 1 && Num != 2 && Num != 3 && Num != 5 && Num != 7) {
  while (Num % 2 == 0 || Num % 3 == 0 || Num % 5 == 0 || Num % 7 == 0) {
    console.log(Num);
    var Counter = Counter + 1;
    var Num = +prompt("Please input a number");
  }
  console.log("The break number is " + Num);
  console.log("The number of non-prime numbers entered is " + Counter);
} else {
  console.log("The first number " + Num + " is a prime number");
}
