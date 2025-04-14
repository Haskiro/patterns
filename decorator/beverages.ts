export abstract class Beverage {

    constructor(private description: string) {}

    getDescription = (): string => this.description;

    abstract cost(): number;
}

export class HouseBlend extends Beverage {
    constructor() {
        super('House Blend');
    }
    cost(): number {
        return 200;
    }
}

export class DarkRoast extends Beverage {
    constructor() {
        super('Dark Roast');
    }
    cost(): number {
        return 250;
    }
}

export class Espresso extends Beverage {
    constructor() {
        super('Espresso');
    }
    cost(): number {
        return 230;
    }
}

export class Decaf extends Beverage {
    constructor() {
        super('Decaf');
    }
    cost(): number {
        return 180;
    }
}