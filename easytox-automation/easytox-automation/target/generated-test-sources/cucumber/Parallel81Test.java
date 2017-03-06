import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Print Reports/verifyTheSearchResults.feature"},
plugin = {"html:target/81.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel81Test extends AbstractTestNGCucumberTests {
}
