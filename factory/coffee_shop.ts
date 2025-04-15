import {Cocktail, CustomCoffee, DarkRoast, Decaf, Espresso, FruitFresh, HouseBlend, Tea} from "./beverages";
import {Milk, Mocha, Soy, Whip} from "./condiment-decorators";
import {CupSize, CupSizeFactory} from "./cup-size-factory";
const reader = require("readline-sync");

const beveragesList = [
    new HouseBlend(),
    new DarkRoast(),
    new Espresso(),
    new Decaf(),
    new CustomCoffee(),
    new Tea(),
    new Cocktail(),
    new FruitFresh()
]

const condimentsDecoratorsList = [
    Milk,
    Mocha,
    Soy,
    Whip
]

const cupSizesList = [
    CupSize.S,
    CupSize.M,
    CupSize.L
]

const answerBeverage = reader.question('Выберите напиток:\n' +
    '   1: House blend\n' +
    '   2: Dark roast\n' +
    '   3: Espresso\n' +
    '   4: Decaf\n' +
    '   5: Собрать свой кофе\n' +
    '   6: Чай\n' +
    '   7: Безалкогольный коктейль\n' +
    '   8: Фруктовый фреш\n')
const chosenBeverage = beveragesList[parseInt(answerBeverage, 10) - 1];

const answerCup = reader.question('Выберите размер: \n' +
    '   1: Маленький\n' +
    '   2: Средний\n' +
    '   3: Большой\n');

const cupSizeFactory = new CupSizeFactory();
const cup = cupSizeFactory.createCup(cupSizesList[parseInt(answerCup, 10) - 1])

const answerCondiments = reader.question('Выберите добавки (для выбора нескольких перечислите их через пробел):\n' +
    '   1: Молоко\n' +
    '   2: Мокко\n' +
    '   3: Соевый соус\n' +
    '   4: Взбитые сливки\n');

const variants = answerCondiments.split(' ').map((el) => parseInt(el, 10))

const order = variants.reduce((acc, variant) => {
    const Decorator = condimentsDecoratorsList[variant - 1];
    return Decorator ? new Decorator(acc) : acc;
}, chosenBeverage)

order.cup = cup;
order.create();
order.displayBeverage();