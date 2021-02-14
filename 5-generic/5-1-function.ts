{
    const log = console.log
    // function checkNotNull(arg:number | null):number{
    //     if(arg==null){
    //         throw new Error('not valid number!');
    //     }
    //     return arg;
    // }

    // const result = checkNotNull(123);
    // console.log(result);
    // checkNotNull(null);

    function checkNotNull<T>(arg:T|null):T {
        if(arg == null){
            throw new Error('not valid number!');
        }
        return arg;
    }

    const number = checkNotNull(123);
    const bool:boolean = checkNotNull(true);
}