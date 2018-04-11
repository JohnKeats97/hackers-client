"use strict";

import BaseView from "../BaseView/BaseView.js";

let generateStartGameMenuView = require("../StartGameMenuView/StartGameMenuView.pug");

const startGameMenuView = new BaseView(document.getElementsByClassName("page")[0], generateStartGameMenuView,
    {
        title: "Start Game",
        menus:
            [
                {name: "Quick play", id: "/startGame/multiplayer"},
                {name: "Log-in", id: "/startGame/login"},
                {name: "Register", id: "/startGame/register"},
            ]
    });

export default startGameMenuView;
