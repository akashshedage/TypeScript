var Organizer = /** @class */ (function () {
    function Organizer(Id, name) {
        // this.Id = Id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        // console.log(`ID :- ${this.Id}`);
        console.log("Name :- ".concat(this.name));
    };
    return Organizer;
}());
var AEvent = /** @class */ (function () {
    function AEvent(Id, name, description, startTime) {
        this.Id = Id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    AEvent.prototype.display = function () {
        console.log("Event ID :- ".concat(this.Id));
        console.log("Event Name :- ".concat(this.name));
        console.log("Description :- ".concat(this.description));
        console.log("Start Time :- ".concat(this.startTime));
    };
    return AEvent;
}());
var Venue = /** @class */ (function () {
    function Venue(Id, name, description, address) {
        this.Id = Id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log("Venue ID :- ".concat(this.Id));
        console.log("Venue Name :- ".concat(this.name));
        console.log("Description :- ".concat(this.description));
        console.log("Address :- ".concat(this.address));
    };
    return Venue;
}());
console.log("-------------------------------------------------- Organizer Class --------------------------------------------------");
var Org = new Organizer(1, "Akash");
Org.display();
console.log("-------------------------------------------------- Event Class --------------------------------------------------");
var Eve = new AEvent(101, "Birthday Party", "Celebrating 25th Birthday", "07.00 PM");
Eve.display();
console.log("-------------------------------------------------- Venue Class --------------------------------------------------");
var ven = new Venue(1001, "Royal Hall", "Best Location with Delicious Food", "Royal Hall, JM Road, Pune - 411001");
ven.display();
// for(let item in ven){
//     if (ven[item] instanceof Function) {
//         continue;
//       }
//       else 
//       {
//        console.log(ven[item]); 
//       }
// }
