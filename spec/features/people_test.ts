export { };
import { ButtonPage } from '../pages/button.page';
import { MessagePage } from '../pages/message.page';
import { PeoplePage } from '../pages/people.pages';
import { InputPage } from '../pages/input.page';
import { URL_BASE_PEOPLE } from '../../support/helpers';
const I = actor()

Feature('People').tag('People').config({ endpoint: URL_BASE_PEOPLE, url:  URL_BASE_PEOPLE}).config('REST', { endpoint: URL_BASE_PEOPLE })

BeforeSuite(async () => {
	await cleanPeople()
    await existPeople(peopleExistent)
})

Before(async () => {
    I.amOnPage('/#!/pessoas')
    I.wait(0.5)
    I.waitForElement(InputPage.search)
})

Scenario('People search', async () => {
    I.fillField(InputPage.search, 'Person Remove')
    I.click(ButtonPage.search)
    I.seeNumberOfElements(PeoplePage.list, 2);
}).tag('@PeopleSearch')

Scenario('Create person', async () => {
    I.click('Pessoa')
    I.fillField(PeoplePage.fieldNome, personCreate.nome)
    I.fillField(PeoplePage.fieldTelefone, personCreate.telefone)
    I.fillField(PeoplePage.fieldEmail, personCreate.email)
    I.click(ButtonPage.salvar)
    I.seeTextEquals('Pessoa inserida com sucesso', MessagePage.info)
    I.waitForDetached(MessagePage.info)
    I.see(personCreate.nome, PeoplePage.list)
    I.see(`${personCreate.nome}	${personCreate.telefone}	${personCreate.email}`, PeoplePage.list) /* FUNCIONA COM Playwright e Puppeteer */
    // I.see(`${personCreate.nome} ${personCreate.telefone} ${personCreate.email}`, People.list) /* FUNCIONA COM Protractor e Webdriver */
}).tag('PeopleCreate')

Scenario('Update person', async () => {
    I.waitForElement(PeoplePage.list)
    I.click(PeoplePage.personEditIcon(personUpdate.nome))
    I.wait(1)
    I.waitForElement(PeoplePage.fieldNome, 30);
    I.clearField(PeoplePage.fieldNome)
    I.fillField(PeoplePage.fieldNome, personUpdated.nome)
    I.clearField(PeoplePage.fieldTelefone)
    I.fillField(PeoplePage.fieldTelefone, personUpdated.telefone)
    I.clearField(PeoplePage.fieldEmail)
    I.fillField(PeoplePage.fieldEmail, personUpdated.email)
    I.click(ButtonPage.salvar)
    I.seeTextEquals('Pessoa atualizada com sucesso', MessagePage.info)
    I.waitForDetached(MessagePage.info)
    I.see(`${personUpdated.nome}	${personUpdated.telefone}	${personUpdated.email}`, PeoplePage.list) /* FUNCIONA COM Playwright e Puppeteer */
    // I.see(`${personUpdated.nome} ${personUpdated.telefone} ${personUpdated.email}`, People.list)
}).tag('PeopleEdit').tag('AAA')

Scenario('Remove person cancel', async () => {
    I.click(PeoplePage.personRemoveIcon(personRemoveCancel.nome))
    I.see('Deseja realmente excluir o registro?', MessagePage.info)
    I.click("Não tenho certeza")
    I.dontSeeElement(MessagePage.info)
    // I.waitUntilExists(Message.info) ### Foi depreciado esse método, usar o I.waitForDetached(locate)
    I.see(`${personRemoveCancel.nome}	${personRemoveCancel.telefone}	${personRemoveCancel.email}`, PeoplePage.list) /* FUNCIONA COM Playwright e Puppeteer */
    // I.see(`${personRemoveCancel.nome} ${personRemoveCancel.telefone} ${personRemoveCancel.email}`, People.list) /* FUNCIONA COM Protractor e Webdriver */
}).tag('PeopleRemove').tag('Cancel')

Scenario('Remove person confirm', async () => {
    I.click(PeoplePage.personRemoveIcon(personRemove.nome))
    I.see('Deseja realmente excluir o registro?', MessagePage.info)
    I.click("Sim!")
    I.seeTextEquals('Pessoa excluída com sucesso', MessagePage.info)
    I.waitForDetached(MessagePage.info)
    I.dontSee(`${personRemove.nome}	${personRemove.telefone}	${personRemove.email}`) /* FUNCIONA COM Protractor e Webdriver */
    // I.dontSee(`${personRemove.nome} ${personRemove.telefone} ${personRemove.email}`) /* FUNCIONA COM Protractor e Webdriver */
    I.seeElement(PeoplePage.list);
    I.seeElementInDOM(PeoplePage.list);
}).tag('PeopleRemove').tag('Confirm')

Scenario('Remove all people confirm', async () => {
    const element = locate(ButtonPage.remove)
    I.waitForElement(element, 30);
    let ammount = await I.grabNumberOfVisibleElements(element)
    await removePeople(ammount)
    I.dontSeeElement(PeoplePage.list);
    I.dontSeeElementInDOM(PeoplePage.list);
}).tag('PeopleRemove').tag('Confirm').tag('All')

const removePeople = async (ammount:number) => {
    for (var i=0; i<ammount; i++) {
        I.click(ButtonPage.remove)
        I.see('Deseja realmente excluir o registro?', MessagePage.info)
        I.click("Sim!")
        I.seeTextEquals('Pessoa excluída com sucesso', MessagePage.info)
        I.waitForDetached(MessagePage.info)
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
    I.sendPostRequest('/pessoas', person)
}

const existPeople = async (people: any) => {
    for (const person of people) {
        await existPerson(person)
    }
}

const cleanPeople = async () => {
    const people:any = I.sendGetRequest('/pessoas')
    if (people.data) {
        for (const person of people.data) {
            I.sendDeleteRequest(`/pessoas/${person._id}`)
        }
    }
}