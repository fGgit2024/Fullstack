//P46Q1

console.log("========================Exercise 1 Page 46====================");

function Digitalclock(Hours, Minutes, Seconds) {
  if (
    Hours >= 0 &&
    Hours <= 24 &&
    Minutes >= 0 &&
    Minutes < 60 &&
    Seconds >= 0 &&
    Seconds < 60
  ) {
    if (Hours < 10) {
      Hours = "0" + Hours;
    }

    if (Minutes < 10) {
      Minutes = "0" + Minutes;
    }

    if (Seconds < 10) {
      Seconds = "0" + Seconds;
    }
  } else {
    return "Wrong input time";
  }
  return Hours + ":" + Minutes + ":" + Seconds;
}
console.log(Digitalclock(9, 9, 9));
