{
    //Array
    const fruits: string[] = ['tomato','banana']
    const scores: Array<number> = [1,2,3];
    function printArray(fruits: readonly string[]){
        return fruits.reduce((a,b)=>a+b)
    }
    
    
    //Tuple -> interface, type alias, class
    let student: [string,number];
    student = ['name',33];
    student[0];
    student[1];
    
    const [name,age] = student;
    
}