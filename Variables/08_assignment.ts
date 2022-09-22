class calculator {
    static cal() {
        let num1 = parseInt(prompt("Enter first number"));

        let operator = prompt('Enter operator ( either +, -, * or / ): ');

        let num2 = parseInt(prompt("Enter Second number"));

        let result: number;

        if (operator == "+") {
            result = num1 + num2;

        }
        else if (operator == "-") {
            result = num1 - num2;
        }
        else if (operator == "*") {
            result = num1 * num2;
        }
        else if (operator == "/") {
            result = num1 / num2;
        }
        alert(result);
        console.log(result);
    }
}
calculator.cal()




// var num1 : number = parseFloat(prompt ('Enter first number: '));
// var operators: any = prompt('Enter operator ( either +, -, * or / ): ');
// var num2 : number = parseFloat(prompt ('Enter second number: '));

// let result: number;

// // using if...else if... else
// if (operators == '+') {
//     result = num1 + num2;
// }
// else if (operators == '-') {
//     result = num1 - num2;
// }
// else if (operators == '*') {
//     result = num1 * num2;
// }
// else if (operators == '/') {
//     result = num1 / num2;
// }
// alert(result);
// console.log(result);




