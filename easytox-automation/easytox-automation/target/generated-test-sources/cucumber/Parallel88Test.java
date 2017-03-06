import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Validity Test Group/checkingTheSortingOrderOfDisplayedResults.feature"},
plugin = {"html:target/88.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel88Test extends AbstractTestNGCucumberTests {
}
