var student = {
    stdName: "John",
    score: 90
};
// console.log(student.stdName);
// console.log(student.score);
// tsc is compiler which will transpile my typescript code to javascript code .
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
// De-structuring objects and De-structing array . 
var stdName = student.stdName, score = student.score;
console.log('line no 20', stdName);
console.log('line 21 ', score);
var courses = ["AngularJS", "NodeJs", "ReactJs"];
// De-structuring array
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
