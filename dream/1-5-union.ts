{
    /**
     * Union Types: OR
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction){
        console.log(direction)
    }
    move('up');
    
    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // funtion: login => success, fail
    type SuccessState = {
        response:{
            body: string;
        }
    }
    type failState = {
        reason:{
            body: string;
        }
    }
    type LoginState = SuccessState | failState;
    // function login(id:string,password:string):LoginState{
    //     return {
    //         response:{
    //             body:'logged in'
    //         }
    //     }
    // }
    
    // function printLoginState(state:LoginState):void{
    //     console.log(state)       
    // }
    // printLoginState({
    //     response:{
    //         body:'Logged in'
    //     }
    // })

    // function printLoginState(state:LoginState){
    //     if('response' in state){
    //         console.log(state.response)
    //     } else{
    //         console.log(state.reason)
    //     }
    // }
}