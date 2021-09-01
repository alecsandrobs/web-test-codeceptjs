export class EntryAdPage {

    static modal = locate('#modal').as('modal')
    static modalHeader = EntryAdPage.modal.find('.modal-title').as('modal title')
    static modalBody = EntryAdPage.modal.find('.modal-body').as('modal body')
    static modalFooter = EntryAdPage.modal.find('.modal-footer').as('modal footer')
    static modalFooterClose = EntryAdPage.modalFooter.find('p').as('modal footer close')

}