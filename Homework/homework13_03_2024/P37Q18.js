console.log(
  "==================================Homework 13/03/2024 page 37 Q no' 18"
);
var Num = +prompt("Please input a number for checking");
if (isNaN(Num)) {
  alert("Please input numbers only");
} else {
}

var HighestNumber = 0;
var SecoundHighestNumber = 0;
var SecoundLastSerialNumber = -1;
var HighestSerialNumber = 0;

console.log(
  "The number of input numbers for founding the secound highest number is : " +
    Num
);

for (SerialNumber = 1; SerialNumber <= Num; SerialNumber++) {
  console.log("The seral number is: " + SerialNumber);
  var NewNum = +prompt("Please input a number");
  console.log("The input number is " + NewNum);
  if (NewNum > HighestNumber) {
    console.log("loop NewNum > HighestNumber");
    SecoundHighestNumber = HighestNumber;
    HighestNumber = NewNum;
    SecoundLastSerialNumber = HighestSerialNumber;
    HighestSerialNumber = SerialNumber;
    console.log("The new secound highest number is " + SecoundHighestNumber);
    console.log("The new highest Number is " + NewNum);
    console.log(
      "The new secound last serial number is " + SecoundLastSerialNumber
    );
    console.log("The new highest serial number is " + HighestSerialNumber);
    console.log("End of loop NewNum > HighestNumber");
  } else {
    if (NewNum == HighestNumber) {
      console.log("loop NewNum = HighestNumber");
      console.log("Highses number is " + HighestNumber);
      HighestSerialNumber = SerialNumber;
      console.log("The new highest serial number is " + HighestSerialNumber);
      console.log("End of loop NewNum = HighestNumber");
    } else {
      if (SecoundHighestNumber <= NewNum && SerialNumber > 1) {
        console.log("loop SecoundHighestNumber < NewNum");
        SecoundHighestNumber = NewNum;
        console.log(
          "The new secound highest Number is " + SecoundHighestNumber
        );
        SecoundLastSerialNumber = SerialNumber;
        console.log(
          "The new secound last serial number is: " + SecoundLastSerialNumber
        );
        console.log("End of loop SecoundHighestNumber < NewNum");
      }
    }
  }
}
console.log(
  "The secound highest number is " +
    SecoundHighestNumber +
    ". The last serial number of the secound highest number is " +
    SecoundLastSerialNumber
);
