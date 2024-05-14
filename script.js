// დავალება #1

let number = 100;

let result =
  number < 50 ? "less than fifty" : number > 20 ? "more than twenty" : "error";
console.log(result);

// დავალება #2

let firstName = "მარიამ";

let checkName = firstName == "მარიამ" ? true : false;
console.log(checkName);

// დავალება #3

let studentName = "მარიამ";

switch (studentName) {
  case "მარიამ":
    console.log(true);

    break;

  default:
    console.log(false);
    break;
}
