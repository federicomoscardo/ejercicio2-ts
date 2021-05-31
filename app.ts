import FreeSubscription from './FreeSubscription'
import BasicSubscription from './BasicSubscription'
import PremiumSubscription from './PremiumSubscription'
import User from './User'

let user1 = new User()
    .setName('Federico')
    .setSurname('Moscardo')
    .setMail('federico.moscardo@gmail.com')
    .setBirthday(new Date(1990,6,27))


user1.getAllInformation()

user1.changeTypeOfSubscription(new BasicSubscription())

user1.getAllInformation()

user1.changeTypeOfSubscription(new PremiumSubscription())

user1.getAllInformation()


