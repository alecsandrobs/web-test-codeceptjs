export class LinkPage {

    static linkName = (name:string) => locate('a').withText(name)
    static clickHereLink = LinkPage.linkName('Click here').as('Click here link')
    static clickHereLinkLowerCase = LinkPage.linkName('click here').as('click here link')
    static logoutLink = LinkPage.linkName('Logout').as('Logout link')
    static viewProfile = LinkPage.linkName('View profile').as('View profile link')

}