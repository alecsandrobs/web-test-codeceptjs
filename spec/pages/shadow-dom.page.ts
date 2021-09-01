export class ShadowDomPage {

    static text = "Let's have some different text!"
    static firstField = locate('span[slot="my-text"]')
    static secondField = locate('ul[slot="my-text"]')
    static secondFieldLine = (number:number) => ShadowDomPage.secondField.find('li').at(number).as(`text in second field at line ${number}`)

}