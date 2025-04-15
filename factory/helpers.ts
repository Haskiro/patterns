import {cream, juice, soda, syrup, water} from "./components";

const reader = require("readline-sync");

export const requestComponentsChose = (type: 'basis' | 'topping')  => {
    const componentsList = type === 'basis' ? ['water', 'juice'] : ['cream', 'syrup', 'soda'];

    let question: string;

    switch (type) {
        case "basis":
            question = 'Выберите основу:\n' +
                '   1: Вода\n' +
                '   2: Сок\n'
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