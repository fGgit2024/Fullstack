console.log("Class on 20 march Page 57 exercise no' 5");

var Thearray = [1, 2, 5, 3, 4, 7];
console.log("Thearray => " + Thearray);

function Newarray(Thearray) {
  var EvenArray = [];
  var OddArray = [];
  var NewDataSet = [];
  for (index = 0; index < Thearray.length; index++) {
    if (Thearray[index] % 2 === 0) {
      EvenArray.push(Thearray[index]);
      console.log("EvenArray.push => " + Thearray[index]);
    } else {
      OddArray.push(Thearray[index]);
      console.log("OddArray.push => " + Thearray[index]);
    }
  }
  console.log("EvenArray= " + EvenArray);
  console.log("OddArray= " + OddArray);

  NewDataSet.push(OddArray);
  NewDataSet.push(EvenArray);
  console.log("NewDataSet => " + NewDataSet);
  return NewDataSet;
}

var resoult = Newarray(Thearray);
console.log("The new array is :" + resoult);
