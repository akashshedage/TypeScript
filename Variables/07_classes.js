var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, fFno) {
        this.fname = firstName;
        this.lname = lastName;
        this.frequentFlyerNo = fFno;
    } // parameterised constructor
    Passenger.prototype.display = function () {
        console.log(this.fname + " " + this.lname + " " + this.frequentFlyerNo);
    };
    return Passenger;
}());
var pass = new Passenger("Jack", "Sparrow", 4);
// console.log(pass.fname + " " + pass.lname + " " + pass.frequentFlyerNo);
pass.display();
for (var item in pass) {
    if (pass[item] instanceof Function) {
        continue;
    }
    else {
        console.log(pass[item]);
    }
}
