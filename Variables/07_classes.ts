class Passenger {
    fname: string;
    lname: string;
    frequentFlyerNo: number;

    constructor(firstName: string, lastName: string, fFno: number){
        this.fname = firstName;
        this.lname = lastName;
        this.frequentFlyerNo = fFno;

    }// parameterised constructor

    display(){
        console.log(this.fname + " " + this.lname + " " + this.frequentFlyerNo);
        
    }
}

var pass = new Passenger("Jack", "Sparrow", 4);
// console.log(pass.fname + " " + pass.lname + " " + pass.frequentFlyerNo);

pass.display();

for(let item in pass){
    if (pass[item] instanceof Function) {
        continue;
      }
      else 
      {
       console.log(pass[item]); 
      }
   
}