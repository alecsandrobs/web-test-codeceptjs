import { ShadowDomPage } from '../pages/shadow-dom.page';

Feature('Shadown DOM').tag('@ShadownDOM')

Before(async () =>
    actor().amOnPage('/shadowdom')
)

Scenario('Verifying text fields', async () => {
    actor().seeTextEquals(ShadowDomPage.text, ShadowDomPage.firstField)
    actor().seeTextEquals(ShadowDomPage.text, ShadowDomPage.secondFieldLine(1))
    actor().seeTextEquals("In a list!", ShadowDomPage.secondFieldLine(2))
})