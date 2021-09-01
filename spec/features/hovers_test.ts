import { HoverPage } from '../pages/huver.page';

Feature('Hovers').tag('@Hovers')

Before(async () =>
    actor().amOnPage('/hovers')
)

const users = new DataTable(['number'])
users.add([2])
users.add([1])
users.add([3])

Data(users).Scenario('Access user profile data', async ({current}) => {
    const number = current.number
    actor().moveCursorTo(HoverPage.user(number))
    actor().see(`name: user${number}`, HoverPage.user(number))
    actor().click(HoverPage.linkViewProfile(number))
    actor().seeCurrentUrlEquals(`/users/${number}`)
    actor().see('Not Found')
})