"use strict";
exports.__esModule = true;
var BasicSubscription_1 = require("./BasicSubscription");
var PremiumSubscription_1 = require("./PremiumSubscription");
var User_1 = require("./User");
var user1 = new User_1["default"]()
    .setName('Federico')
    .setSurname('Moscardo')
    .setMail('federico.moscardo@gmail.com')
    .setBirthday(new Date(1990, 6, 27));
user1.getAllInformation();
user1.changeTypeOfSubscription(new BasicSubscription_1["default"]());
user1.getAllInformation();
user1.changeTypeOfSubscription(new PremiumSubscription_1["default"]());
user1.getAllInformation();
