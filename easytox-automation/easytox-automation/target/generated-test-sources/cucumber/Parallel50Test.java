import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab User List/verifyDataSorting.feature"},
plugin = {"html:target/50.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel50Test extends AbstractTestNGCucumberTests {
}
