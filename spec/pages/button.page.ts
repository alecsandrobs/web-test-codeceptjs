export class Button {
    static salvar = 'Salvar'
    static buttonTitle = (title: string) => `button[title="${title}"]`
    static search = Button.buttonTitle('Pesquisar')
    static edit = Button.buttonTitle('Editar')
    static remove = Button.buttonTitle('Excluir')
}