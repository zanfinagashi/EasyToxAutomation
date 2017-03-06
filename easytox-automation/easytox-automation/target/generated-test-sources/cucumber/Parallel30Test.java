import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Instruments/navigateToTheSelectedPage.feature"},
plugin = {"html:target/30.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel30Test extends AbstractTestNGCucumberTests {
}
