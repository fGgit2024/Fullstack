console.log("============================class 17.03.2024 (2)");

function cars(NumCars) {
  var CarsType = [];
  for (index = 0; index < NumCars; index++) {
    let cars = prompt("Please input a car type");
    CarsType.push(cars);
  }

  return console.log(
    "CarsType.index[0] " +
      CarsType[0] +
      "," +
      "CarsType.index[9] " +
      CarsType[9]
  );
}
cars(10);
