"use strict";

import BaseView from "../BaseView/BaseView.js";

let generateAdminView = require("./AdminView.pug");

const adminView = new BaseView(document.getElementsByClassName("page")[0], generateAdminView,
    {
        title: "Меню",
        menus: []
    });

export default adminView;
