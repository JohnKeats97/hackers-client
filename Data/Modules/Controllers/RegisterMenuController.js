"use strict";

import BaseController from "./BaseController.js";
import Input from "../Blocks/Input/Input.js";
import Services from "../Services.js";
import EventBus from "../EventBus.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";

const eventBus = new EventBus();

class RegisterMenuController extends BaseController
{
    constructor(view)
    {
        super(view);

        this.inputMail = new Input(null, document.registerForm.registerMailInput);
        this.inputNickname = new Input(null, document.registerForm.registerNicknameInput);
        this.inputPassword = new Input(null, document.registerForm.registerPasswordInput);
        this.inputRepeatPassword = new Input(null, document.registerForm.registerRepeatPasswordInput);
        document.registerForm.onsubmit = () => this.submitHandler();
        this.title = "Register";
        this.url = "/startGame/register";
    }

    onShow()
    {
        this.clearInput();
    }

    clearInput()
    {
        this.inputMail.clear();
        this.inputNickname.clear();
        this.inputPassword.clear();
        this.inputRepeatPassword.clear();
    }

    clearErrorInput()
    {
        this.inputMail.clearError();
        this.inputNickname.clearError();
        this.inputPassword.clearError();
        this.inputRepeatPassword.clearError();
    }

    submitHandler()
    {
        let password = this.inputPassword.value; // Костыль, чтобы передать потом для логина
        if(this.validate())
            Services.registerUser(this.inputMail.value, this.inputNickname.value, this.inputPassword.value)
                .then(function(response)
                {
                    Services.checkUser(response.email, password)
                        .then(() => {
                            eventBus.emitEvent({type: "updateUser"});
                            eventBus.emitEvent({type: "changeMenu", newMenuName: "/"});
                        })
                }.bind(password))
                .catch(error =>
                {
                    // new MessageBox(error.response);
                    new MessageBox("User already exists!");
                });

        return false;
    }

    validate()
    {
        let mail = this.inputMail.value;
        let nickname = this.inputNickname.value;
        let pwd = this.inputPassword.value;
        let reppwd = this.inputRepeatPassword.value;
        let bValid = true;

        if(mail === "")
        {
            bValid = false;
        }

        if(nickname === "")
        {
            bValid = false;
        }
        if(pwd === "")
        {
            bValid = false;
        }
        if(reppwd === "")
        {
            bValid = false;
        }

        if(!bValid) {
            new MessageBox("Заполните пустые поля");
        }

        if(pwd !== reppwd)
        {
            bValid = false;
            new MessageBox("Пароли должны совпадать");
        }

        return bValid;
    }

}

export default RegisterMenuController;
