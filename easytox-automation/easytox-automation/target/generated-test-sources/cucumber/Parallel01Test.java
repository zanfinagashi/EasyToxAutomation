import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Accession Prefix/checkingMessageOfNoOfResultsDisplayed.feature"},
plugin = {"html:target/1.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel01Test extends AbstractTestNGCucumberTests {
}
