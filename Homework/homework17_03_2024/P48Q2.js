console.log("+++++++++++++++++++++++++++++++Page 48 exercise no' 2");

function NumbersToCalculate(Numbers) {
  var TableOfNumbers = [];
  var AverageNumbers = 0;
  var NewIndex = 0;
  console.log("Numbers = " + Numbers);
  for (Index = 0; Index < Numbers; Index++) {
    var NewNumber = +prompt("Please input a number");
    if (isNaN(NewNumber)) {
      alert("Please input only numbers");
      Index--;
    } else {
      TableOfNumbers.push(NewNumber);
      console.log(
        "TableOfNumbers [Index] => " +
          Index +
          "=> " +
          NewNumber +
          "=>" +
          TableOfNumbers[Index]
      );
    }
  }
  console.log("Index = " + Index);
  while (NewIndex <= Index - 1 && TableOfNumbers[NewIndex] != 0) {
    console.log("TableOfNumbers [NewIndex] = " + TableOfNumbers[NewIndex]);
    AverageNumbers = AverageNumbers + TableOfNumbers[NewIndex];
    NewIndex = NewIndex + 1;
    console.log("New Index = " + NewIndex);
  }
  console.log("New Index = " + NewIndex);
  if (NewIndex > 1) {
    AverageNumbers = AverageNumbers / NewIndex;
  }
  return AverageNumbers;
}

console.log("The average of the numbers up to 0 is :" + NumbersToCalculate(4));
