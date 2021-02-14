

//Error(Exception) Handling: try -> catch -> finally

function readFile(fileName:string):string{
    if(fileName === 'not exist!'){
        throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents';
}

function closeFile(fileName:string){

}

const fileName = 'file';

try{
    readFile(fileName)
}
catch(err){
    console.log('catched!!');
}
finally{
    closeFile(fileName);
    console.log('finally!')
}
