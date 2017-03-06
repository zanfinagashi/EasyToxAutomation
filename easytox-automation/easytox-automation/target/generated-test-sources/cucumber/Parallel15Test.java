import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Case List/verifyNoOfRecordsDisplayed.feature"},
plugin = {"html:target/15.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel15Test extends AbstractTestNGCucumberTests {
}
