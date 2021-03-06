import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab Client List/verifyThePagination.feature"},
plugin = {"html:target/44.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel44Test extends AbstractTestNGCucumberTests {
}
