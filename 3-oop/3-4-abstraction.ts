{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots:number): CoffeeCup;
        fillCoffeeBeans(beans:number): void;
        clean(): void;
    }

    class CoffeeMakerImpl implements CoffeeMaker,CommercialCoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeBeans:number){
            this.coffeeBeans = coffeBeans
        }

        static makeMachine(coffeBeans:number):CoffeeMakerImpl{
            return new CoffeeMakerImpl(coffeBeans)
        }

        fillCoffeeBeans(beans:number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans;
        }

        clean(){
            console.log('cleaning the machine...');
        }

        private grindBeans(shots:number){
            console.log(`grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT)
                throw new Error('Not enough coffee beans!');

            this.coffeeBeans -= shots*CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT;
        }

        private preheat():void{
            console.log('heating up ....');
        }

        private extract(shots:number):CoffeeCup {
            console.log(`Pulling ${shots} shots..`);
            return{
                shots,
                hasMilk:false,
            }
        }

        makeCoffee(shots:number):CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    // const maker2:CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(32);
    // maker2.fillCoffeeBeans(32);
    // maker2.makeCoffee(32);

    // const maker:CommercialCoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    // maker.fillCoffeeBeans(32);
    // maker.makeCoffee(2);
    // maker.clean();

    class AmateurUser {
        constructor(private machine:CoffeeMaker){

        }
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee)
            
        }
    }

    class ProBarista{
        constructor(private machine: CommercialCoffeeMaker){

        }
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee)
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker:CoffeeMakerImpl = CoffeeMakerImpl.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}