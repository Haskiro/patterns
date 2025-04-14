import {BeverageComponent} from "./components";
import {CupSize} from "./cup-size-factory";
import {BasisType, BeverageComponentsFactory, ToppingType} from "./beverage-components-factory";
import {getPriceMultiplierBasedOnVolume, requestComponentsChose} from "./helpers";

export abstract class Beverage {
    protected _ingredients: BeverageComponent[] = [];
    protected componentsFactory = new BeverageComponentsFactory();
    protected _condiments: string[] = [];
    protected _volume: CupSize;

    constructor(private _description: string) {}

    get description() {
        return this._description;
    }

    get condiments() {
        return this._condiments
    }

    get ingredients() {
        return this._ingredients;
    }

    set volume(size: CupSize) {
        this._volume = size;
    }

    get volume() {
        return this._volume;
    }

    displayBeverage() {
        const ingredientsInline =  this._ingredients.length > 0 ?
            `Ингредиенты: ${this._ingredients.map(el => el.description).join(', ')}\n` : ''
        const condimentsInline = this.condiments.length > 0 ?
            `Добавки: ${this.condiments.join(', ')}\n` : ''

        console.log('НАПИТОК\n');

        console.log(`Название: ${this._description}\n` +
            `Объем: ${this._volume}л.\n` +
            `${ingredientsInline}` +
            `${condimentsInline}` +
            `Цена: ${this.cost()} руб.`);
    }

    abstract cost(): number;

    abstract create(): void;
}

export class HouseBlend extends Beverage {
    constructor() {
        super('House Blend');
    }
    cost(): number {
        return 200 * getPriceMultiplierBasedOnVolume(this.volume);
    }

    create() {}
}

export class DarkRoast extends Beverage {
    constructor() {
        super('Dark Roast');
    }
    cost(): number {
        return 250 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {}
}

export class Espresso extends Beverage {
    constructor() {
        super('Espresso');
    }
    cost(): number {
        return 230 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {}
}

export class Decaf extends Beverage {
    constructor() {
        super('Decaf');
    }
    cost(): number {
        return 180 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {}
}

export class Tea extends Beverage {
    constructor() {
        super('Чай');
    }

    cost(): number {
        return 140 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {
        const basisType = requestComponentsChose('basis') as BasisType;
        const toppingType = requestComponentsChose('topping') as ToppingType;

        this.ingredients.push(
            this.componentsFactory.createBasis(basisType),
            this.componentsFactory.createMain('tea'),
            this.componentsFactory.createTopping(toppingType)
        )
    }
}

export class Cocktail extends Beverage {
    constructor() {
        super('Безалкогольный коктейль');
    }

    cost(): number {
        return 240 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {
        const basisType = requestComponentsChose('basis') as BasisType;

        this.ingredients.push(
            this.componentsFactory.createBasis(basisType),
            this.componentsFactory.createMain('fruits'),
            this.componentsFactory.createTopping('soda')
        )
    }
}

export class FruitFresh extends Beverage {
    constructor() {
        super('Фруктовый фреш');
    }

    cost(): number {
        return 300 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        this.ingredients.push(
            this.componentsFactory.createBasis('juice'),
            this.componentsFactory.createMain('fruits'),
            this.componentsFactory.createTopping(toppingType)
        )
    }
}

export class CustomCoffee extends Beverage {
    constructor() {
        super('Свой кофе');
    }

    cost(): number {
        return 250 * getPriceMultiplierBasedOnVolume(this.volume);;
    }

    create() {
        const toppingType = requestComponentsChose('topping') as ToppingType;

        this.ingredients.push(
            this.componentsFactory.createBasis('water'),
            this.componentsFactory.createMain('coffee'),
            this.componentsFactory.createTopping(toppingType)
        )
    }
}