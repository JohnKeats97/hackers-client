"use strict";

import BaseView from "../BaseView/BaseView.js";

let generateStartGameMenuView = require("./StartTestView.pug");

const startGameMenuView = new BaseView(document.getElementsByClassName("page")[0], generateStartGameMenuView,
    {title: "Start Test", tests: [
        {
            name: "Хеш-таблица",
            text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
        },
        {
            name: "Хеш-таблица",
            text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
        },
        {
            name: "Хеш-таблица",
            text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
        }
    ]});

export default startGameMenuView;
