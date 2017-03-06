import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab User/verifyDisablingAccessLabUser.feature"},
plugin = {"html:target/58.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel58Test extends AbstractTestNGCucumberTests {
}
