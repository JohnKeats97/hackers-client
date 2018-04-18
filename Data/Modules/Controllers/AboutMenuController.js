"use strict";

import BaseController from "./BaseController.js";
import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";
class AboutMenuController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.title = "About menu";
        this.url = "/aboutMenu";
    }

    onShow()
    {
        this.view.changeData({title: "About", text: []});
        Services.getAboutText()
            .then((res) =>
            {
                // this.view.changeData({title: "About", text: res.about});
                this.view.changeData({title: "About", text: "Created by John Buevich"});
            })
            .catch((error) =>
            {
                new MessageBox("Network error", "Can't get about info");
            });
    }
}

export default AboutMenuController;
