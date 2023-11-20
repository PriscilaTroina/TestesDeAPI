/// <reference types ="cypress"/>


describe('Exclusão de dispositivo', () => {


    it('Removendo um dispositivo com sucesso', () => {

        const body = {
            "name": "Notebook Asus i3",
            "data": {
                "year": 2022,
                "price": 2049.99,
                "CPU model": "Intel Core i3",
                "Hard disk size": "1 TB"
            }
        }
        //cadastro de um dispositivo
        cy.cadastraDevice(body)
            .then((response_post) => {
                expect(response_post.status).equal(200)

                var id = response_post.body.id

                // fazer o delete do dispositivo cadastrado
                cy.removeDevice(id)
                    .then((response_del) => {
                        expect(response_del.status).equal(200)
                        expect(response_del.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
                    })
            })


    })


    it('Excluir um dispositivo que não existe', () => {

        const id_inexistente = 100

        cy.removeDevice(100)
            .then((response_del) => {
                expect(response_del.status).equal(404)
                expect(response_del.body.error).equal(`Object with id = ${id_inexistente} doesn't exist.`)

            })
    })


})