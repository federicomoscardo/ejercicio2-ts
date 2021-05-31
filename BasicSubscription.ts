import Subscription from './Subscription'

class BasicSubscription extends Subscription {

    constructor() {
        super('BASIC', 3, 30, false)
    }
    
}

export default BasicSubscription