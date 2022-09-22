console.log("-------------Grade calculator--------------");
var math = prompt("Enter Maths marks ");
var physics = prompt("Enter Physics marks");
var chemistry = prompt("Enter Chemistry marks");
console.log("Maths :- ".concat(math, ",  Physics :- ").concat(physics, ",  Chemistry :- ").concat(chemistry));
var sum = parseInt(math) + parseInt(physics) + parseInt(chemistry);
console.log("Total Marks :- ".concat(sum));
var avg = sum / 3;
console.log("Average of your marks is :-  ".concat(avg));
if (avg <= 70) {
    console.log("Your grade is C.");
}
else if (avg >= 70 && avg <= 90) {
    console.log("Your grade is B.");
}
else if (avg >= 90) {
    console.log("Your grade is A.");
}
