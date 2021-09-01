export class MessagePage {
    static infoTopEnd = locate('div[class="swal2-container swal2-top-end swal2-fade swal2-shown"]').as('top text')
    static infoCenter = locate('div[class="swal2-container swal2-center swal2-fade swal2-shown"]').as('center text')
    static info = locate('.swal2-container').as('info message')
}