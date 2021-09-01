import { ButtonPage } from "../pages/button.page"

Feature('Add/Remove Elements').tag('@AddRemoveElements')

Before(async () =>
    actor().amOnPage('/add_remove_elements/')
)

Scenario('Ading buttons', async () => {
    const amount = 5
    await clickTimes(ButtonPage.addElement, amount)
    actor().seeNumberOfElements(ButtonPage.delete, amount);
})

Scenario('Removing buttons', async () => {
    const amountAdd = 10
    const amountDelete = 3
    await clickTimes(ButtonPage.addElement, amountAdd)
    await clickTimes(ButtonPage.delete, amountDelete)
    actor().seeNumberOfElements(ButtonPage.delete, (amountAdd - amountDelete));
})

const clickTimes = async (element: any, amount:number) => {
    for(let i=0; i<amount; i++){
        actor().click(element)
    }
}