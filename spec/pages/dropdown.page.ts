export class DropdownPage {

    static select = locate('#dropdown').as('dropdown fild')
    static selected = DropdownPage.select.find('option').withAttr({selected: 'selected'}).as('dropdown selected option')

}