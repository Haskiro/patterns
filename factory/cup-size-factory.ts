
export enum CupSize {
    S = '0.4',
    M = '0.6',
    L = '0.8',
}

export class Cup {
    constructor(
        private _volume: CupSize,
        private _coefficient: number
    ) {}

    get volume() {
        return this._volume;
    }

    get coefficient() {
        return this._coefficient;
    }
}

class SmallCup extends Cup {
    constructor() {
        super(CupSize.S, 1);
    }
}

class MediumCup extends Cup {
    constructor() {
        super(CupSize.M, 1.2);
    }
}

class LargeCup extends Cup {
    constructor() {
        super(CupSize.L, 1.4);
    }
}


interface ICupSizeFactory {
    createCup: (size: CupSize) => void;
}

export class CupSizeFactory implements ICupSizeFactory {
    createCup(size: CupSize) {
        switch (size) {
            case CupSize.S:
                return new SmallCup();
            case CupSize.M:
                return new MediumCup();
            case CupSize.L:
                return new LargeCup();
        }
    }
}