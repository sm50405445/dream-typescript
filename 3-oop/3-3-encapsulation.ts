{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    //public
    //private
    //protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeBeans:number){
            this.coffeeBeans = coffeBeans
        }

        static makeMachine(coffeBeans:number):CoffeeMaker{
            return new CoffeeMaker(coffeBeans)
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots:number):CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffe beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return{
                shots,
                hasMilk:false,
            }
        }
    }


    const maker = CoffeeMaker.makeMachine(32)
    

    class User {
        get fullName():string{
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge = 4;
        get age():number {
            return this.internalAge;
        }
        set age(num:number){
            if(num<0){
                throw new Error('age must be greater than 0')
            }
            this.internalAge = num;
        }
        constructor(private firstName:string,private lastName:string){
        }
    }

    const user = new User('lsm','steve')
    console.log(user.fullName)
    user.age = 6;
    // user.firstName = 'Ellei';
    console.log(user.fullName);

}