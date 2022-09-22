function add(num1: number, num2: number){
    return num1 + num2 ;
}
console.log(add(2, 3));


function hello(name: string): string{

    return "Hello" + name ; 
}

console.log(hello('Angular batch 3'));


//Optional parameter   OR  Default parameter

function display(id:number, name:string, role?: string) {
    console.log("ID", id);
    console.log("Name", name);
    if(role != undefined)
    {
        console.log("Role", role)
    }
    
}

display(1, "Dnyanesh");


function doubleMe(x: number); // declaration
function doubleMe(x: string);

function doubleMe(x: any){ // Implementation
    if(x && typeof x === "number" ){
        console.log(x * 2);
    }else if (x && typeof x === "string"){
        console.log(x + " " + x);
        
    }
}

doubleMe(2);
doubleMe("Codemind");


// Rest Parameters
var product = function(...nums) {
    var result = 1 ;
    for(var i = 0 ; i < nums.length; i ++)
    {
        console.log(nums[i])
        result *= nums[i];
        
    }
    return result;
}

console.log(product(2, 3, 4, 5));



