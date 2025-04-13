import {Beverage} from "./beverages";

export abstract class CondimentDecorator extends Beverage{
    constructor(
        private beverage: Beverage,
        description: string
    ) {
        super(description + ' - ' + beverage.getDescription())
    }

    getBeverage = () => this.beverage;
}

export class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Milk');
    }

    cost(): number {
        return 20 + this.getBeverage().cost();
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Mocha');
    }

    cost(): number {
        return 25 + this.getBeverage().cost();
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Soy');
    }

    cost(): number {
        return 30 + this.getBeverage().cost();
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage, 'Whip');
    }

    cost(): number {
        return 40 + this.getBeverage().cost();
    }
}