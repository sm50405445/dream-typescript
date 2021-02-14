interface Stack2<T> {
    readonly size: number;
    push(value:T): void;
    pop(): T;
}

type StackNode2<T> = {
    readonly value:T
    readonly next?:StackNode2<T>
}

class StackImpl2<T> implements Stack2<T> {
    private _size:number = 0;
    private head?:StackNode2<T>

    get size(){
        return this._size
    }

    push(value:T){
        this._size++;
        const node: StackNode2<T> = {value,next:this.head}
        this.head = node;
    }

    pop():T{
        if(this.head == null)
            throw new Error('Stack is empty')
        
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
}

const stack2 = new StackImpl2<string>()
stack2.push('lsm')
stack2.push('lsm2')
stack2.push('lsm3')
while(stack2.size !== 0){
    console.log(stack2.pop())
}

const stack3 = new StackImpl2<number>()
stack3.push(123)
stack3.push(345)
stack3.push(789)
while(stack3.size !== 0){
    console.log(stack3.pop())
}