
Feature('Login').tag('@Login')

Before(async () =>
    actor().amOnPage('/login')
)

const userCredentials = new DataTable(['username', 'password', 'field'])
userCredentials.add(['tomsmith', 'tomsmith', 'password'])
userCredentials.add(['smithtom', 'SuperSecretPassword!', 'username'])

Scenario('Successful login', async () => {
    actor().fillField(userField, 'tomsmith')
    actor().fillField(passField, 'SuperSecretPassword!')
    actor().click(buttonLogin)
    actor().see('You logged into a secure area!', messageSuccess)
    actor().see('Secure Area')
    actor().see('Welcome to the Secure Area. When you are done click logout below.')
    actor().seeElement(linkElement)
    actor().dontSeeElementInDOM(buttonLogin)
})

Data(userCredentials).Scenario('Unsuccessful login', async ({current}) => {
    actor().fillField(userField, current.username)
    actor().fillField(passField, current.password)
    actor().click(buttonLogin)
    actor().see(`Your ${current.field} is invalid!`, messageError)
    actor().seeElement(buttonLogin)
    actor().dontSeeElementInDOM(linkElement)
})

const userField = locate('#username')
const passField = locate('#password')
const messages = locate('#flash-messages')
const messageSuccess = messages.find('.flash.success')
const messageError = messages.find('.flash.error')
const linkElement = locate('a').withText('Logout')
const buttonLogin = locate('button').withText('Login')