import MainMenuController from "./MainMenuController.js";
import mainMenuView from "../Views/MainMenuView/MainMenuView.js";
import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

import EventBus from "../EventBus.js";

class MainMenuSelector
{
    constructor()
    {
        this.mainMenuController = new MainMenuController(mainMenuView);
        this.url = "/";
        this.title = "Меню";
    }

    show()
    {
        Services.getUser()
            .then(response =>
            {
                if(response.status === 0)
                {
                    let eventBus = new EventBus();
                    eventBus.emitEvent({type: "changeMenu", newMenuName: "/menuUnRegister"});
                }
                else
                {
                    this.mainMenuController.show();
                }
            })
            .catch(() =>
            {
                new MessageBox("Нет подключения к интернету");
            });
    }

    hide()
    {
        this.mainMenuController.hide();
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

export default MainMenuSelector;