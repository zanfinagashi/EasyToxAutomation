import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Fax Queue/verifyDataSorting.feature"},
plugin = {"html:target/21.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel21Test extends AbstractTestNGCucumberTests {
}
