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
        constructor(
            beans:number,
            public readonly serialNumber:string,
            private milkFrother:MilkFrother
        ){
            super(beans)
        }

        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee)
        }
    }

    interface MilkFrother {
        makeMilk(cup:CoffeeCup):CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup:CoffeeCup):CoffeeCup;
    }


    //싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Steaming some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Steaming some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void{
            console.log('Steaming some milk...')
        }
        makeMilk(cup:CoffeeCup):CoffeeCup{
            this.steamMilk();
            return{
                ...cup,
                hasMilk:true,
            }
        }
    }

    //설탕제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar form jar');
            return true;
        }

        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar:sugar,
            }
        }
    }

    class SugarMixer implements SugarProvider{
        private getSugar(){
            console.log('Getting some sugar form jar');
            return true;
        }

        addSugar(cup:CoffeeCup):CoffeeCup{
            const sugar = this.getSugar();
            return{
                ...cup,
                hasSugar:sugar,
            }
        }
    }
    class SweetCoffeeMaker extends CoffeeMakerImpl{
        constructor(private beans:number,private sugar:SugarProvider){
            super(beans)
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMakerImpl {
        constructor(
            private beans:number,
            private milk:MilkFrother,
            private sugar:SugarProvider
        )
        {
            super(beans);
        }
        makeCoffee(shots:number):CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
        }
    }

    //milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();

    //sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();

    const sweetCandyMachine = new SweetCoffeeMaker(12,candySugar);
    const sweetMachine = new SweetCoffeeMaker(12,sugar);

    const latteMachine = new CaffeeLatteMachine(12,'SS',cheapMilkMaker);
    const coldLatterMachine = new CaffeeLatteMachine(12,'SS',coldMilkMaker);
    const sweetLatteMachine = new SweetCaffeLatteMachine(
        12,
        cheapMilkMaker,
        candySugar
    )


    // const machines:CoffeeMakerImpl[] = [
    //     new CoffeeMakerImpl(16),
    //     new CaffeeLatteMachine(16,'1111'),
    //     new SweetCoffeeMaker(16),
    //     new CoffeeMakerImpl(16),
    //     new CaffeeLatteMachine(16,'1111'),
    //     new SweetCoffeeMaker(16),
    // ]
    // machines.forEach(machine=>{
    //     console.log('------------------')
    //     machine.makeCoffee(1);
    // })

    // const machine = new CoffeeMakerImpl(32)
    // // const latteMachine = new CaffeeLatteMachine(32,'ssss');
    // const coffee = latteMachine.makeCoffee(1);
    // console.log(coffee);
    // console.log(latteMachine.serialNumber);
}