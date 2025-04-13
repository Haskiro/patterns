import {Beverage, DarkRoast, Decaf, Espresso, HouseBlend} from "./beverages";
import {Milk, Mocha, Soy, Whip} from "./condiment-decorators";

const readline = require('node:readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const beveragesList = [
    new HouseBlend(),
    new DarkRoast(),
    new Espresso(),
    new Decaf()
]

const condimentsDecoratorsList = [
    Milk,
    Mocha,
    Soy,
    Whip
]

let chosenBeverage: Beverage;

rl.question('Choose your beverage:\n' +
    '   1: House blend\n' +
    '   2: Dark roast\n' +
    '   3: Espresso\n' +
    '   4: Decaf\n', (variant: string) => {
    chosenBeverage = beveragesList[parseInt(variant, 10) - 1] || beveragesList[0];

    rl.question('Choose any condiments (use space to choose many):\n' +
        '   1: Milk\n' +
        '   2: Mocha\n' +
        '   3: Soy\n' +
        '   4: Whip\n', (variantsString: string) => {
        const variants = variantsString.split(' ').map((el) => parseInt(el, 10))

        const order = variants.reduce((acc, variant) => {
            const Decorator = condimentsDecoratorsList[variant - 1];
            return Decorator ? new Decorator(acc) : acc;
        }, chosenBeverage)

        console.log(order.getDescription(), order.cost())

        rl.close();
    })
});