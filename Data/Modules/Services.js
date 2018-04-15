/**
 * designService
 * This module is designed to provide additional functionality for easier page decoration
 */

'use strict';

import Http from "./Http/http.js";

class Services
{
    static getAdmin()
    {
        return Http.FetchGet("/admin");
    }

    static getTest()
    {
        return Http.FetchGet("/test");
    }

    static getLeaders()
    {
        return Http.FetchGet("/leaderboard");
    }

    static getAboutText()
    {
        return Http.FetchGet("/about");
    }

    static isValidMail(text)
    {
        let reg = /[0-9A-Za-z.\-\_]+@[0-9A-Za-z.\-\_]+\.[A-Za-z\-\_]+/; // RegExp for mail
        let match = text.match(reg);

        return (match != null && match[0] == text);
    }

    static checkUser(mail, pwd)
    {
        return Http.FetchPost("/login", {"loginEmail": mail, "password": pwd});
    }

    static registerUser(mail, nickname, pwd)
    {
        return Http.FetchPost("/users", {"login": nickname, "email": mail, "password": pwd});
    }

    static checkTest(id, answer)
    {
        return Http.FetchPost("/test", {"id": id, "answer": answer});
    }

    static addTestAdmin(name, text)
    {
        return Http.FetchPost("/add-test", {"name": name, "tet": text});
    }

    static deleteTestAdmin(id)
    {
        return Http.FetchPost("/delete-test", {"id": id});
    }

    static changeTestAdmin(id, name, text)
    {
        return Http.FetchPost("/change-test", {"id": id, "name": name, "tet": text});
    }

    static getUser()
    {
        return Http.FetchGet("/info");
    }

    static logoutUser()
    {
        return Http.FetchGet("/logout");
    }
}

export default Services;
