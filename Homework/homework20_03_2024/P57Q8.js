console.log("+++++++++++++++++++++++++++++++Page 57 exercise no' 8");

var InputIntegritiy = 0;

while (InputIntegritiy == 0) {
  console.log("(1)The InputIntegritiy is: " + InputIntegritiy);
  NumOfData = prompt("Please input the array size");
  console.log("(1)The NumOfData is: " + NumOfData);
  if (isNaN(NumOfData)) {
    alert(
      "The input " + NumOfData + " is not a number. Please input numbers only"
    );
  } else {
    InputIntegritiy = 1;
    console.log("(2)The NumOfData is: " + NumOfData);
    console.log("(2)The InputIntegritiy is: " + InputIntegritiy);
  }
}

function ChackPolinom(NumOfData) {
  console.log("(3)The NumOfData is : " + NumOfData);
  var TheArray = [];
  var Index = 0;
  var BreakPoint = 0;
  var Index2 = NumOfData - 1;
  for (Index = 1; Index <= NumOfData; Index++) {
    var InputIntegritiy = 0;
    while (InputIntegritiy == 0) {
      console.log("(3)The InputIntegritiy is: " + InputIntegritiy);
      Num = prompt("Please input the array size");
      console.log("(3)The Num is: " + Num);
      if (isNaN(Num)) {
        alert(
          "The input " + Num + " is not a number. Please input numbers only"
        );
      } else {
        InputIntegritiy = 1;
        console.log("(4)The Num is: " + Num);
        console.log("(4)The InputIntegritiy is: " + InputIntegritiy);
        TheArray.push(Num);
      }
    }
  }

  for (Index = 0; Index < parseInt(NumOfData / 2) && BreakPoint == 0; Index++) {
    console.log("The Index is :" + Index);
    console.log("The parseInt(NumOfData / 2) is: " + parseInt(NumOfData / 2));
    console.log("The BreakPoint value is: " + BreakPoint);
    console.log("The data in position " + Index + " is " + TheArray[Index]);
    console.log("The data in position " + Index2 + " is " + TheArray[Index2]);
    if (TheArray[Index] != TheArray[Index2]) {
      BreakPoint = 1;
      console.log("The BreakPoint is :" + BreakPoint);
    } else {
      Index2--;
    }
  }
  switch (BreakPoint) {
    case 0:
      console.log("The array " + TheArray + " is a polinom");
      break;
    case 1:
      console.log("The array " + TheArray + " is NOT a polinom");
      break;
  }
  return TheArray;
}
resoult = ChackPolinom(NumOfData);
console.log("The array data is :" + resoult);
