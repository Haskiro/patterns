import {Mocha, Soy, Whip} from "./condiment-decorators";
import {Cup, CupSize, CupSizeFactory} from "./cup-size-factory";
import {Croissant, Desert, Pie, Strudel} from "./deserts";
import {Beverage} from "./beverages";
import {BeverageComponent} from "./components";
import {requestComponentsChose, sleep} from "./helpers";
import {BasisType, BeverageComponentsFactory, ToppingType} from "./beverage-components-factory";

const reader = require("readline-sync");

const condimentsDecoratorsList = [
    Mocha,
    Soy,
    Whip
]

const cupSizesList = [
    CupSize.S,
    CupSize.M,
    CupSize.L
]

const desertsList = [
    new Croissant(),
    new Pie(),
    new Strudel()
]

const cupSizeFactory = new CupSizeFactory();
const componentsFactory = new BeverageComponentsFactory();

abstract class Order {
    private desert?: Desert
    constructor(protected beverage: Beverage) {}

    async fulfillOrder() {
        const cup = this.getChosenCup();
        const ingredients = this.getChosenIngredients();
        const isHot = this.getShouldBeHot();
        this.chooseCondiments();
        this.chooseDesert();
        this.updateBeverageState(cup, ingredients, isHot)
        await this.createBeverage();
        this.pay();
    }

    protected getChosenCup() {
        const answer = reader.question('Выберите размер: \n' +
            '   1: Маленький\n' +
            '   2: Средний\n' +
            '   3: Большой\n');
        return cupSizeFactory.createCup(cupSizesList[parseInt(answer, 10) - 1]);
    }

    protected abstract getChosenIngredients(): BeverageComponent[]

    protected chooseCondiments() {
        const answer = reader.question('Выберите добавки (для выбора нескольких перечислите их через пробел):\n' +
            '   1: Мокко\n' +
            '   2: Соевый соус\n' +
            '   3: Взбитые сливки\n');

        const variants = answer.split(' ').map((el) => parseInt(el, 10))

        const order = variants.reduce((acc, variant) => {
            const Decorator = condimentsDecoratorsList[variant - 1];
            return Decorator ? new Decorator(acc) : acc;
        }, this.beverage)

        this.beverage = order;
    }

    protected abstract getShouldBeHot(): boolean;

    protected chooseDesert() {
        const answer = reader.question('Выберите десерт: \n' +
            '   1: Круасан\n' +
            '   2: Пирожок\n' +
            '   3: Штрудель\n' +
            '   4: Ничего\n');

        this.desert =  desertsList[parseInt(answer, 10) - 1];
    }

    protected updateBeverageState (cup: Cup, ingredients: BeverageComponent[], isHot: boolean) {
        this.beverage.cup = cup;
        this.beverage.ingredients = ingredients;
        this.beverage.isHot = isHot;
    }

    protected async createBeverage() {
        console.log('ЗАКАЗ');
        this.beverage.displayBeverage()
        console.log(this.desert ? `Десерт: ${this.desert.description}\n` : '\n')

        console.log('ГОТОВКА')
        if (this.beverage.isHot) {
            console.log('Нагреваем воду');
            await sleep(1000);
        }
        console.log('Добавляем ингредиенты');
        await sleep(1000);
        console.log('Наливаем в стакан');
        await sleep(1000);
        console.log('Заказ готов к выдаче\n')
    }

    protected pay() {
        console.log('ОПЛАТА')
        reader.question(`Общая стоимость: ${this.beverage.cost() + (this.desert?.cost || 0)} руб.Выберите тип оплаты:\n` +
            '   1: По карте\n' +
            '   2: Наличными\n' +
            '   3: QR-кодом\n');
    }
}

export class DefaultOrder extends Order {
    protected getChosenIngredients(): BeverageComponent[] {
        return [];
    }

    protected getShouldBeHot() {
        return !(parseInt(reader.question('Напиток должен быть горячим или холодным?:\n' +
            '   1: Горячим\n' +
            '   2: Холодным\n'), 10) - 1);
    }

}

export class TeaOrder extends Order {
    protected getChosenIngredients(): BeverageComponent[] {
        const basisType = requestComponentsChose('basis') as BasisType;
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            componentsFactory.createBasis(basisType),
            componentsFactory.createMain('tea'),
            componentsFactory.createTopping(toppingType)
        ]
    }

    protected getShouldBeHot() {
        return !(parseInt(reader.question('Напиток должен быть горячим или холодным?:\n' +
            '   1: Горячим\n' +
            '   2: Холодным\n'), 10) - 1);
    }
}

export class CocktailOrder extends Order {
    protected getChosenIngredients(): BeverageComponent[] {
        const basisType = requestComponentsChose('basis') as BasisType;

        return [
            componentsFactory.createBasis(basisType),
            componentsFactory.createMain('fruits'),
            componentsFactory.createTopping('soda')
        ]

    }

    protected getShouldBeHot() {
        return false;
    }
}

export class FruitFreshOrder extends Order {
    protected getChosenIngredients(): BeverageComponent[] {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            componentsFactory.createBasis('juice'),
            componentsFactory.createMain('fruits'),
            componentsFactory.createTopping(toppingType)
        ]

    }

    protected getShouldBeHot() {
        return false;
    }
}

export class CustomCoffeeOrder extends Order {
    protected getChosenIngredients(): BeverageComponent[] {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            componentsFactory.createBasis('water'),
            componentsFactory.createMain('coffee'),
            componentsFactory.createTopping(toppingType)
        ]

    }

    protected getShouldBeHot() {
        return !(parseInt(reader.question('Напиток должен быть горячим или холодным?:\n' +
            '   1: Горячим\n' +
            '   2: Холодным\n'), 10) - 1);
    }
}
