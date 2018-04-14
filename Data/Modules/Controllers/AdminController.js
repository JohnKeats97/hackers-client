"use strict";

import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

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
                    {name: "Хеш-таблица", text: "Реализуйте структуру данных типа “множество строк” на основе динамической хеш-таблицы с открытой адресацией. Хранимые строки непустые и состоят из строчных латинских букв."},
                    {name: "Порядок обхода", text: "Дано число N < 106 и последовательность целых чисел из [-231..231] длиной N." +
                    "Требуется построить бинарное дерево, заданное наивным порядком вставки." +
                    "Т.е., при добавлении очередного числа K в дерево с корнем root, если root→Key ≤ K, то узел K добавляется в правое поддерево root; иначе в левое поддерево root." +
                    "Рекурсия запрещена."},
                    {name: "Декартово дерево", text: "Дано число N < 106 и последовательность пар целых чисел из [-231..231] длиной N." +
                    "Построить декартово дерево из N узлов, характеризующихся парами чисел {Xi, Yi}." +
                    "Каждая пара чисел {Xi, Yi} определяет ключ Xi и приоритет Yi в декартовом дереве."},
                    {name: "Использование АВЛ-дерева", text: "В одной военной части решили построить в одну шеренгу по росту. Т.к. часть была далеко не образцовая, то солдаты часто приходили не вовремя, а то их и вовсе приходилось выгонять из шеренги за плохо начищенные сапоги. Однако солдаты в процессе прихода и ухода должны были всегда быть выстроены по росту – сначала самые высокие, а в конце – самые низкие. "},
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

export default AdminController;
