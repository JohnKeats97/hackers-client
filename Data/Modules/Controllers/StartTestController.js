"use strict";

import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";
import EventBus from "../EventBus.js";

class StartTestController
{
    constructor(view)
    {
        this.view = view;

        this.title = "Start Test";
        this.url = "/startTest";

        this.userTest = [];
    }

    onShow()
    {
        this.view.changeData({title: "Start Test", menus: []});
        Services.getTest()
            .then(result =>
            {
                result = result.reverse();
                this.view.changeData({title: "Start Test", menus: result});

                let testButtons = document.querySelectorAll(".testForm__testButton");
                testButtons.forEach((item) =>
                {
                    let id = +item.dataset.id;
                    if (this.userTest.indexOf(id) < 0) {
                        item.addEventListener('click', ()=>{
                            let input = document.getElementById(id);
                            let value = input.value;
                            if (value.toString().trim()) {
                                value = value.toString().trim();
                                Services.checkTest(id, value)
                                    .then((result) => {
                                        if (result.answer) {
                                            alert("Верно");
                                        }
                                        else {
                                            alert("Неверно");
                                        }
                                    })
                                    .catch(error => {
                                        new MessageBox("Test Error", "Невозможно проверить задание");
                                    });
                            }
                        });
                    }
                    else {
                        let parent = item.parentNode;
                        parent.innerHTML = "Вы уже выполнили это задание";
                    }
                });
            })
            .catch(() =>
            {
                new MessageBox("Network error", "Can't get test");
            });

        // this.view.changeData({title: "Меню",
        //     menus:
        //         [
        //             {name: "Хеш-таблица", id:"1", text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."},
        //             {name: "Порядок обхода", id:"2", text: "Дано число N < 106 и последовательность целых чисел из [-231..231] длиной N." +
        //             "Требуется построить бинарное дерево, заданное наивным порядком вставки." +
        //             "Т.е., при добавлении очередного числа K в дерево с корнем root, если root→Key ≤ K, то узел K добавляется в правое поддерево root; иначе в левое поддерево root." +
        //             "Рекурсия запрещена."},
        //             {name: "Декартово дерево", id:"3", text: "Дано число N < 106 и последовательность пар целых чисел из [-231..231] длиной N." +
        //             "Построить декартово дерево из N узлов, характеризующихся парами чисел {Xi, Yi}." +
        //             "Каждая пара чисел {Xi, Yi} определяет ключ Xi и приоритет Yi в декартовом дереве."},
        //             {name: "Использование АВЛ-дерева", id:"4", text: "В одной военной части решили построить в одну шеренгу по росту. Т.к. часть была далеко не образцовая, то солдаты часто приходили не вовремя, а то их и вовсе приходилось выгонять из шеренги за плохо начищенные сапоги. Однако солдаты в процессе прихода и ухода должны были всегда быть выстроены по росту – сначала самые высокие, а в конце – самые низкие. "},
        //         ]});


        // let testButtons = document.querySelectorAll(".testForm__testButton");
        // testButtons.forEach((item) =>
        // {
        //     let id = +item.dataset.id;
        //     if (this.userTest.indexOf(id) < 0) {
        //         item.addEventListener('click', ()=>{
        //             let input = document.getElementById(id);
        //             let value = input.value;
        //             if (value.toString().trim()) {
        //                 value = value.toString().trim();
        //                 Services.checkTest(id, value)
        //                     .then((result) => {
        //                         if (result.answer) {
        //                             alert("Верно");
        //                         }
        //                         else {
        //                             alert("Неверно");
        //                         }
        //                     })
        //                     .catch(error => {
        //                         new MessageBox("Test Error", "Невозможно проверить задание");
        //                     });
        //             }
        //         });
        //     }
        //     else {
        //         let parent = item.parentNode;
        //         parent.innerHTML = "Вы уже выполнили это задание";
        //     }
        // });
    }


    hide()
    {
        this.view.hide();
        this.onHide();
    }

    onHide(){
        this.view.changeData({title: "Start Test", menus: []});
    }

    show(tests)
    {
        this.userTest = tests;
        this.view.show();
        this.onShow();
    }

    goBackHandler()
    {
        let eventBus = new EventBus();
        eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
    }

}

export default StartTestController;
