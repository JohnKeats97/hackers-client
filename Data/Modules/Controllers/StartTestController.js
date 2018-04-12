"use strict";



class StartTestController
{
    constructor(view)
    {
        this.view = view;

        this.title = "Start Test";
        this.url = "/startTest";
    }

    onShow()
    {
        this.view.changeData({title: "Start Test", players: []});
        // Services.getLeaders()
        //     .then(result =>
        //     {
        //         let highlight = 10;
        //
        //         if(result[10] && result[10].position <= 10)
        //         {
        //             highlight = result[10].position - 1;
        //             result.pop();
        //         }
        //
        //         this.deleteBackButton();
        //         this.view.changeData({title: "Leaderboard", players: result, highlightIndex: highlight});
        //         this.createBackButton();
        //     })
        //     .catch(() =>
        //     {
        //         this.deleteBackButton();
        //         new MessageBox("Network error", "Can't get leaderboard info");
        //         this.createBackButton();
        //     });

        this.view.changeData({title: "Start Test", tests: [
            {
                name: "Хеш-таблица",
                text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
            },
            {
                name: "Хеш-таблица",
                text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
            },
            {
                name: "Хеш-таблица",
                text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."
            }
        ]});
    }

    hide()
    {
        this.view.hide();
        this.onHide();
    }

    onHide(){}

    show()
    {
        this.view.show();
        this.onShow();
    }

    goBackHandler()
    {
        eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
    }
}

export default StartTestController;
