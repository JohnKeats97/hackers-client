"use strict";

import BaseView from "../BaseView/BaseView.js";
let generateStartGameMenuView = require("../StartTestView/StartTestView.pug");

const gameModeMenuView = new BaseView(document.getElementsByClassName("page")[0], generateStartGameMenuView,
    {
        title: "Game Mode",
        menus:
            [
                {name: "Stand-alone", id: "/startGame/offline"},
                {name: "Singleplayer", id: "/startGame/online"},
                {name: "Multiplayer", id: "/startGame/multiplayer"},
            ]
    });

export default gameModeMenuView;
