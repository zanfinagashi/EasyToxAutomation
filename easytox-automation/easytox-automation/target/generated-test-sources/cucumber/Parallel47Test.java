import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab User List/validatingEnabledDisabledAccessForALabUser.feature"},
plugin = {"html:target/47.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel47Test extends AbstractTestNGCucumberTests {
}
