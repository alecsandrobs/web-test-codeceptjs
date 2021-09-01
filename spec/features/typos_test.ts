import { TyposPage } from '../pages/typos.page';

Feature('Typos').tag('@Typos')

Before(async () =>
    actor().amOnPage('/typos')
)

Scenario('Verifying text fields', async () => {
    for(let i=0; i<10; i++){
        let message = await actor().grabTextFrom(TyposPage.message)
        if(!message.includes('won,t')) break
        actor().refreshPage()
    }
    actor().see("Sometimes you'll see a typo, other times you won't.", TyposPage.message)
})