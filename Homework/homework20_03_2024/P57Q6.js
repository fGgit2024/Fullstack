console.log("+++++++++++++++++++++++++++++++Page 57 exercise no' 6");

var InputIntegritiy = 0;
while (InputIntegritiy == 0) {
  // console.log("(1)The InputIntegritiy is: " + InputIntegritiy);
  var LenthOfArray = prompt("Please input the array size");
  // console.log("LenthOfArray = " + LenthOfArray);
  if (isNaN(LenthOfArray)) {
    alert(
      "The input " +
        LenthOfArray +
        " is not a number. Please input numbers only"
    );
  } else {
    InputIntegritiy = 1;
    console.log("(1)The LenthOfArray is: " + LenthOfArray);
    // console.log("(2)The InputIntegritiy is: " + InputIntegritiy);
  }
}

function ExchangeData(LenthOfArray) {
  // console.log("(3)The LenthOfArray is : " + LenthOfArray);
  var TheArray = [];
  var HalfLenthOfArray = parseInt(LenthOfArray / 2);
  // console.log("HalfLenthOfArray = " + HalfLenthOfArray);
  var ExchangeData = 0;
  var Index = 0;
  var Index2 = LenthOfArray - 1;

  // console.log("The LenthOfArray === " + LenthOfArray);

  for (Index = 0; Index < LenthOfArray; Index++) {
    var Num = prompt("Please input a number");
    if (isNaN(Num)) {
      alert("Please input numbers only");
      Index--;
    } else {
      console.log("Num= " + Num);
      TheArray.push(Num);
    }
  }

  console.log("The orginal array is  :" + TheArray);
  // console.log("The Half Lenth Of Array is :" + HalfLenthOfArray);

  for (Index = 0; Index <= HalfLenthOfArray; Index++) {
    ExchangeData = TheArray[Index];
    // console.log("TheArray[" + Index + "] is:" + TheArray[Index]);
    // console.log("ExchangeData = " + ExchangeData);
    // console.log("TheArray[" + Index2 + "] is:" + TheArray[Index2]);
    TheArray[Index] = TheArray[Index2];
    // console.log("TheArray[" + Index + "] is:" + TheArray[Index]);
    TheArray[Index2] = ExchangeData;
    // console.log("TheArray[" + Index2 + "] is:" + TheArray[Index2]);
    Index2--;
    // console.log("Index2 = " + Index2);
  }
  return TheArray;
}
// console.log("(2)LenthOfArray is : " + LenthOfArray);
resoult = ExchangeData(LenthOfArray);
console.log("The organised arry is :" + resoult);
