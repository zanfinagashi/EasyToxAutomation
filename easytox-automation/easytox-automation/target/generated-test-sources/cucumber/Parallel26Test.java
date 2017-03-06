import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Fax Queue/verifyTheContentInSentTab.feature"},
plugin = {"html:target/26.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel26Test extends AbstractTestNGCucumberTests {
}
