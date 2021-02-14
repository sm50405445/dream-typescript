{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array
     */

    // number
    const num:number = 6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = true;

    //undefined 비었는지 안비었는지 모른다
    let name: undefined;
    let age: number | undefined;
    age = 7;
    function find(): number | undefined {
        return undefined
    }

    //null 완전 비었다
    let person = null;
    let person2: string | null;
    
    //unknown
    let notSure:unknown = 0;
    notSure = 'he';
    notSure = true;

    //any
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void{
        console.log('hello');
        return;
    }
    let unusable: void = undefined;

    // never 절대 리턴하지 않음
    function throwError(message: string): never {
        throw new Error(message);
        // while(true){

        // }
        
    }

    // object
    let obj: object;
    function acceptSomeObject(obj: object){
    }
    acceptSomeObject({name:'lsm'})
    acceptSomeObject({animal:'cat'})

    

}