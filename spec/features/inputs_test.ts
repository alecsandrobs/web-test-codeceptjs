import { InputPage } from '../pages/input.page';

Feature('Inputs').tag('@Inputs')

Before(async () =>
    actor().amOnPage('/inputs')
)

const tableInputNumbers = [
    {valueSent: 'abcdefg', valueShown: ''},
    {valueSent: '1234567', valueShown: '1234567'},
    {valueSent: 'xyx123', valueShown: '123'},
    {valueSent: 'x1y2x3', valueShown: '123'},
    {valueSent: '1x2y3x', valueShown: '123'}
]

Data(tableInputNumbers).Scenario('Filling only number fields', async ({current}) => {
    actor().fillField(InputPage.exampleField, current.valueSent)
    actor().seeInField(InputPage.exampleField, current.valueShown)
})