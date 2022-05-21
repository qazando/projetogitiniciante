$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "    Eu como usuário do sistema\n    Quero fazer login\n    Para fazer uma compra no site",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "Acessar aplicação",
  "description": "",
  "keyword": "Contexto"
});
formatter.step({
  "name": "que estou na tela de login",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_estou_na_tela_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login com sucesso",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-sucesso"
    }
  ]
});
formatter.step({
  "name": "preencho login \"eduardo.finotti@qazando.com\" e senha \"123456\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginSteps.preencho_login_e_senha(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou logado na aplicação",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.sou_logado_na_aplicação()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Os textos não são iguais! expected:\u003c[Login realizado]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat pages.LoginPage.verificaLoginSucesso(LoginPage.java:39)\n\tat steps.LoginSteps.sou_logado_na_aplicação(LoginSteps.java:36)\n\tat ✽.sou logado na aplicação(src/test/resources/features/login.feature:16)\n",
  "status": "failed"
});
});