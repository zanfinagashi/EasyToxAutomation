import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Order List/navigatingToSelectedScreen.feature"},
plugin = {"html:target/67.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel67Test extends AbstractTestNGCucumberTests {
}
