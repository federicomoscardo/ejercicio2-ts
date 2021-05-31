import Subscription from './Subscription'

class PremiumSubscription extends Subscription {

    constructor() {
        super('PREMIUM', 9, 30, false)
    }
    
}

export default PremiumSubscription