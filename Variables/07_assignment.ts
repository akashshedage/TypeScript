// class Organizer {
//     Id: number;
//     name: string;

//     constructor(Id: number, name:string) {
//         this.Id = Id;
//         this.name = name;
//     }
//     display(): void {
//         console.log(`ID :- ${this.Id}`);
//         console.log(`Name :- ${ this.name}`);
        
//     }
// }

// class AEvent {
//     Id: number;
//     name: string;
//     description: string;
//     startTime: string;
//     constructor(Id: number, name:string, description: string, startTime: any) {
//         this.Id = Id;
//         this.name = name;
        // this.description= description;
        // this.startTime = startTime;
//     }
//     display(): void {
//         console.log(`Event ID :- ${this.Id}`);
//         console.log(`Event Name :- ${ this.name}`);
//         console.log(`Description :- ${this.description}`);
//         console.log(`Start Time :- ${this.startTime}`);
        
//     }
// }

// class Venue implements Organizer, AEvent {
//     Id: number;
//     name: string;
//     description: string;
//     startTime: string;
//     address: string;


//     constructor(Id: number, name:string, description: string, address: string ) {
//         this.Id = Id;
//         this.name = name;
//         this.description= description;
//         this.address = address;
//     }
    
//     display(): void {
//         console.log(`Venue ID :- ${this.Id}`);
//         console.log(`Venue Name :- ${ this.name}`);
//         console.log(`Description :- ${this.description}`);
//         console.log(`Address :- ${this.address}`);
//     }
// }
// console.log("-------------------------------------------------- Organizer Class --------------------------------------------------");

// var Org = new Organizer(1, "Akash");
// Org.display();

// console.log("-------------------------------------------------- Event Class --------------------------------------------------");

// var Eve = new AEvent(101, "Birthday Party", "Celebrating 25th Birthday", "07.00 PM"  );
// Eve.display();

// console.log("-------------------------------------------------- Venue Class --------------------------------------------------");

// var ven = new Venue(1001, "Royal Hall", "Best Location with Delicious Food", "Royal Hall, JM Road, Pune - 411001");
// ven.display();


// // for(let item in ven){
// //     if (ven[item] instanceof Function) {
// //         continue;
// //       }
// //       else 
// //       {
// //        console.log(ven[item]); 
// //       }
   
// // }

