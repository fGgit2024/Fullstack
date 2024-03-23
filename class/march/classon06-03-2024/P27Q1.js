//קלוט שם עובד ואת המשכורת שלו ובדוק אם להעלות לו את השכר ב 10% או ב- 5%

var salary = +prompt("Please enter the employee's salary");
var newsalary = salary * 1.1;
var employename = prompt("Please enter employee's name");

if (newsalary > 6000) {
  salary = salary * 1.05;

  console.log("The new salary of " + employename + " is " + salary);
} else {
  salary = salary * 1.1;
  console.log("The new salary of " + employename + " is " + salary);
}
