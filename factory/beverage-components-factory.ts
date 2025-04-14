import {
    BeverageBasis,
    BeverageMain,
    BeverageTopping,
    coffee,
    cream,
    fruits,
    juice,
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

export type BasisType = 'water' | 'juice';
export type MainType = 'tea' | 'coffee' | 'fruits';
export type ToppingType = 'cream' | 'syrup' | 'soda';

export class BeverageComponentsFactory implements IBeverageComponentsFactory {
    createBasis = (type: BasisType): BeverageBasis => {
        switch (type) {
            case "juice":
                return juice;
            case "water":
                return water
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