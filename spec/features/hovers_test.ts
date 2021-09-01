
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
    actor().moveCursorTo(user(number))
    actor().see(`name: user${number}`, user(number))
    actor().click(linkViewProfile(number))
    actor().seeCurrentUrlEquals(`/users/${number}`)
    actor().see('Not Found')
})

const user = (number: number) => locate('.figure').at(number)
const linkViewProfile = (number:number) => locate('a').withText('View profile').at(number)