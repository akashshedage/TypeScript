interface IEmployee{
    id:number;
}

let e1: IEmployee;

let e2 = {id:1234567, name: "Jack"};

e1 = e2;

let e3 = {dept: "IT"};

e1 = e3;