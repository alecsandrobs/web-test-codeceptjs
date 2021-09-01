import { DropdownPage } from '../pages/dropdown.page';

Feature('Dropdown').tag('@Dropdown')

Before(async () =>
    actor().amOnPage('/dropdown')
)

Scenario('Select option', async () => {
    actor().selectOption(DropdownPage.select, 'Option 1')
    actor().seeTextEquals('Option 1', DropdownPage.selected)
})

Scenario('Change option', async () => {
    actor().selectOption(DropdownPage.select, 'Option 2')
    actor().selectOption(DropdownPage.select, 'Option 1')
    actor().seeTextEquals('Option 1', DropdownPage.selected)
})