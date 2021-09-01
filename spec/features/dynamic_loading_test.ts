import { ButtonPage } from '../pages/button.page';
import { DynamicLoadingPage } from '../pages/dynamic-loading.page';

Feature('Dynamic Loading').tag('@DynamicLoading')

Scenario('Loading a hiden element', async () => {
    actor().amOnPage(DynamicLoadingPage.url(1))
    actor().dontSeeElementInDOM(DynamicLoadingPage.loading)
    actor().dontSeeElement(DynamicLoadingPage.finish)
    actor().click(ButtonPage.startButton)
    actor().seeTextEquals('Loading... ', DynamicLoadingPage.loading)
    actor().seeTextEquals('Hello World!', DynamicLoadingPage.finish)
})

Scenario('Loading a not present element', async () => {
    actor().amOnPage(DynamicLoadingPage.url(2))
    actor().dontSeeElementInDOM(DynamicLoadingPage.loading)
    actor().dontSeeElementInDOM(DynamicLoadingPage.finish)
    actor().click(ButtonPage.startButton)
    actor().seeTextEquals('Loading... ', DynamicLoadingPage.loading)
    actor().seeTextEquals('Hello World!', DynamicLoadingPage.finish)
})