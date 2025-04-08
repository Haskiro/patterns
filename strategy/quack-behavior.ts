export interface QuackBehavior {
    quack: VoidFunction;
}

export class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log('Я не крякаю')
    }
}

export class LoudQuack implements QuackBehavior {
    quack(): void {
        console.log('Я крякаю громко')
    }
}

export class RareQuack implements QuackBehavior {
    quack(): void {
        console.log('Я крякаю редко')
    }
}

export class LongQuack implements QuackBehavior {
    quack(): void {
        console.log('Я крякаю протяжно')
    }
}