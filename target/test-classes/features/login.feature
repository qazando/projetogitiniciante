# language: pt

  @login
  Funcionalidade: Login
    Eu como usuário do sistema
    Quero fazer login
    Para fazer uma compra no site

    Contexto: Acessar aplicação
      Dado que estou na tela de login

    @login-sucesso
    Cenário: Login com sucesso
      Quando preencho login "eduardo.finotti@qazando.com" e senha "123456"
      E clico em Login
      Então sou logado na aplicação

#    @login-campos-vazios
#    Esquema do Cenário: Validar mensagem: <mensagem> no login inválido
#      Quando preencho login "<user>" e senha "<password>"
#      E clico em Login
#      Então vejo mensagem "<mensagem>" de campo não preenchido
#
#      Exemplos:
#      | user            | password | mensagem         |
#      |                 |   123456 | E-mail inválido. |
#      | email@email.com |          | Senha inválida.  |
#      |                 |          | E-mail inválido. |
