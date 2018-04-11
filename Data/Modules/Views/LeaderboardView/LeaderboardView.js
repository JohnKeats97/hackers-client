"use strict";

import BaseView from "../BaseView/BaseView.js";
let generateLeaderboardView = require("./LeaderboardView.pug");

const leaderboard = new BaseView(document.getElementsByClassName("page")[0], generateLeaderboardView, {title: "Таблица лидеров", players: []});

export default leaderboard;
