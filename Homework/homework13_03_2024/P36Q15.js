console.log(
  "==================================Homework 13/03/2024 page 36 Q no' 15"
);

var AvarageGrade = 0;
var Counter = 0;

for (Index = 0; Index <= 5; Index = Index + 1) {
  var Name = prompt("Please input the name of student");
  var Grade = +prompt("Please input the grade of the student");
  if (Grade > 70) {
    console.log(
      "The student " + Name + " achieved a scored a " + Grade + " on the exam."
    );
    AvarageGrade = AvarageGrade + Grade;
    Counter = Counter + 1;
  }
}
console.log(
  "The avarage score of the students who succeeded in the exam (score above 70) is :" +
    AvarageGrade / Counter
);
