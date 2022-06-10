var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {
//deliver é um método
    deliver: function() {
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name:  `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '31991903413',
            address: {
                postalcode: '30642585',
                street: 'Rua Afonso Teixeira Dias',
                number:  '1611',
                details: 'casa',
                district: 'Miramar (Barreiro)',
                city_state: 'Belo Horizonte/MG'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}