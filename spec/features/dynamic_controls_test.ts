import { DynamicControlPage } from '../pages/dynamic_control.page';

Feature('Dynamic Controls').tag('@DynamicControls')

Before(async () =>
    actor().amOnPage('/dynamic_controls')
)

Scenario('Hiding and showing an element', async () => {
    actor().seeElementInDOM(DynamicControlPage.checkbox)
    actor().click('Remove')
    actor().seeTextEquals("It's gone!", DynamicControlPage.message)
    actor().dontSeeElementInDOM(DynamicControlPage.checkbox)
    actor().click('Add')
    actor().seeTextEquals("It's back!", DynamicControlPage.message)
    actor().seeElementInDOM(DynamicControlPage.checkbox)
})

Scenario('Enabling and disabling a field', async () => {
    actor().seeElement(DynamicControlPage.inputDisabled)
    actor().click('Enable')
    actor().seeTextEquals("It's enabled!", DynamicControlPage.message)
    actor().seeElement(DynamicControlPage.inputEnabled)
    actor().fillField(DynamicControlPage.inputEnabled, "The book is on the table")
    actor().seeInField(DynamicControlPage.inputEnabled, "The book is on the table")
    actor().click('Disable')
    actor().seeTextEquals("It's disabled!", DynamicControlPage.message)
    actor().seeElement(DynamicControlPage.inputDisabled)
    actor().seeInField(DynamicControlPage.inputDisabled, "The book is on the table")
})