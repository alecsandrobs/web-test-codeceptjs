
Feature('Add/Remove Elements').tag('@AddRemoveElements')

Before(async () =>
    actor().amOnPage('/add_remove_elements/')
)

Scenario('Ading buttons', async () => {
    const amount = 5
    await clickTimes(buttonAdd, amount)
    actor().seeNumberOfElements(buttonDelete, amount);
})

Scenario('Removing buttons', async () => {
    const amountAdd = 10
    const amountDelete = 3
    await clickTimes(buttonAdd, amountAdd)
    await clickTimes(buttonDelete, amountDelete)
    actor().seeNumberOfElements(buttonDelete, (amountAdd - amountDelete));
})

const buttonAdd = {css: 'button', text: 'Add Element'}
const buttonDelete = locate('button').withText('Delete');
const amountElements = (element: any) => actor().grabNumberOfVisibleElements(element)

const clickTimes = async (element: any, amount:number) => {
    for(let i=0; i<amount; i++){
        actor().click(element)
    }
}