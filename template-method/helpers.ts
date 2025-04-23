import {cream, juice, soda, syrup, water} from "./components";

const reader = require("readline-sync");

export const requestComponentsChose = (type: 'basis' | 'topping')  => {
    const componentsList = type === 'basis' ? ['water', 'juice', 'milk', 'coconutMilk', 'almondMilk'] : ['cream', 'syrup', 'soda'];

    let question: string;

    switch (type) {
        case "basis":
            question = 'Выберите основу:\n' +
                '   1: Вода\n' +
                '   2: Сок\n' +
                '   3: Молоко\n' +
                '   4: Кокосовое молоко\n' +
                '   5: Минадльное молоко\n'
            break;
        case "topping":
            question = 'Выберите топпинг:\n' +
                '   1: Сливки\n' +
                '   2: Сироп\n' +
                '   3: Газировка\n'
            break;
    }

    const answer = reader.question(question);
    return componentsList[parseInt(answer, 10) - 1];
}

export const sleep = async (ms: number) => {
    await new Promise( resolve => setTimeout(resolve, ms) );
}