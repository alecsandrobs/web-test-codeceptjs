
Feature('Dropdown').tag('@Dropdown')

Before(async () =>
    actor().amOnPage('/dropdown')
)

Scenario('Select option', async () => {
    actor().selectOption(select(), option1Text)
    actor().seeTextEquals(option1Text, selected())
})

Scenario('Change option', async () => {
    actor().selectOption(select(), option2Text)
    actor().selectOption(select(), option1Text)
    actor().seeTextEquals(option1Text, selected())
})

const option1Text = 'Option 1'
const option2Text = 'Option 2'
const select = () => locate('#dropdown')
const selected = () => select().find('option').withAttr({selected: 'selected'})