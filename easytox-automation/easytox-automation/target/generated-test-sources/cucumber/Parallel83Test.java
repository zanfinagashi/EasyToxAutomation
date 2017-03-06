import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Print Reports/verifyTheCheckBox.feature"},
plugin = {"html:target/83.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel83Test extends AbstractTestNGCucumberTests {
}
