console.log(
  "==================================Homework 13/03/2024 page 37 Q no' 17"
);

var Num = +prompt("Please input a number for checking");

var HighestNumber = 0;
var NumberOccurrences = 0;
var FirstSerialNumber = 0;

// console.log("The number for checking is " + Num);

for (SerialNumber = 1; SerialNumber <= Num; SerialNumber = SerialNumber + 1) {
  // console.log("The serial number is " + SerialNumber);
  var NewNum = +prompt("Please input a number");
  if (NewNum > HighestNumber) {
    // console.log("The input number is " + NewNum);
    HighestNumber = NewNum;
    // console.log("The new highest Number is " + HighestNumber);
    NumberOccurrences = 1;
    FirstSerialNumber = SerialNumber;
    // console.log(
    //   "The first serial number of the new highest Number is " +
    //     FirstSerialNumber
    // );
    // console.log("End of loop NewNum > HighestNumber");
  } else {
    if (NewNum == HighestNumber) {
      NumberOccurrences = NumberOccurrences + 1;
      // console.log(
      //   "The new number = highest number. The number occurrences of the highest number is " +
      //     NumberOccurrences
      // );
      // console.log("End of loop NewNum == HighestNumber");
    }
  }
}
console.log(
  "The highest number is " +
    HighestNumber +
    ".The first serial number of the highest number is " +
    FirstSerialNumber +
    ". The number occurrences of the highest number is " +
    NumberOccurrences
);
