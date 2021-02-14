/**
 * Type Inference
 */

let text = 'hello';
text = 'hi';
function print(message:string = 'hello'){
    console.log(message);
}
print('hello');


function add(x:number, y:number){
    return x+y;
}

const result = add(1,2);



