"use strict";
exports.__esModule = true;
var Subscription = /** @class */ (function () {
    function Subscription(typeOfSubscription, cost, subscriptionDuration, haveAdvertisement) {
        this.subscriptionStartDate = new Date();
        this.subscriptionEndDate = new Date();
        this.typeOfSubscription = typeOfSubscription;
        this.cost = cost;
        this.subscriptionDuration = subscriptionDuration;
        this.haveAdvertisement = haveAdvertisement;
        var now = new Date(Date.now());
        this.subscriptionStartDate = now;
        this.subscriptionEndDate.setDate(now.getDate() + subscriptionDuration);
    }
    Subscription.prototype.getTypeOfSubscription = function () {
        return this.typeOfSubscription;
    };
    Subscription.prototype.getSubscriptionStartDate = function () {
        return this.subscriptionStartDate.toLocaleDateString();
    };
    Subscription.prototype.getCost = function () {
        return this.cost;
    };
    Subscription.prototype.getSubscriptionDuration = function () {
        return this.subscriptionDuration;
    };
    Subscription.prototype.getSubscriptionEndDate = function () {
        return this.subscriptionEndDate.toLocaleDateString();
    };
    Subscription.prototype.getHaveAdvertisement = function () {
        if (this.haveAdvertisement) {
            return 'With Advertisement';
        }
        else {
            return 'Without Advertisement';
        }
    };
    return Subscription;
}());
exports["default"] = Subscription;
