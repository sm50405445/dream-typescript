/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add'|'substract'|'multiply'|'divide'|'remainder';

function calculate(type:Command,num1:number,num2:number):number{
    switch(type){
        case 'add':
            return num1+num2;
        default:
            throw Error('unkown type')
    }
}