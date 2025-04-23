export abstract class Desert {
    constructor(
        private _description: string,
        private _cost: number
    ) {}

    get description() {
        return this._description
    }

    get cost() {
        return this._cost
    }
}

export class Croissant extends Desert {
    constructor() {
        super('Круасан', 120)
    }
}

export class Pie extends Desert {
    constructor() {
        super('Пирожок', 80)
    }
}

export class Strudel extends Desert {
    constructor() {
        super('Штрудель', 140)
    }
}