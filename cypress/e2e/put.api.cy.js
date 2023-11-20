/// <reference types ="cypress"/>


describe('Alteração de dispositivo', () => {


    it('Alteração de um dispositivo com sucesso', () => {

        const body = {
            "name": "Notebook Samsung i7",
            "data": {
                "year": 2022,
                "price": 6049.99,
                "CPU model": "Intel Core i7",
                "Hard disk size": "1 TB"
            }
        }

        //cadastra um device e garante o sucesso
        cy.cadastraDevice(body)
            .then((response_post) => {
                expect(response_post.status).equal(200)
                expect(response_post.body.name).equal('Notebook Samsung i7')

                //Pega o id do device cadastrado
                var id = response_post.body.id


                // fazer a edição de nome do dispositivo cadastrado e verifica se a edição foi feita com sucesso
                cy.editaDevice(id)
                    .then((response_put) => {
                        expect(response_put.status).equal(200)
                        expect(response_put.body.name).equal('Notebook Dell i5')
                    })
            })

    })

})