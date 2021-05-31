
abstract class Subscription {
    private typeOfSubscription : string
    private subscriptionStartDate : Date = new Date()
    private cost : number
    private subscriptionDuration : number
    private subscriptionEndDate : Date = new Date()
    private haveAdvertisement : boolean

    constructor(typeOfSubscription : string, cost : number, subscriptionDuration : number, haveAdvertisement : boolean) {
        this.typeOfSubscription = typeOfSubscription
        this.cost = cost
        this.subscriptionDuration = subscriptionDuration
        this.haveAdvertisement = haveAdvertisement
        
        let now = new Date(Date.now())
        this.subscriptionStartDate = now
        this.subscriptionEndDate.setDate(now.getDate() + subscriptionDuration)
        
    }

    public getTypeOfSubscription() : string {
        return this.typeOfSubscription
    }

    public getSubscriptionStartDate() : string {
        return this.subscriptionStartDate.toLocaleDateString()
    }

    public getCost() : number {
        return this.cost
    }
    
    public getSubscriptionDuration() : number {
        return this.subscriptionDuration
    }

    public getSubscriptionEndDate() : string {
        return this.subscriptionEndDate.toLocaleDateString()
    }

    public getHaveAdvertisement() : string {
        if (this.haveAdvertisement) {
            return 'With Advertisement'
        } else {
            return 'Without Advertisement'
        }
    }

}

export default Subscription