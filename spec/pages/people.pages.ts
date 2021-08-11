export class People {
    static fieldNome = '#nome'
    static fieldTelefone = '#telefone'
    static fieldEmail = '#email'
    static list = '#pessoa'
    static personEditIcon = (name: string) => locate('table').find('#pessoa').withText(name).find('button[title="Editar"]')
    static personRemoveIcon = (name: string) => locate('table').find('#pessoa').withText(name).find('button[title="Excluir"]')
}