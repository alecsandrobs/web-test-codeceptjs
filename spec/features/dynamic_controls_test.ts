
Feature('Dynamic Controls').tag('@DynamicControls')

Before(async () =>
    actor().amOnPage('/dynamic_controls')
)

Scenario('Hiding and showing an element', async () => {
    actor().seeElementInDOM(checkbox)
    actor().click('Remove')
    actor().seeTextEquals("It's gone!", message)
    actor().dontSeeElementInDOM(checkbox)
    actor().click('Add')
    actor().seeTextEquals("It's back!", message)
    actor().seeElementInDOM(checkbox)
})

Scenario('Enabling and disabling a field', async () => {
    actor().seeElement(inputDisabled)
    actor().click('Enable')
    actor().seeTextEquals("It's enabled!", message)
    actor().seeElement(inputEnabled)
    actor().fillField(inputEnabled, "The book is on the table")
    actor().seeInField(inputEnabled, "The book is on the table")
    actor().click('Disable')
    actor().seeTextEquals("It's disabled!", message)
    actor().seeElement(inputDisabled)
    actor().seeInField(inputDisabled, "The book is on the table")
})

const checkbox = locate('#checkbox')
const inputEnabled = locate('#input-example input[type="text"]:not(:disabled)')
const inputDisabled = locate('#input-example input[type="text"]:disabled')
const message = locate('#message')