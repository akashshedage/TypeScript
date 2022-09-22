// Create objects Employee use for in loop and de-struct.

// Create array  J&J Pfizer Sputnik .

// Now add Covaxin 

// use De-structuring array .

var employee = {
    emp_id: 90,
    emp_name : "Akash Shedage",
    Salary : 50000,
    City: "Pune",
    State : "Maharshtra",
    Company : "TCS"
}

console.log("---------Using for in loop-----------");

for( var item in employee) {
    console.log(`${item} :- ${employee[item]}`);
}

console.log("---------Using Object Destructuring-----------");

var {emp_id, emp_name, Salary, City, State, Company} = employee;
console.log(`Employee ID :- ${emp_id}`);
console.log(`Employee Name :- ${emp_name}`);
console.log(`Salary :- ${Salary}`);
console.log(`City :- ${City}`);
console.log(`State :- ${State}`);
console.log(`Company :- ${Company}`);



console.log("---------De-structuring array-----------");

var vaccine : any = ["J&J", "Pfizer", "Sputnik"];

console.log(`Original Array :- ${vaccine}`);
console.log("----------------------------------------");

vaccine.push("Covaxin");
console.log(`After Adding Covaxin :- ${vaccine}`);
console.log("----------------------------------------");
// console.log(vaccine.toString());

console.log('De-structuring array :-');

var [a, b, c, d] = vaccine;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

