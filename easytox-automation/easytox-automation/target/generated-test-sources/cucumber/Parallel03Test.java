import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Accession Prefix/noOfRecordsToBeDisplayed.feature"},
plugin = {"html:target/3.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel03Test extends AbstractTestNGCucumberTests {
}
