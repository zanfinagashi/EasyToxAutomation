import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Add Physicians/addPhysiciansWest.feature"},
plugin = {"html:target/8.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel08Test extends AbstractTestNGCucumberTests {
}
