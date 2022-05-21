# language: pt

  @cadastro_de_usuario
  Funcionalidade: Cadastro de usuário
    Eu como usuário do sistema
    Quero me cadastrar
    Para finalizar uma compra no site

    @validar-nome-vazio
    Cenário: Nome do usuário vazio
      Dado que estou na tela de login
      Quando acesso a tela de cadastro de usuário
      E clico em cadastro
      Então vejo mensagem de campo nome não preenchido
