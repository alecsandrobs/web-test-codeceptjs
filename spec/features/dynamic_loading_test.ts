
Feature('Dynamic Loading').tag('@DynamicLoading')

Scenario('Loading a hiden element', async () => {
    actor().amOnPage(page(1))
    actor().dontSeeElementInDOM('#loading')
    actor().dontSeeElement('#finish')
    actor().click('Start')
    actor().seeTextEquals('Loading... ', '#loading')
    actor().seeTextEquals('Hello World!', '#finish')
})

Scenario('Loading a not present element', async () => {
    actor().amOnPage(page(2))
    actor().dontSeeElementInDOM('#loading')
    actor().dontSeeElementInDOM('#finish')
    actor().click('Start')
    actor().seeTextEquals('Loading... ', '#loading')
    actor().seeTextEquals('Hello World!', '#finish')
})

const page = (number:number) => `/dynamic_loading/${number}`