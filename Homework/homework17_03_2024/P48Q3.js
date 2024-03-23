console.log("+++++++++++++++++++++++++++++++Page 48 exercise no' 3");

var Checks = [];
Checks = ["10", "1000"];
console.log("The first Checks data is :" + Checks);

function UniversalBank(Checks) {
  console.log("The input UniversalBank data is :" + Checks);
  var TotalAmount = 0;
  var Commissions = Checks[0] * 0.1;
  console.log(
    "The commissions for " + Checks[0] + " checks is $" + Commissions
  );
  console.log("The sum of the checks is " + Checks[1]);
  if (Checks[1] > 500) {
    Commissions = Commissions + 500 * 0.01 + (Checks[1] - 500) * 0.015;
    console.log(
      "The commissions for $" + Checks[1] + " (>500) is : $" + Commissions
    );
  } else {
    Commissions = Commissions + Checks[1] * 0.01;
    console.log(
      "The commissions for $" + Checks[1] + " (<=500) is : $" + Commissions
    );
  }
  Checks.push(Commissions);
  console.log("Checks[2] = " + Checks[2]);
  var TotalAmount = parseFloat(Checks[1]) + parseFloat(Checks[2]);
  Checks.push(TotalAmount);
  console.log("Checks[3] = " + Checks[3]);
  return Checks;
}

UniversalBank(Checks);
console.log("The number of checks is " + Checks[0] + ".");
console.log("The sum of checks is $" + Checks[1] + ".");
console.log("The sum of commissions is $" + Checks[2] + ".");
console.log(
  "The total amount of the checks, including fees, is $" + Checks[3] + "."
);
