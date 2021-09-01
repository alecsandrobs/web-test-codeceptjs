import { ButtonPage } from '../pages/button.page';
import { LinkPage } from '../pages/link.page';
import { LoginPage } from '../pages/login.page';
import { MessagesPage } from '../pages/messages.page';

Feature('Login').tag('@Login')

Before(async () =>
    actor().amOnPage('/login')
)

Scenario('Successful login', async () => {
    actor().fillField(LoginPage.userField, 'tomsmith')
    actor().fillField(LoginPage.passField, 'SuperSecretPassword!')
    actor().click(ButtonPage.loginButton)
    actor().see('You logged into a secure area!', MessagesPage.messageSuccess)
    actor().see('Secure Area')
    actor().see('Welcome to the Secure Area. When you are done click logout below.')
    actor().seeElement(LinkPage.logoutLink)
    actor().dontSeeElementInDOM(ButtonPage.loginButton)
})

const userCredentials = [
    {username: 'tomsmith', password: 'tomsmith', field: 'password'},
    {username: 'smithtom', password: 'SuperSecretPassword', field: 'username'},
]

Data(userCredentials).Scenario('Unsuccessful login', async ({current}) => {
    actor().fillField(LoginPage.userField, current.username)
    actor().fillField(LoginPage.passField, current.password)
    actor().click(ButtonPage.loginButton)
    actor().see(`Your ${current.field} is invalid!`, MessagesPage.messageError)
    actor().seeElement(ButtonPage.loginButton)
    actor().dontSeeElementInDOM(LinkPage.logoutLink)
})
