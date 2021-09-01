export class ButtonPage {
    static buttonTitle = (title: string) => locate(`button[title="${title}"]`).as(`button with title ${title}`)
    static search = ButtonPage.buttonTitle('Pesquisar').as('Pesquisar button')
    static edit = ButtonPage.buttonTitle('Editar').as('Editar button')
    static remove = ButtonPage.buttonTitle('Excluir').as('Excluir button')

    static buttonName = (name:string) => locate('button').withText(name)
    static salvar = ButtonPage.buttonName('Salvar').as('Salvar Button')
    static loginButton = ButtonPage.buttonName('Login').as('Login button')
    static startButton = ButtonPage.buttonName('Start').as('Start button')
    static addElement = ButtonPage.buttonName('Add Element').as('Add Element button')
    static delete = ButtonPage.buttonName('Delete').as('Delete button')
}