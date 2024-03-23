console.log("Class on 20 march Page 57 exercise no' 3");

function SummaryValueInArray(SizeOfArray) {
  var SearchArray = [];
  var SumOfArray = 0;
  var FaoundNumber = "False";
  for (Index = 0; Index < SizeOfArray; Index++) {
    var Num = +prompt("Please input a number");
    if (isNaN(Num)) {
      alert("Please input only numbers");
      Index--;
    } else {
      console.log("Num =" + Num);
      SearchArray.push(Num);
      console.log("SearchArray.push(Num) =" + SearchArray[Index]);
      SumOfArray += Num;
      console.log("SumOfArray =" + SumOfArray);
    }
  }
  for (Index = 0; Index < SizeOfArray; Index++) {
    if (SearchArray[Index] == SumOfArray - SearchArray[Index]) {
      console.log(
        "The number in the position SearchArray[" +
          Index +
          "] is equal to the rest of the data in the array => " +
          (SumOfArray - SearchArray[Index])
      );
      FaoundNumber = "True";
    } else {
      console.log(
        SearchArray[Index] + " != " + (SumOfArray - SearchArray[Index])
      );
    }
  }
  return FaoundNumber;
}

var Resoult = SummaryValueInArray(5);
console.log("The resoult is " + Resoult);
