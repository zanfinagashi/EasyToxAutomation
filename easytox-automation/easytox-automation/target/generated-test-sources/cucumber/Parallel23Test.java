import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Fax Queue/verifyTheContentInFailureTab.feature"},
plugin = {"html:target/23.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel23Test extends AbstractTestNGCucumberTests {
}
