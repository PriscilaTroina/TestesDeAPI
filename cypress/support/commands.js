

Cypress.Commands.add('buscarDeviceEspecifico', (device_id) => {
    cy.request({
        method: 'GET',
        url: `/objects/${device_id}`,
        failOnStatusCode: false
    }).then((response) => { return response })
})


Cypress.Commands.add('cadastraDevice', (body) => {
    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: body
    }).then((response_post) => { return response_post})
})


Cypress.Commands.add('removeDevice', (id) => {
    cy.request({
        method: 'DELETE',
        url: `/objects/${id}`,
        failOnStatusCode: false
    }).then((response_del)=> {return response_del})
})

 
Cypress.Commands.add('editaDevice', (id) => {
    cy.request({
        method: 'PUT',
        url: `/objects/${id}`,
        failOnStatusCode: false,
        body: {
            "name": "Notebook Dell i5",
            "data": {
                "year": 2023,
                "price": 3049.99,
                "CPU model": "Intel Core i5",
                "Hard disk size": "512 GB"
            }
        }
    }).then((response_put) => { return response_put})
})