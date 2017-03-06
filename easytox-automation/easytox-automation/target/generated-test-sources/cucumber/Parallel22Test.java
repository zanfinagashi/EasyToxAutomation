import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Fax Queue/verifyNoOfRecordsDisplayed.feature"},
plugin = {"html:target/22.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel22Test extends AbstractTestNGCucumberTests {
}
