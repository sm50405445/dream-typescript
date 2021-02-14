/**
 * Let's make a game 🕹
 */

let position = {x:0,y:0};
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}

type PositionCommand = 'up' | 'down' | 'left' | 'right';

function move(type:PositionCommand){
    switch(type){
        case 'up' :
            position.y += 1
            break;
        case 'down':
            return position = {x:position.x, y:position.y-1}
        case 'left':
            return position = {x:position.x-1, y:position.y}
        case 'right':
            return position = {x:position.x+1, y:position.y}
        default:
            throw Error('Invalid type')
    }
}