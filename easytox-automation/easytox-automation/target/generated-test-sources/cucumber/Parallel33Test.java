import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Instruments/verifyNoOfRecordsDisplayed.feature"},
plugin = {"html:target/33.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel33Test extends AbstractTestNGCucumberTests {
}
