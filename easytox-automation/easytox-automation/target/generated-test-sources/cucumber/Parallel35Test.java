import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Instruments/verifyTheSearchResult.feature"},
plugin = {"html:target/35.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel35Test extends AbstractTestNGCucumberTests {
}
