/// <reference types ="cypress"/>


describe('Buscar dispositivos', () => {


    it('Buscando um dispositivo especifico válido', () => {

        const device_id = '7'

        //Busca por um device especifico e valida o retorno
        cy.buscarDeviceEspecifico(device_id)
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.id).equal(device_id)
                expect(response.body.name).equal('Apple MacBook Pro 16')
                expect(response.body.data.year).equal(2019)
                expect(response.body.data.price).equal(1849.99)
                expect(response.body.data['CPU model']).equal('Intel Core i9')
                expect(response.body.data['Hard disk size']).equal('1 TB')

            })

    })

    it('Buscando um dispositivo com ID inválido', () => {

        const device_id = 100;

        //Busca por um device que não existe e garante o retorno de acordo
        cy.buscarDeviceEspecifico(device_id)
            .then((response) => {
                expect(response.status).equal(404)
                expect(response.body.error).equal(`Oject with id=100 was not found.`)
            })
    })
})