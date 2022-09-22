interface IExterior {
    color : string;
    noOfDoors: number;
}

interface Iinterior {
    auto : boolean;
    seats: number;
}

interface Icar extends IExterior, Iinterior{
    make: string;
    model: string;
    year: number;
}

var myCar : Icar ={
    make: "Honda",
    model: "City",
    year: 2022,
    color: "White",
    noOfDoors: 4,
    auto : false,
    seats: 4
}

console.log(myCar);
