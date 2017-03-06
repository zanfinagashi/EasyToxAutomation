import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab User/verifyLockingAccessForLabUser.feature"},
plugin = {"html:target/60.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel60Test extends AbstractTestNGCucumberTests {
}
