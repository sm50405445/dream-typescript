{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker{
        makeCoffee(shots:number):CoffeeCup;
    }

    class CoffeeMakerImpl implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        public constructor(coffeBeans:number){
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

    class CaffeeLatteMachine extends CoffeeMakerImpl{
        constructor(beans:number,public readonly serialNumber:string){
            super(beans)
        }
        private steamMilk():void{
            console.log('Steaming some milkk..')
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk:true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMakerImpl{
        constructor(beans:number){
            super(beans);
        }
        private insertSugar():void{
            console.log('insert sugar..')
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots)
            this.insertSugar();
            return{
                ...coffee,
                hasSugar:true,
            }
        }
    }

    const machines:CoffeeMakerImpl[] = [
        new CoffeeMakerImpl(16),
        new CaffeeLatteMachine(16,'1111'),
        new SweetCoffeeMaker(16),
        new CoffeeMakerImpl(16),
        new CaffeeLatteMachine(16,'1111'),
        new SweetCoffeeMaker(16),
    ]
    machines.forEach(machine=>{
        console.log('------------------')
        machine.makeCoffee(1);
    })

    const machine = new CoffeeMakerImpl(32)
    const latteMachine = new CaffeeLatteMachine(32,'ssss');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);
}