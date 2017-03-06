import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Accession Prefix/selectPrefixType.feature"},
plugin = {"html:target/5.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel05Test extends AbstractTestNGCucumberTests {
}
