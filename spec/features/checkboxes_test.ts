import { CheckbockesPage } from '../pages/checkboxes.page';

Feature('Checkboxes').tag('@Checkboxes')

Before(async () =>
    actor().amOnPage('/checkboxes')
)

Scenario('Verify without click', async () => {
    actor().dontSeeCheckboxIsChecked(CheckbockesPage.number(1))
    actor().seeCheckboxIsChecked(CheckbockesPage.number(2))
})

Scenario('Verify after click (Checking)', async () => {
    actor().checkOption(CheckbockesPage.first)
    actor().uncheckOption(CheckbockesPage.last)
    actor().seeCheckboxIsChecked(CheckbockesPage.first)
    actor().dontSeeCheckboxIsChecked(CheckbockesPage.last)
})