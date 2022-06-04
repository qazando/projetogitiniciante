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
formatter.scenarioOutline({
  "name": "Validar mensagem: \u003cmensagem\u003e no login inválido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "preencho login \"\u003cuser\u003e\" e senha \"\u003cpassword\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.step({
  "name": "vejo mensagem \"\u003cmensagem\u003e\" de campo não preenchido",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "user",
        "password",
        "mensagem"
      ]
    },
    {
      "cells": [
        "",
        "123456",
        "E-mail inválido."
      ]
    },
    {
      "cells": [
        "email@email.com",
        "",
        "Senha inválida."
      ]
    },
    {
      "cells": [
        "",
        "",
        "E-mail inválido."
      ]
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
  "name": "Validar mensagem: E-mail inválido. no login inválido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "preencho login \"\" e senha \"123456\"",
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
  "name": "vejo mensagem \"E-mail inválido.\" de campo não preenchido",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.vejo_mensagem_de_campo_não_preenchido(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "Validar mensagem: Senha inválida. no login inválido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "preencho login \"email@email.com\" e senha \"\"",
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
  "name": "vejo mensagem \"Senha inválida.\" de campo não preenchido",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.vejo_mensagem_de_campo_não_preenchido(String)"
});
formatter.result({
  "status": "passed"
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
  "name": "Validar mensagem: E-mail inválido. no login inválido",
  "description": "",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@login-campos-vazios"
    }
  ]
});
formatter.step({
  "name": "preencho login \"\" e senha \"\"",
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
  "name": "vejo mensagem \"E-mail inválido.\" de campo não preenchido",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.vejo_mensagem_de_campo_não_preenchido(String)"
});
formatter.result({
  "status": "passed"
});
});