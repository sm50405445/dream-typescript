{
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState = {
        result: 'success';
    }
    
    type ResultState = SuccessState | NetworkErrorState;

    class TimeoutError extends Error{

    }
    
    class OfflineError extends Error{
    
    }

    class NetworkClient {
        tryConnect(): ResultState {
            return {result:'success'}
        }
    }
    
    class UserService {
        constructor(private client: NetworkClient){}
        login(){
       
            this.client.tryConnect();
            
        }
    }
    
    class App {
        constructor(private userService:UserService){}
        run(){
            try{
                this.userService.login();
            }
            catch(err){
                //show dialog to user
                if(err instanceof OfflineError){
                    
                }
            }
        }
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service)
    app.run();
}
