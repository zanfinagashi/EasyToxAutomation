import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Accession Prefix/navigatingToNextPrevPage.feature"},
plugin = {"html:target/2.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel02Test extends AbstractTestNGCucumberTests {
}
