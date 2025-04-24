import {Beverage} from "./beverages";
import {Cup} from "./cup-size-factory";
import {BeverageComponent} from "./components";

export abstract class CondimentDecorator extends Beverage{
    constructor(
        private _beverage: Beverage,
        description: string
    ) {
        super(_beverage.description);
        this._condiments = [..._beverage.condiments, description];
    }

    get beverage() {
        return this._beverage;
    }

    set cup(newCup: Cup) {
        this._beverage.cup = newCup;
        this._cup = newCup;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Мокко');
    }

    cost(): number {
        return 25 + this.beverage.cost();
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Соевый соус');
    }

    cost(): number {
        return 30 + this.beverage.cost();
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Взбитые сливки');
    }

    cost(): number {
        return 40 + this.beverage.cost();
    }
}