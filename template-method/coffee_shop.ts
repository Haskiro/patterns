import {Cocktail, CustomCoffee, DarkRoast, Decaf, Espresso, FruitFresh, HouseBlend, Tea} from "./beverages";
import {CocktailOrder, CustomCoffeeOrder, DefaultOrder, FruitFreshOrder, TeaOrder} from "./orders";
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

const ordersConstructorsList = [
    DefaultOrder,
    DefaultOrder,
    DefaultOrder,
    DefaultOrder,
    CustomCoffeeOrder,
    TeaOrder,
    CocktailOrder,
    FruitFreshOrder
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

const idx = parseInt(answerBeverage, 10) - 1;
const OrderConstructor = ordersConstructorsList[idx];
const order = new OrderConstructor(beveragesList[idx]);

order.fulfillOrder();
