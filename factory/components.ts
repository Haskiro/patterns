
export enum BeverageType {
    Basis = 'Основа',
    Main = 'Основной ингредиент',
    Topping = 'Топпинг',
}
export abstract class BeverageComponent {
    constructor(
        private _type: BeverageType,
        private _description: string,
        private _cost: number
    ) {}

    get type() {
        return this._type
    }

    get description() {
        return this._description
    }

    get cost() {
        return this._cost
    }
}

export class BeverageBasis extends BeverageComponent {
    constructor(
        description: string,
        cost: number
                ) {
        super(BeverageType.Basis, description, cost)
    }
}

export class BeverageMain extends BeverageComponent {
    constructor(
        description: string,
        cost: number
    ) {
        super(BeverageType.Main, description, cost)
    }
}

export class BeverageTopping extends BeverageComponent {
    constructor(
        description: string,
        cost: number
    ) {
        super(BeverageType.Topping, description, cost)
    }
}

// Основа
export const water = new BeverageBasis('Вода', 25);
export const juice = new BeverageBasis('Сок', 50);

// Основной ингредиент
export const tea = new BeverageMain('Чай', 30);
export const coffee = new BeverageMain('Кофе', 40);
export const fruits = new BeverageMain('Фрукты', 60);

// Топпер
export const cream = new BeverageTopping('Сливки', 24);
export const syrup = new BeverageTopping('Сироп', 33);
export const soda = new BeverageTopping('Газировка', 15);
