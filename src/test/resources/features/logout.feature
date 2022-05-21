# language: pt

  @logout
  Funcionalidade: Logout
    Eu como usuário do sistema
    Quero fazer login
    Para fazer uma compra no site

    Contexto: Acessar aplicação
      Dado que estou logado na aplicação com user "teste@teste.com" e senha "123456"

    @logout_sucesso
    Cenário: Logout com sucesso

