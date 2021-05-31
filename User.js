"use strict";
exports.__esModule = true;
var FreeSubscription_1 = require("./FreeSubscription");
var User = /** @class */ (function () {
    function User() {
        this.typeOfSubscription = new FreeSubscription_1["default"]();
    }
    User.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    User.prototype.setSurname = function (surname) {
        this.surname = surname;
        return this;
    };
    User.prototype.setMail = function (mail) {
        this.mail = mail;
        return this;
    };
    User.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
        return this;
    };
    User.prototype.changeTypeOfSubscription = function (newSubscription) {
        this.typeOfSubscription = newSubscription;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getSurname = function () {
        return this.surname;
    };
    User.prototype.getMail = function () {
        return this.mail;
    };
    User.prototype.getBirthday = function () {
        return this.birthday.toLocaleDateString();
    };
    User.prototype.getTypeOfSubscription = function () {
        return this.typeOfSubscription;
    };
    User.prototype.getAllInformation = function () {
        return console.log('\nName: ' + this.getName() + '\n'
            + 'Surname: ' + this.getSurname() + '\n'
            + 'Mail: ' + this.getMail() + '\n'
            + 'Birthday: ' + this.getBirthday() + '\n'
            + 'SUBSCRIPTION:\n'
            + ' - Type of subscription: ' + this.getTypeOfSubscription().getTypeOfSubscription() + '\n'
            + ' - Cost: U$S ' + this.getTypeOfSubscription().getCost() + '\n'
            + ' - Period of subscription: ' + this.getTypeOfSubscription().getSubscriptionDuration() + ' days\n'
            + ' - Subscription Start: ' + this.getTypeOfSubscription().getSubscriptionStartDate() + '\n'
            + ' - Subscription End: ' + this.getTypeOfSubscription().getSubscriptionEndDate() + '\n'
            + ' - Other Information: ' + this.getTypeOfSubscription().getHaveAdvertisement());
    };
    return User;
}());
exports["default"] = User;
