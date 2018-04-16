"use strict";

import StartTestController from "./StartTestController.js";
import startTestView from "../Views/StartTestView/StartTestView.js";
import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

import EventBus from "../EventBus.js";

class StartTestSelector
{
    constructor()
    {
        this.startTestController = new StartTestController(startTestView);
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
                        // this.startTestController.show(response.tests);
                        this.startTestController.show([1, 3]);
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
        this.startTestController.hide();
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
