var student = {
    stdName : "John",
    score: 90
}

// console.log(student.stdName);
// console.log(student.score);


// tsc is compiler which will transpile my typescript code to javascript code .

for( var item in student) {
    console.log(item);
    console.log(student[item]);
}
 
// De-structuring objects and De-structing array . 

var {stdName, score} = student;
console.log('line no 20', stdName);
console.log('line 21 ',score);


var courses : any = ["AngularJS", "NodeJs", "ReactJs"];
// De-structuring array

var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);

