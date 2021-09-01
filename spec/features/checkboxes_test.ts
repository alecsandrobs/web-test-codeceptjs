
Feature('Checkboxes').tag('@Checkboxes')

Before(async () =>
    actor().amOnPage('/checkboxes')
)

Scenario('Verify without click', async () => {
    actor().dontSeeCheckboxIsChecked(await checkboxNumber(1))
    actor().seeCheckboxIsChecked(await checkboxNumber(2))
})

Scenario('Verify after click (Checking)', async () => {
    actor().checkOption(await checkbox1())
    actor().uncheckOption(await checkbox2())
    actor().seeCheckboxIsChecked(await checkbox1())
    actor().dontSeeCheckboxIsChecked(await checkbox2())
})

const checkbox1 = async () => locate('#checkboxes').find({css: 'input[type="checkbox"]'}).first()
const checkbox2 = async () => locate('#checkboxes').find({css: 'input[type="checkbox"]'}).last()
const checkboxNumber = async (number:number) => locate('#checkboxes').find({css: 'input[type="checkbox"]'}).at(number)