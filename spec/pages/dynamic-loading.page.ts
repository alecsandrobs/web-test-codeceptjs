export class DynamicLoadingPage {

    static url = (number:number) => `/dynamic_loading/${number}`
    static loading = locate('#loading').as('loading')
    static finish = locate('#finish').as('finish')

}