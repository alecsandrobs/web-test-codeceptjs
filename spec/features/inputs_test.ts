
Feature('Inputs').tag('@Inputs')

Before(async () =>
    actor().amOnPage('/inputs')
)

const tableInputNumbers = new DataTable(['valueSent', 'valueShown'])
tableInputNumbers.add(['abcdefg', ''])
tableInputNumbers.add(['1234567', '1234567'])
tableInputNumbers.add(['xyx123', '123'])
tableInputNumbers.add(['x1y2x3', '123'])
tableInputNumbers.add(['1x2y3x', '123'])

Data(tableInputNumbers).Scenario('Filling only number fields', async ({current}) => {
    actor().fillField(field, current.valueSent)
    actor().seeInField(field, current.valueShown)
})

const field = locate('.example input[type="number"]')