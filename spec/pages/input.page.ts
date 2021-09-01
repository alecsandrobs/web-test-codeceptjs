export class InputPage {
    
    static search = locate('input[placeholder="Pesquisa"]').as('Pesquisa field')

    static exampleField = locate('.example input[type="number"]').as('example field')
}