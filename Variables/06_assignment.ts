// console.log("---------- Assignment ----------");


// interface IPerson {
//     age: number
// }

// interface IMusician extends IPerson {
//     instrument: string
// }

// var drummer : IMusician = {
//     age : 27,
//     instrument : "Drums"
// }

// console.log(drummer);


console.log("--------------- Extend Interface ---------------");

interface IPerson {
    name: string;
    emailId: string;
    mobileNo : number;
   
}

interface IEmployee {
    empCode: number;
    salary: number;
}

interface IDetails extends IPerson, IEmployee {
    gender: string;
    isMarried: boolean;
    pinCode: number;
    city : string;
    state: string;
}

var employeeDetails : IDetails = {
    name : "Akash Shedage",
    emailId: "akashshedage412@gmail.com",
    mobileNo : 9168459363,
    empCode : 1010,
    salary: 50000,
    gender: "Male",
    isMarried: false,
    pinCode: 410041,
    city: "Pune",
    state: "Maharashtra"
}
console.log(employeeDetails);


