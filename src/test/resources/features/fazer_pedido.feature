# language: pt

  @pedido
  Funcionalidade: Pedido
    Eu como usuário do sistema
    Quero fazer um pedido
    Para comprar um produto

    Contexto: fazer login
      Dado que estou logado na aplicação com user "teste@teste.com" e senha "123456"

    @pedido_sucesso
    Cenário: Fazer pedido com sucesso
