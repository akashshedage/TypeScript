var n1 : number = 10 ;
console.log(`Typescript first variables dec`, n1);

var s1 : string = "You are creater of your destiny";
var s2 : string = 'Live a life you will remember';

console.log(s1);
console.log(s2);

var b1 : boolean = true;
var b2 : boolean = false;

console.log(b1);
console.log(b2);

var a1 : any = {
    productID : 1,
    productname: 'Iphone',
    productprice: 19000
}
console.log(a1);


var array1: Array <string> = ['AngularJs', 'ReactJs', 'NodeJs']; // Homogenous array
console.log(array1);
console.log(array1[0]);

var array2: Array <any> = ['Test', 1234]; // Hetrogenous array
console.log(array2);

// var array3: Array <string | number> = ['Test', 1234]; // Homogenous array
// console.log(array3);
// console.log(array1[0]); 