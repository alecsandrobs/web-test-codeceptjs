
Feature('Multiple Windows').tag('@MultipleWindows')

Before(async () =>
    actor().amOnPage('/windows')
)

Scenario('Opening a new window', async () => {
    actor().click('Click Here')
    actor().assert(2, await actor().grabNumberOfOpenTabs())
    actor().switchToNextTab()
    actor().seeCurrentUrlEquals('/windows/new')
    actor().see('New Window')
    actor().switchToPreviousTab()
    actor().closeOtherTabs()
    actor().assert(1, await actor().grabNumberOfOpenTabs())
})