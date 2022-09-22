// class Student {
//     public readonly userName: string = "Angular batch 3";
// }
// var objStudent = new Student();
// // objStudent.userName = "Codemindtechnology";
// console.log(objStudent.userName);
var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (name) {
            this._userName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var objStud = new Student();
objStud.userName = "Codemind";
console.log(objStud.userName);
