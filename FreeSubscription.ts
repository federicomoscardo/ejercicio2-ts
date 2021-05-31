import Subscription from './Subscription'

class FreeSubscription extends Subscription {

    constructor() {
        super('FREE', 0, 15, true)
    }
    
}

export default FreeSubscription