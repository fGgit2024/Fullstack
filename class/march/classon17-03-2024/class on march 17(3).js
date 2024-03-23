console.log("============================class 17.03.2024 (3)");

function card(ProductesNum) {
  var ProductesType = [];
  for (index = 0; index < ProductesNum; index++) {
    let Productes = prompt("Please input a car type");
    ProductesType.push(Productes);
  }

  return ProductesType;
}
var resoult = card(5);
console.log(resoult);
