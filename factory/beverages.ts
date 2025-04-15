import {BeverageComponent} from "./components";
import {Cup} from "./cup-size-factory";
import {BasisType, BeverageComponentsFactory, ToppingType} from "./beverage-components-factory";
import {requestComponentsChose} from "./helpers";

export abstract class Beverage {
    private _ingredients: BeverageComponent[] = [];
    protected componentsFactory = new BeverageComponentsFactory();
    protected _condiments: string[] = [];
    protected _cup: Cup;

    constructor(private _description: string) {}

    get description() {
        return this._description;
    }

    get condiments() {
        return this._condiments
    }

    set cup(newCup: Cup) {
        this._cup = newCup;
    }

    displayBeverage() {
        const ingredientsInline =  this._ingredients.length > 0 ?
            `Ингредиенты: ${this._ingredients.map(el => el.description).join(', ')}\n` : ''
        const condimentsInline = this.condiments.length > 0 ?
            `Добавки: ${this.condiments.join(', ')}\n` : ''

        console.log('НАПИТОК\n');

        console.log(`Название: ${this._description}\n` +
            `Объем: ${this._cup.volume}л.\n` +
            `${ingredientsInline}` +
            `${condimentsInline}` +
            `Цена: ${this.cost()} руб.`);
    }

    create() {
        this._ingredients = this.chooseIngredients();
    }

    abstract cost(): number;

    abstract chooseIngredients(): BeverageComponent[]
}

export class HouseBlend extends Beverage {
    constructor() {
        super('House Blend');
    }
    cost(): number {
        return 200 * this._cup.coefficient;
    }

    chooseIngredients = () => []
}

export class DarkRoast extends Beverage {
    constructor() {
        super('Dark Roast');
    }
    cost(): number {
        return 250 * this._cup.coefficient;
    }

    chooseIngredients = () => []
}

export class Espresso extends Beverage {
    constructor() {
        super('Espresso');
    }
    cost(): number {
        return 230 * this._cup.coefficient;
    }

    chooseIngredients = () => []
}

export class Decaf extends Beverage {
    constructor() {
        super('Decaf');
    }
    cost(): number {
        return 180 * this._cup.coefficient;
    }

    chooseIngredients = () => []
}

export class Tea extends Beverage {
    constructor() {
        super('Чай');
    }

    cost(): number {
        return 140 * this._cup.coefficient;
    }

    chooseIngredients() {
        const basisType = requestComponentsChose('basis') as BasisType;
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            this.componentsFactory.createBasis(basisType),
            this.componentsFactory.createMain('tea'),
            this.componentsFactory.createTopping(toppingType)
        ]
    }
}

export class Cocktail extends Beverage {
    constructor() {
        super('Безалкогольный коктейль');
    }

    cost(): number {
        return 240 * this._cup.coefficient;
    }

    chooseIngredients() {
        const basisType = requestComponentsChose('basis') as BasisType;

        return [
            this.componentsFactory.createBasis(basisType),
            this.componentsFactory.createMain('fruits'),
            this.componentsFactory.createTopping('soda')
        ]
    }
}

export class FruitFresh extends Beverage {
    constructor() {
        super('Фруктовый фреш');
    }

    cost(): number {
        return 300 * this._cup.coefficient;
    }

    chooseIngredients() {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            this.componentsFactory.createBasis('juice'),
            this.componentsFactory.createMain('fruits'),
            this.componentsFactory.createTopping(toppingType)
        ]
    }
}

export class CustomCoffee extends Beverage {
    constructor() {
        super('Свой кофе');
    }

    cost(): number {
        return 250 * this._cup.coefficient;
    }

    chooseIngredients() {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        return [
            this.componentsFactory.createBasis('water'),
            this.componentsFactory.createMain('coffee'),
            this.componentsFactory.createTopping(toppingType)
        ]
    }
}