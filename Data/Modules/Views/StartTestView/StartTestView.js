"use strict";

import BaseView from "../BaseView/BaseView.js";

let generateStartGameMenuView = require("./StartTestView.pug");

const startGameMenuView = new BaseView(document.getElementsByClassName("page")[0], generateStartGameMenuView,
    {
        title: "Start Test",
        tests: []
    });

export default startGameMenuView;
