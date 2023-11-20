/// <reference types ="cypress"/>


describe('Cadastro de dispositivo', () => {


    it('Cadastrando um dispositivo', () => {

        const body = {
            "name": "Notebook Lenovo i7",
            "data": {
                "year": 2022,
                "price": 4049.99,
                "CPU model": "Intel Core i7",
                "Hard disk size": "1 TB"
            }
        }

        //Cadastra um device e garante que retornou o body corretamente
        cy.cadastraDevice(body)
            .then(response => {
                expect(response.status).equal(200)
                expect(response.body.id).not.empty //valida que não é vazio e é string
                expect(response.body.createdAt).not.empty //valida que não é vazio e é string
                expect(response.body.name).equal('Notebook Lenovo i7')
                expect(response.body.data.year).equal(2022)
                expect(response.body.data['CPU model']).equal('Intel Core i7')
                expect(response.body.data['Hard disk size']).equal('1 TB')
            })
    })

    it('Cadastrando um dispositivo sem enviar body', () => {

        //Tenta cadastrar device sem enviar o corpo da requisição e garante o erro no retorno
        cy.cadastraDevice()
            .then((response) => {
                expect(response.status).equal(400)
                expect(response.body.error).equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
            })
    })


})