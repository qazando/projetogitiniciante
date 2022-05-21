package steps;

import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import org.openqa.selenium.By;
import runner.RunCucumber;

public class CadastroSteps extends RunCucumber {

    @Quando("^clico em cadastro$")
    public void clico_em_cadastro() {
        getDriver().findElement(By.id("createAccount")).click();
    }

    @Então("^vejo mensagem de campo nome não preenchido$")
    public void vejo_mensagem_de_campo_nome_não_preenchido() {

    }

}
