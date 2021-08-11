export { };
import { Button } from '../pages/button.page';
import { Message } from '../pages/message.page';
import { People } from '../pages/people.pages';
import { Input } from '../pages/input.page';
const { I } = inject()

Feature('People').tag('People')

BeforeSuite(async () => {
	await cleanPeople()
    await existPeople(peopleExistent)
})

Before(async () => {
    await I.amOnPage('/#!/pessoas')
    await I.wait(0.5)
    await I.waitForElement(Input.search)
})

Scenario('People search', async () => {
    await I.fillField(Input.search, 'Person Remove')
    await I.click(Button.search)
    await I.seeNumberOfElements(People.list, 2);
}).tag('@PeopleSearch')

Scenario('Create person', async () => {
    await I.click('Pessoa')
    await I.fillField(People.fieldNome, personCreate.nome)
    await I.fillField(People.fieldTelefone, personCreate.telefone)
    await I.fillField(People.fieldEmail, personCreate.email)
    await I.click(Button.salvar)
    await I.seeTextEquals('Pessoa inserida com sucesso', Message.info)
    await I.waitForDetached(Message.info)
    await I.see(personCreate.nome, People.list)
    await I.see(`${personCreate.nome}	${personCreate.telefone}	${personCreate.email}`, People.list) /* FUNCIONA COM Playwright e Puppeteer */
    // await I.see(`${personCreate.nome} ${personCreate.telefone} ${personCreate.email}`, People.list) /* FUNCIONA COM Protractor e Webdriver */
}).tag('PeopleCreate')

Scenario('Update person', async () => {
    await I.waitForElement(People.list)
    await I.click(People.personEditIcon(personUpdate.nome))
    await I.wait(1)
    await I.waitForElement(People.fieldNome, 30);
    await I.clearField(People.fieldNome)
    await I.fillField(People.fieldNome, personUpdated.nome)
    await I.clearField(People.fieldTelefone)
    await I.fillField(People.fieldTelefone, personUpdated.telefone)
    await I.clearField(People.fieldEmail)
    await I.fillField(People.fieldEmail, personUpdated.email)
    await I.click(Button.salvar)
    await I.seeTextEquals('Pessoa atualizada com sucesso', Message.info)
    await I.waitForDetached(Message.info)
    await I.see(`${personUpdated.nome}	${personUpdated.telefone}	${personUpdated.email}`, People.list) /* FUNCIONA COM Playwright e Puppeteer */
    // await I.see(`${personUpdated.nome} ${personUpdated.telefone} ${personUpdated.email}`, People.list)
}).tag('PeopleEdit').tag('AAA')

Scenario('Remove person cancel', async () => {
    await I.click(People.personRemoveIcon(personRemoveCancel.nome))
    await I.see('Deseja realmente excluir o registro?', Message.info)
    await I.click("Não tenho certeza")
    await I.dontSeeElement(Message.info)
    // await I.waitUntilExists(Message.info) ### Foi depreciado esse método, usar o I.waitForDetached(locate)
    await I.see(`${personRemoveCancel.nome}	${personRemoveCancel.telefone}	${personRemoveCancel.email}`, People.list) /* FUNCIONA COM Playwright e Puppeteer */
    // await I.see(`${personRemoveCancel.nome} ${personRemoveCancel.telefone} ${personRemoveCancel.email}`, People.list) /* FUNCIONA COM Protractor e Webdriver */
}).tag('PeopleRemove').tag('Cancel')

Scenario('Remove person confirm', async () => {
    await I.click(People.personRemoveIcon(personRemove.nome))
    await I.see('Deseja realmente excluir o registro?', Message.info)
    await I.click("Sim!")
    await I.seeTextEquals('Pessoa excluída com sucesso', Message.info)
    await I.waitForDetached(Message.info)
    await I.dontSee(`${personRemove.nome}	${personRemove.telefone}	${personRemove.email}`) /* FUNCIONA COM Protractor e Webdriver */
    // await I.dontSee(`${personRemove.nome} ${personRemove.telefone} ${personRemove.email}`) /* FUNCIONA COM Protractor e Webdriver */
    await I.seeElement(People.list);
    await I.seeElementInDOM(People.list);
}).tag('PeopleRemove').tag('Confirm')

Scenario('Remove all people confirm', async () => {
    const element = locate(Button.remove)
    await I.waitForElement(element, 30);
    let ammount = await I.grabNumberOfVisibleElements(element)
    await removePeople(ammount)
    await I.dontSeeElement(People.list);
    await I.dontSeeElementInDOM(People.list);
}).tag('PeopleRemove').tag('Confirm').tag('All')

const removePeople = async (ammount:number) => {
    for (var i=0; i<ammount; i++) {
        await I.click(Button.remove)
        await I.see('Deseja realmente excluir o registro?', Message.info)
        await I.click("Sim!")
        await I.seeTextEquals('Pessoa excluída com sucesso', Message.info)
        await I.waitForDetached(Message.info)
    }
}

const personCreate = {
    nome: 'Person Created CodeceptJS Web',
    telefone: '+55 (48) 98765-4321',
    email: 'person.created.codeceptjs@email.com'
}
const personUpdate = {
    nome: 'Person to Update CodeceptJS Web',
    telefone: '+55 (48) 11111-2222',
    email: 'person.update.codeceptjs@email.com'
}

const personUpdated = {
    nome: 'Person Updated CodeceptJS Web',
    telefone: '+55 (48) 12345-6789',
    email: 'person.updated.codeceptjs@email.com'
}

const personRemove = {
    nome: 'Person Remove CodeceptJS Web',
    telefone: '+00 (00) 00000-0000',
    email: 'person.remove.codeceptjs@email.com'
}

const personRemoveCancel = {
    nome: 'Person Remove Cancel CodeceptJS Web',
    telefone: '+77 (77) 77777-7777',
    email: 'person.remove.cancel.codeceptjs@email.com'
}

const peopleExistent = [ personUpdate, personRemove, personRemoveCancel ]

const existPerson = async (person: any) => {
    await I.sendPostRequest('/pessoas', person)
}

const existPeople = async (people: any) => {
    for (const person of people) {
        await existPerson(person)
    }
}

const cleanPeople = async () => {
    const people = await I.sendGetRequest('/pessoas')
    if (people.data) {
        for (const person of people.data) {
            await I.sendDeleteRequest(`/pessoas/${person._id}`)
        }
    }
}