export class MessagesPage {

    static message = locate('#flash-messages')
    static messageNotice = MessagesPage.message.find('.flash.notice').as('notice message')
    static messageSuccess = MessagesPage.message.find('.flash.success').as('success message')
    static messageError = MessagesPage.message.find('.flash.error').as('error message')

}