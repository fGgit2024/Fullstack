console.log(
  "==================================Homework 13/03/2024 Exercise no'4"
);

let _Product1 = prompt("Please input the first product");
let _Product2 = prompt("Please input the secound product");
let TheTestResult = "True";

ProducteKind(_Product1, _Product2);

function ProducteKind(_Product1, _Product2) {
  if (_Product1.length > 5 && _Product2.length > 5) {
    TheTestResult = "False";
  } else {
    if (_Product1.includes("apple") || _Product2.includes("apple")) {
    } else {
      TheTestResult = "False";
    }
  }
  return console.log(
    `The test result if at list one of the input strings ('${_Product1}','${_Product1}') is the word 'apple' is :${TheTestResult}`
  );
}
