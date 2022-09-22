// Create objects Employee use for in loop and de-struct.
// Create array  J&J Pfizer Sputnik .
// Now add Covaxin 
// use De-structuring array .
var employee = {
    emp_id: 90,
    emp_name: "Akash Shedage",
    Salary: 50000,
    City: "Pune",
    State: "Maharshtra",
    Company: "TCS"
};
console.log("---------Using for in loop-----------");
for (var item in employee) {
    console.log("".concat(item, " :- ").concat(employee[item]));
}
console.log("---------Using Object Destructuring-----------");
var emp_id = employee.emp_id, emp_name = employee.emp_name, Salary = employee.Salary, City = employee.City, State = employee.State, Company = employee.Company;
console.log("Employee ID :- ".concat(emp_id));
console.log("Employee Name :- ".concat(emp_name));
console.log("Salary :- ".concat(Salary));
console.log("City :- ".concat(City));
console.log("State :- ".concat(State));
console.log("Company :- ".concat(Company));
console.log("---------De-structuring array-----------");
var vaccine = ["J&J", "Pfizer", "Sputnik"];
console.log("Original Array :- ".concat(vaccine));
console.log("----------------------------------------");
vaccine.push("Covaxin");
console.log("After Adding Covaxin :- ".concat(vaccine));
console.log("----------------------------------------");
// console.log(vaccine.toString());
console.log('De-structuring array :-');
var a = vaccine[0], b = vaccine[1], c = vaccine[2], d = vaccine[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
