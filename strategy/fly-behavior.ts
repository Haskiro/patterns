export interface FlyBehavior {
    fly: VoidFunction;
}

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log('Я не летаю')
    }
}

export class FlyOnWings implements FlyBehavior {
    fly(): void {
        console.log('Я летаю на крыльях')
    }
}

export class FlyOnRocket implements FlyBehavior {
    fly(): void {
        console.log('Я летаю на ракете')
    }
}

export class FlyOnRadioControl implements FlyBehavior {
    fly(): void {
        console.log('Я летаю на радиоуправлении')
    }
}