console.log("+++++++++++++++++++++++++++++++Page 57 exercise no' 7");

// var number = 1;
// var string = "a";
// var symbole = "@";
// var boolean = true;

// console.log("typeof(number) =" + typeof number);
// console.log("typeof(string) =" + typeof string);
// console.log("typeof(symbol) =" + typeof symbol);
// console.log("typeof(boolean) =" + typeof boolean);

// var InputIntegritiy = 0;
// while (InputIntegritiy == 0) {
//   // console.log("(1)The InputIntegritiy is: " + InputIntegritiy);
//   var NumOfData = prompt("Please input the array size");
//   // console.log("NumOfData = " + NumOfData);
//   if (isNaN(NumOfData)) {
//     alert(
//       "The input " + NumOfData + " is not a number. Please input numbers only"
//     );
//   } else {
//     InputIntegritiy = 1;
//     console.log("(1)The NumOfData is: " + NumOfData);
//     // console.log("(2)The InputIntegritiy is: " + InputIntegritiy);
//   }
// }

function ChackDataType(NumOfData) {
  // console.log("(3)The NumOfData is : " + NumOfData);
  var TheArray = [
    true,
    true,
    1,
    2,
    3,
    4,
    "s",
    "a",
    "!",
    "dkjhfd",
    () => {},
    "aaaaa",
    9375,
    {},
    [],
    {},
  ];
  var Index = 0;
  var NumCounter = 0;
  var StringCounter = 0;
  var BooleanCounter = 0;
  var UndifinedCounter = 0;
  var ObjectCounter = 0;
  var FunctionCounter = 0;

  // for (Index = 1; Index <= NumOfData; Index++) {
  //   let TheData = prompt("Please input the data");
  //   console.log("The type of the data is " + typeof TheData);
  //   TheArray.push(TheData);
  // }

  for (Index = 0; Index < NumOfData; Index++) {
    console.log("The data in position " + Index + " is " + TheArray[Index]);
    // TypaOfData = typeof TheArray[Index];
    console.log(
      "The type of the data in position " +
        Index +
        " is " +
        typeof TheArray[Index]
    );
    switch (typeof TheArray[Index]) {
      case "number":
        NumCounter += 1;
        console.log("The Num Counter is :" + NumCounter);
        break;
      case "boolean":
        BooleanCounter += 1;
        console.log("The boolean Counter is :" + BooleanCounter);
        break;
      case "string":
        StringCounter += 1;
        console.log("The String Counter is :" + StringCounter);
        break;
      case "undifined":
        UndifinedCounter += 1;
        console.log("The undifined Counter is :" + UndifinedCounter);
        break;
      case "function":
        FunctionCounter += 1;
        console.log("The function Counter is :" + FunctionCounter);
        break;
      case "object":
        ObjectCounter += 1;
        console.log("The object Counter is :" + ObjectCounter);
        break;
    }
  }
  // return TheArray;
  console.log("The number of type number is :" + NumCounter);
  console.log("The number of type string is :" + StringCounter);
  console.log("The number of type boolean is :" + BooleanCounter);
  console.log("The number of type undifined is :" + UndifinedCounter);
  console.log("The number of type function is :" + FunctionCounter);
  console.log("The number of type object is :" + ObjectCounter);
  console.log(
    "The number of other type data is :" +
      NumOfData -
      NumCounter -
      StringCounter -
      BooleanCounter -
      UndifinedCounter -
      FunctionCounter -
      ObjectCounter
  );
}
// resoult = ChackDataType(NumOfData);
resoult = ChackDataType(16);
// console.log("The array data is :" + resoult);
