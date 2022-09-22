console.log(`-------------Grade calculator--------------`);
var math: any = prompt(`Enter Maths marks `);
var physics: any = prompt(`Enter Physics marks`);
var chemistry: any = prompt(`Enter Chemistry marks`);
console.log(`Maths :- ${math},  Physics :- ${physics},  Chemistry :- ${chemistry}`);

let sum = parseInt(math) + parseInt(physics) + parseInt(chemistry);
console.log(`Total Marks :- ${sum}`);

let avg = sum / 3;
console.log(`Average of your marks is :-  ${avg}`);

if (avg <= 70) {
    console.log(`Your grade is C.`);

}
else if (avg >= 70 && avg <= 90) {
    console.log(`Your grade is B.`);

}
else if (avg >= 90) {
    console.log(`Your grade is A.`);

}

// function marks(a: number, b: number, c:number) {
//     var avg = (a + b + c) / 3;
    
//     if (avg <= 70) {
//         return ` Grade C (${avg})`;
//     } 
//     else if ( avg > 70 && avg < 90) {
//         return ` Grade B (${avg})`;
//     } else 
//     {
//         return ` Grade A (${avg})`;
//     }

// }

// var math: number = Number(prompt('Enter the math marks'));
// var physics: number = Number(prompt('Enter the physics marks'));
// var chemistry: number = Number(prompt('Enter the chemistry marks'));

// console.log(marks(math, physics, chemistry));
