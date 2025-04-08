import {LongQuack, LoudQuack, MuteQuack, QuackBehavior, RareQuack} from "./quack-behavior";
import {FlyBehavior, FlyNoWay, FlyOnRadioControl, FlyOnWings} from "./fly-behavior";

class Duck implements FlyBehavior, QuackBehavior {
    constructor(
        private flyBehavior: FlyBehavior,
        private quackBehavior: QuackBehavior
    ) {}

    setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    fly(): void {
        this.flyBehavior.fly();
    }

    quack(): void {
        this.quackBehavior.quack();
    }
}

const saxonDuck = new Duck(new FlyOnWings(), new RareQuack());
const rubberDuck = new Duck(new FlyNoWay(), new MuteQuack());
const decoyDuck = new Duck(new FlyNoWay(), new LoudQuack());
const redhatDuck = new Duck(new FlyOnWings(), new MuteQuack());

console.log('Симуляция уток:');

console.log('Саксонская утка');
saxonDuck.quack();
saxonDuck.fly();

console.log('Резиновая утка');
rubberDuck.quack();
rubberDuck.fly();

console.log('Утка-приманка');
decoyDuck.quack();
decoyDuck.fly();
decoyDuck.setFlyBehavior(new FlyOnRadioControl())
decoyDuck.fly();

console.log('Красноголовая утка');
redhatDuck.quack();
redhatDuck.setQuackBehavior(new LongQuack())
redhatDuck.quack();
redhatDuck.fly();