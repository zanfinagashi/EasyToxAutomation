import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab User List/validatingAccountExpiration.feature"},
plugin = {"html:target/46.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel46Test extends AbstractTestNGCucumberTests {
}
