
import signup from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory'
describe('Signup', () => {

    /*beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })*/

    it('User should Be Deliver', function () {

        var deliver = signupFactory.deliver()
        signup.go()
        signup.fillform(deliver)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect Document', function () {

        var deliver = signupFactory.deliver()
        deliver.cpf = '018224166aa'
        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function (){

        var deliver = signupFactory.deliver()
        deliver.email = 'felipematheus.com.br'
        signup.go()
        signup.fillform(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })


 context('Required field', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o e-mail' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'Selecione o método de entrega' },
            { field: 'delivery_method', output: 'É necessário informar o nome' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`{$msg.field} is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })
        })
    })

})

    /*before(function () {
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de teste')
    })
    beforeEach(function () {
        cy.log('Tudo aqui é executado sempre ANTES de cada caso de teste')
    })
    after(function () {
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de teste')
    })
    afterEach(function () {
        cy.log('Tudo aqui é executado sempre Depois de cada caso de teste')
    })*/