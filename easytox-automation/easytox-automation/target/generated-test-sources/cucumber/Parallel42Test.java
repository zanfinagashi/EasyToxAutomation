import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab Client List/verifyNoOfRecordsDisplayed.feature"},
plugin = {"html:target/42.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel42Test extends AbstractTestNGCucumberTests {
}
