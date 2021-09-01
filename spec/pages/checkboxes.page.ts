export class CheckbockesPage {

    static checkboxes = locate('#checkboxes').find({css: 'input[type="checkbox"]'}).as('checkboxes')
    static first = CheckbockesPage.checkboxes.first().as('first checkbox')
    static last = CheckbockesPage.checkboxes.last().as('last checkbox')
    static number = (number:number) => CheckbockesPage.checkboxes.at(number).as(`checkbox in position ${number}`)

}