
Feature('Entry Ad').tag('@EntryAd')

Before(async () =>
    actor().amOnPage('/entry_ad')
)

Scenario('Closing a modal', async () => {
    actor().seeElement(modal)
    actor().click(modalFooterClose)
    actor().dontSeeElement(modal)
    actor().seeElementInDOM(modal)
    actor().see('This is a modal window', modalHeader)
    actor().see("It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).", modalBody)
    actor().see('Close', modalFooter)
    actor().click('click here')
    actor().click('click here')
    actor().seeElement(modal)
})

const modal = locate('#modal')
const modalHeader = modal.find('.modal-title')
const modalBody = modal.find('.modal-body')
const modalFooter = modal.find('.modal-footer')
const modalFooterClose = modalFooter.find('p')
const linkClickHere = locate('a').withText('click here')