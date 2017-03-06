import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab User/verifyNoOfRecordsDisplayedPerPage.feature"},
plugin = {"html:target/61.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel61Test extends AbstractTestNGCucumberTests {
}
