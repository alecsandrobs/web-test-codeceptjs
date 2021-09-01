import { EntryAdPage } from '../pages/entry-ad.page';
import { LinkPage } from '../pages/link.page';

Feature('Entry Ad').tag('@EntryAd')

Before(async () =>
    actor().amOnPage('/entry_ad')
)

Scenario('Closing a modal', async () => {
    actor().seeElement(EntryAdPage.modal)
    actor().click(EntryAdPage.modalFooterClose)
    actor().dontSeeElement(EntryAdPage.modal)
    actor().seeElementInDOM(EntryAdPage.modal)
    actor().see('This is a modal window', EntryAdPage.modalHeader)
    actor().see("It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).", EntryAdPage.modalBody)
    actor().see('Close', EntryAdPage.modalFooter)
    actor().click(LinkPage.clickHereLinkLowerCase)
    actor().click(LinkPage.clickHereLinkLowerCase)
    actor().seeElement(EntryAdPage.modal)
})