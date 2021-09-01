import { LinkPage } from "./link.page"

export class HoverPage {

    static user = (number: number) => locate('.figure').at(number).as(`user in position ${number}`)
    static linkViewProfile = (number:number) => LinkPage.viewProfile.at(number).as(`View profile Link in position ${number}`)

}