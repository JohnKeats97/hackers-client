"use strict";

import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";
import EventBus from "../EventBus.js";

class AdminController
{
    constructor(view)
    {
        this.view = view;

        this.title = "Admin";
        this.url = "/admin";
    }

    onShow()
    {
        // this.view.changeData({title: "Admin", menus: []});
        // Services.getAdmin()
        //     .then(result =>
        //     {
        //         this.view.changeData({title: "Admin", menus: result});
        //     })
        //     .catch(() =>
        //     {
        //         new MessageBox("Network error", "Can't get test");
        //     });

        this.view.changeData({title: "Меню",
            menus:
                [
                    {name: "Хеш-таблица", id:"1", text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."},
                    {name: "Порядок обхода", id:"2", text: "Дано число N < 106 и последовательность целых чисел из [-231..231] длиной N." +
                    "Требуется построить бинарное дерево, заданное наивным порядком вставки." +
                    "Т.е., при добавлении очередного числа K в дерево с корнем root, если root→Key ≤ K, то узел K добавляется в правое поддерево root; иначе в левое поддерево root." +
                    "Рекурсия запрещена."},
                    {name: "Декартово дерево", id:"3", text: "Дано число N < 106 и последовательность пар целых чисел из [-231..231] длиной N." +
                    "Построить декартово дерево из N узлов, характеризующихся парами чисел {Xi, Yi}." +
                    "Каждая пара чисел {Xi, Yi} определяет ключ Xi и приоритет Yi в декартовом дереве."},
                    {name: "Использование АВЛ-дерева", id:"4", text: "В одной военной части решили построить в одну шеренгу по росту. Т.к. часть была далеко не образцовая, то солдаты часто приходили не вовремя, а то их и вовсе приходилось выгонять из шеренги за плохо начищенные сапоги. Однако солдаты в процессе прихода и ухода должны были всегда быть выстроены по росту – сначала самые высокие, а в конце – самые низкие. "},
                ]});

        let addButton = document.querySelectorAll(".button-AddTest")[0];
            addButton.addEventListener('click', ()=>{
            let name = document.querySelectorAll(".name-AddTest")[0];
            let text = document.querySelectorAll(".text-AddTest")[0];
            name = name.value.toString().trim();
            text = text.value.toString().trim();
            if (name && text) {
                Services.addTestAdmin(name, text)
                    .then((result) => {
                        if (result.answer) {
                            new MessageBox("Задание добавлено");
                            let eventBus = new EventBus();
                            eventBus.emitEvent({type: "changeMenu", newMenuName: "/admin"});
                        }
                        else {
                            new MessageBox("Задание не добавлено");
                        }
                    })
                    .catch(error => {
                        new MessageBox("Add Error", "Невозможно добавить задание");
                    });
            }
        });

        let deleteButtons = document.querySelectorAll(".adminForm__button-delete");
        deleteButtons.forEach((item) =>
        {
            item.addEventListener('click', ()=>{
                let id = item.dataset.id;
                let test = document.getElementById(id);
                if (test) {
                    Services.deleteTestAdmin(id)
                        .then((result) => {
                            if (result.answer) {
                                new MessageBox("Задание удалено");
                                test.remove();
                            }
                            else {
                                new MessageBox("Задание не удалено");
                            }
                        })
                        .catch(error => {
                            new MessageBox("Delete Error", "Невозможно удалить задание");
                        });
                }

            });
        });

        let changeButtons = document.querySelectorAll(".adminForm__button-change");
        changeButtons.forEach((item) =>
        {
            item.addEventListener('click', ()=>{
                let id = item.dataset.id;
                let test = document.getElementById(id);
                if (test) {
                    let name = test.childNodes[0].value;
                    let text = test.childNodes[1].value;
                    Services.changeTestAdmin(id, name, text)
                        .then((result) => {
                            if (result.answer) {
                                new MessageBox("Задание изменено");
                                test.remove();
                            }
                            else {
                                new MessageBox("Задание не изменено");
                            }
                        })
                        .catch(error => {
                            new MessageBox("Delete Error", "Невозможно изменить задание");
                        });
                }
            });
        });
    }

    hide()
    {
        this.view.hide();
        this.onHide();
    }

    onHide(){
        this.view.changeData({title: "Start Test", menus: []});
    }

    show()
    {
        this.view.show();
        this.onShow();
    }

    goBackHandler()
    {
        let eventBus = new EventBus();
        eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
    }
}

export default AdminController;
