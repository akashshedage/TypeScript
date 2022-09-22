var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer(Id, name) {
        this.Id = Id;
        this.name = name;
    }
    Organizer.prototype.show = function () {
        console.log("ID :- ".concat(this.Id));
        console.log("Name :- ".concat(this.name));
    };
    return Organizer;
}());
var AEvent = /** @class */ (function (_super) {
    __extends(AEvent, _super);
    function AEvent(Id, name, description, startTime) {
        var _this = _super.call(this, Id, name) || this;
        _this.description = description;
        _this.startTime = startTime;
        return _this;
    }
    AEvent.prototype.show = function () {
        console.log("Event ID :- ".concat(this.Id));
        console.log("Event Name :- ".concat(this.name));
        console.log("Description :- ".concat(this.description));
        console.log("Start Time :- ".concat(this.startTime));
    };
    return AEvent;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(Id, name, description, address) {
        var _this = _super.call(this, Id, name, description, address) || this;
        _this.address = address;
        return _this;
    }
    Venue.prototype.show = function () {
        console.log("Event ID :- ".concat(this.Id));
        console.log("Event Name :- ".concat(this.name));
        console.log("Description :- ".concat(this.description));
        console.log("Address :- ".concat(this.address));
    };
    return Venue;
}(AEvent));
console.log("-------------------------------------------------- Organizer Class --------------------------------------------------");
var Org = new Organizer(1, "Akash");
Org.show();
console.log("-------------------------------------------------- Event Class --------------------------------------------------");
var Eve = new AEvent(101, "Birthday Party", "Celebrating 25th Birthday", "07.00 PM");
Eve.show();
console.log("-------------------------------------------------- Venue Class --------------------------------------------------");
var ven = new Venue(1001, "Royal Hall", "Best Location with Delicious Food", "Royal Hall, JM Road, Pune - 411001");
ven.show();
// interface vin
// {
//     id:number;
//     name:string;
//     show():void;
// }
// class ef implements vin
// {
//     id:number;
//     name:string;
//     course:string;
//     description:string;
//     constructor(id,name,course,description)
//     {
//     this.id=id;
//     this.name=name;
//     this.course=course;
//     this.description=description;
//     }
//     show()
// {
//     console.log(this.id,this.name,this.course,this.description);
// }
// }
// class d extends ef implements vin
// {
//  constructor (id,name,course,description)
//  {
//   super  (id,name,course,description);
//  }
//     show()
// {
//     console.log(this.id,this.name,this.course,this.description);
// }
// }
// class f extends d implements vin
// {
// constructor(id,name,course,description)
// {
//     super (id,name,course,description);
// }
// show(): void {
//     console.log(this.id,this.name);
// }
// }
// let fobj=new f(1,"bob","sql","3months")
// fobj.show()
// // let object=new d(1,"jack","angular dev","3 months");
// // object.show();
