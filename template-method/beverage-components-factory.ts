import {
    almondMilk,
    BeverageBasis,
    BeverageMain,
    BeverageTopping, coconutMilk,
    coffee,
    cream,
    fruits,
    juice, milk,
    soda,
    syrup,
    tea,
    water
} from "./components";

interface IBeverageComponentsFactory {
    createBasis: (...args: any[]) => BeverageBasis
    createMain: (...args: any[]) => BeverageMain
    createTopping: (...args: any[]) => BeverageTopping
}

export type BasisType = 'water' | 'juice' | 'milk' | 'coconutMilk' | 'almondMilk';
export type MainType = 'tea' | 'coffee' | 'fruits';
export type ToppingType = 'cream' | 'syrup' | 'soda';

export class BeverageComponentsFactory implements IBeverageComponentsFactory {
    createBasis = (type: BasisType): BeverageBasis => {
        switch (type) {
            case "juice":
                return juice;
            case "water":
                return water
            case "milk":
                return milk
            case "coconutMilk":
                return coconutMilk
            case "almondMilk":
                return almondMilk
        }
    }

    createMain = (type: MainType) => {
        switch(type) {
            case "tea":
                return tea;
            case "coffee":
                return coffee;
            case "fruits":
                return fruits;
        }
    }

    createTopping = (type: ToppingType): BeverageTopping => {
        switch (type) {
            case "cream":
                return cream;
            case "syrup":
                return syrup;
            case "soda":
                return soda;
        }
    }
}