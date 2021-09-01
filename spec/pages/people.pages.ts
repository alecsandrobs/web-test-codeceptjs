export class PeoplePage {
    static fieldNome = locate('#nome').as('name field')
    static fieldTelefone = locate('#telefone').as('telefone field')
    static fieldEmail = locate('#email').as('email field')
    static list = locate('#pessoa').as('people list')
    static personEditIcon = (name: string) => locate('table').find('#pessoa').withText(name).find('button[title="Editar"]').as('edit icon')
    static personRemoveIcon = (name: string) => locate('table').find('#pessoa').withText(name).find('button[title="Excluir"]').as('remove icon')
}