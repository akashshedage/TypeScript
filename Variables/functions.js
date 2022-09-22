function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
function hello(name) {
    return "Hello" + name;
}
console.log(hello('Angular batch 3'));
//Optional parameter 
function display(id, name, role) {
    console.log("ID", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh");
function doubleMe(x) {
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
}
doubleMe(2);
doubleMe("Codemind");
// Rest Parameters
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
