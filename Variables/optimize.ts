interface Ifun {
    Id: number;
    name: string;
    show();
}

class Organizer implements Ifun {

    Id: number;
    name: string;

    constructor(Id: number, name: string) {
        this.Id = Id;
        this.name = name;
    }
    show() {
        console.log(`ID :- ${this.Id}`);
        console.log(`Name :- ${this.name}`);

    }
}

class AEvent extends Organizer implements Ifun{
    description: string;
    startTime: string;
    constructor(Id: number, name: string, description: string, startTime: string){
    
        super(Id, name)
        this.description= description;
        this.startTime = startTime;

    }
    show(){
                console.log(`Event ID :- ${this.Id}`);
                console.log(`Event Name :- ${ this.name}`);
                console.log(`Description :- ${this.description}`);
                console.log(`Start Time :- ${this.startTime}`);
        
    }

}

class Venue extends Organizer implements Ifun{
    description: string
    address: string;
    constructor(Id: number, name: string, description: string, address: string){
    
        super(Id, name)
        this.description = description
        this.address = address;

    }
    show(){
                console.log(`Event ID :- ${this.Id}`);
                console.log(`Event Name :- ${ this.name}`);
                console.log(`Description :- ${this.description}`);
                console.log(`Address :- ${this.address}`);
        
    }

}

console.log("-------------------------------------------------- Organizer Class --------------------------------------------------");

var Org = new Organizer(1, "Akash");
Org.show();

console.log("-------------------------------------------------- Event Class --------------------------------------------------");

var Eve = new AEvent(101, "Birthday Party", "Celebrating 25th Birthday", "07.00 PM"  );
Eve.show();

console.log("-------------------------------------------------- Venue Class --------------------------------------------------");

var ven = new Venue(1001, "Royal Hall", "Best Location with Delicious Food", "Royal Hall, JM Road, Pune - 411001");
ven.show();


