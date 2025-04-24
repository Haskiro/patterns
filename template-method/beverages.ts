import {BeverageComponent} from "./components";
import {Cup} from "./cup-size-factory";

export abstract class Beverage {
    private _ingredients: BeverageComponent[] = [];
    protected _condiments: string[] = [];
    protected _cup: Cup;
    public isHot: boolean = true;

    constructor(private _description: string) {}

    get description() {
        return this._description;
    }

    get condiments() {
        return this._condiments
    }

    set cup(value: Cup) {
        this._cup = value;
    }

    set ingredients(value: BeverageComponent[]) {
        this._ingredients = value;
    }

    displayBeverage() {
        const ingredientsInline =  this._ingredients.length > 0 ?
            `Ингредиенты: ${this._ingredients.map(el => el.description).join(', ')}` : ''
        const condimentsInline = this.condiments.length > 0 ?
            `Добавки: ${this.condiments.join(', ')}` : ''

        console.log(`Напиток: ${this._description}(${this.isHot ? 'Горячий' : 'Холодный'})\n` +
            `Объем: ${this._cup.volume}л.${(ingredientsInline || condimentsInline) ? '\n' : ''}` +
            `${ingredientsInline}${condimentsInline && '\n'}` +
            `${condimentsInline}`);
    }

    abstract cost(): number;
}

export class HouseBlend extends Beverage {
    constructor() {
        super('House Blend');
    }
    cost(): number {
        return 200 * this._cup.coefficient;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super('Dark Roast');
    }
    cost(): number {
        return 250 * this._cup.coefficient;
    }
}

export class Espresso extends Beverage {
    constructor() {
        super('Espresso');
    }
    cost(): number {
        return 230 * this._cup.coefficient;
    }
}

export class Decaf extends Beverage {
    constructor() {
        super('Decaf');
    }
    cost(): number {
        return 180 * this._cup.coefficient;
    }
}

export class Tea extends Beverage {
    constructor() {
        super('Чай');
    }

    cost(): number {
        return 140 * this._cup.coefficient;
    }
}

export class Cocktail extends Beverage {
    constructor() {
        super('Безалкогольный коктейль');
    }

    cost(): number {
        return 240 * this._cup.coefficient;
    }
}

export class FruitFresh extends Beverage {
    constructor() {
        super('Фруктовый фреш');
    }

    cost(): number {
        return 300 * this._cup.coefficient;
    }
}

export class CustomCoffee extends Beverage {
    constructor() {
        super('Свой кофе');
    }

    cost(): number {
        return 250 * this._cup.coefficient;
    }
}