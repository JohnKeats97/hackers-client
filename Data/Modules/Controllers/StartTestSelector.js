"use strict";

import StartTestController from "./StartTestController.js";
import startGameMenuView from "../Views/StartTestView/StartTestView.js";
import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

import EventBus from "../EventBus.js";

class StartTestSelector
{
    constructor()
    {
        this.startGameMenuController = new StartTestController(startGameMenuView);
        this.url = "/startTest";
        this.title = "Start Test";
    }

    show()
    {
        Services.getUser()
            .then(response =>
                {
                    if(response.status === 0) {
                        let eventBus = new EventBus();
                        eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
                    }
                    else
                    {
                        this.startGameMenuController.show();
                    }
                })
            .catch(() =>
                {
                    let eventBus = new EventBus();
                    eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
                    new MessageBox("Offline", "You have gone offline;");
                });
    }

    hide()
    {
        this.startGameMenuController.hide();
        /*
        Services.getUser()
            .then(response =>
            {
                if(response.status === 0)
                    this.startGameMenuController.hide();
            })
            .catch(exit =>
            {
            });
        */
    }

}

export default StartTestSelector;
