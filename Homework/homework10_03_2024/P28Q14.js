console.log("Page 28 exercise 14");

var OrginalNumber = +prompt("Please input a number");
var OppositeNumber = 0;
var TruncatedNumber = OrginalNumber;
var RightDigit = 0;

while (TruncatedNumber > 0) {
  (RightDigit = TruncatedNumber % 10),
    (OppositeNumber = OppositeNumber * 10 + RightDigit),
    (TruncatedNumber = parseInt(TruncatedNumber / 10));
}
console.log(
  "The opposite number of the number " + OrginalNumber + " is " + OppositeNumber
);
