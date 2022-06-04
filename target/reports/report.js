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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#xuser\"}\n  (Session info: headless chrome\u003d102.0.5005.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MMB033899CPS.local\u0027, ip: \u00272804:1b2:6241:546b:3060:d19:3e32:8c55%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 102.0.5005.61, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: /var/folders/x6/bygd80596p1...}, goog:chromeOptions: {debuggerAddress: localhost:52041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ac631d31669736178ba6e435ca5f1af9\n*** Element info: {Using\u003did, value\u003dxuser}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat pages.LoginPage.preencheEmail(LoginPage.java:26)\n\tat steps.LoginSteps.preencho_login_e_senha(LoginSteps.java:25)\n\tat ✽.preencho login \"eduardo.finotti@qazando.com\" e senha \"123456\"(src/test/resources/features/login.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "clico em Login",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.clico_em_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "sou logado na aplicação",
  "keyword": "Então "
});
formatter.match({
  "location": "LoginSteps.sou_logado_na_aplicação()"
});
formatter.result({
  "status": "skipped"
});
});