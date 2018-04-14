"use strict";

import AdminController from "./AdminController.js";
import adminView from "../Views/AdminView/AdminView.js";
import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

import EventBus from "../EventBus.js";

class AdminSelector
{
    constructor()
    {
        this.adminController = new AdminController(adminView);
        this.url = "/admin";
        this.title = "Admin";
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
                        if(response.email == "admin_mail@mail.ru" && response.login == "admin_mail") {
                            this.adminController.show();
                        }
                        else {
                            let eventBus = new EventBus();
                            eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
                        }
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
        this.adminController.hide();
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

export default AdminSelector;
