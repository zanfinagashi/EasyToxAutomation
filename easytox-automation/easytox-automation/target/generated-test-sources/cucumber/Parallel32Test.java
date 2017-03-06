import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Instruments/verifyForInstrumentsLabInformation.feature"},
plugin = {"html:target/32.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel32Test extends AbstractTestNGCucumberTests {
}
