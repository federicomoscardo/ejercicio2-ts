import FreeSubscription from "./FreeSubscription"
import Subscription from './Subscription'

class User {
    private name : string
    private surname : string
    private mail : string
    private birthday : Date
    private typeOfSubscription : Subscription
    
    constructor() {
        this.typeOfSubscription = new FreeSubscription()
    }
    
    public setName(name : string) {
        this.name = name
        return this
    }

    public setSurname(surname : string) {
        this.surname = surname
        return this
    }

    public setMail(mail : string) {
        this.mail = mail
        return this
    }

    public setBirthday(birthday : Date) {
        this.birthday = birthday
        return this
    }

    public changeTypeOfSubscription(newSubscription : Subscription) {
        this.typeOfSubscription = newSubscription
    }

    public getName() : string {
        return this.name
    }

    public getSurname() : string {
        return this.surname
    }

    public getMail() : string {
        return this.mail
    }

    public getBirthday() : string {
        return this.birthday.toLocaleDateString()
    }

    public getTypeOfSubscription() : Subscription {
        return this.typeOfSubscription
    }

    public getAllInformation() {
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
                    + ' - Other Information: ' + this.getTypeOfSubscription().getHaveAdvertisement())
    }

}

export default User