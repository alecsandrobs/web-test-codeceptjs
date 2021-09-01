export class DynamicControlPage {

    static checkbox = locate('#checkbox').as('checkbox')
    static inputEnabled = locate('#input-example input[type="text"]:not(:disabled)').as('checkbox enabled')
    static inputDisabled = locate('#input-example input[type="text"]:disabled').as('checkbox disabled')
    static message = locate('#message').as('message')

}