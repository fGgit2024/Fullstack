console.log("Page 31 exercise 2");

var a = +prompt("Please input the first number");
var b = +prompt("Please input the secound number");
var p = 1;

while (b > 0) {
  var m = 0;
  var t = a;
  while (t > 0) {
    var m = m + p;
    var t = t - 1;
  }
  var p = m;
  var b = b - 1;
}
console.log("p = " + p);
