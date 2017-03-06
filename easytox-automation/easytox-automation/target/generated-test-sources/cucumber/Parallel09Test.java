import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Add Physicians/addPhysiciansZest.feature"},
plugin = {"html:target/9.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel09Test extends AbstractTestNGCucumberTests {
}
