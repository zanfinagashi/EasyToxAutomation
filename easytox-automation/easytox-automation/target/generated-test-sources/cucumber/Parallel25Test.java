import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Fax Queue/verifyTheContentInPendingTab.feature"},
plugin = {"html:target/25.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel25Test extends AbstractTestNGCucumberTests {
}
