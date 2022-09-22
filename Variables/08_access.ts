// class Student {
//     public readonly userName: string = "Angular batch 3";
// }
// var objStudent = new Student();
// // objStudent.userName = "Codemindtechnology";
// console.log(objStudent.userName);


class Student{
    private _userName : string;

    get userName():string{
        return this._userName;
    }

    set userName(name: string){
        this._userName = name;
    }
}

var objStud = new Student();
objStud.userName = "Codemind";
console.log(objStud.userName);

