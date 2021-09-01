
Feature('Shadown DOM').tag('@ShadownDOM')

Before(async () =>
    actor().amOnPage('/shadowdom')
)

Scenario('Verifying text fields', async () => {
    actor().seeTextEquals(differentText, firstField)
    actor().seeTextEquals(differentText, secondFieldLine(1))
    actor().seeTextEquals("In a list!", secondFieldLine(2))
})

const differentText = "Let's have some different text!"
const firstField = locate('span[slot="my-text"]')
const secondField = locate('ul[slot="my-text"]')
const secondFieldLine = (number:number) => secondField.find('li').at(number)