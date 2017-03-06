import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true,
features = {"classpath:features/Lab Admin/Verify Lab Admin/verifyAddUserToLab.feature"},
plugin = {"html:target/38.html", "pretty"},
monochrome = true,
tags = {"@uat"},
glue = { "com.easytox.automation.steps" })
public class Parallel38Test extends AbstractTestNGCucumberTests {
}
