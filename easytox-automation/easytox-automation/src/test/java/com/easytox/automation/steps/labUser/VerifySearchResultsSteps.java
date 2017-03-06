package com.easytox.automation.steps.labUser;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifySearchResultsSteps {
	private WebDriver driver;
	
	public VerifySearchResultsSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}
	
	@When("^Enter any search criteria and click on search icon LU$")
	public void enter_any_search_criteria_and_click_on_search_icon() throws Throwable {
		Thread.sleep(2000);
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.cssSelector("#example_filter > label")));
		actions.click();
		actions.sendKeys("Zanfina");
		actions.build().perform();
		Thread.sleep(2000);
	}

	@Then("^Matching records with entered data should be displayed in the User list LU$")
	public void matching_records_with_entered_data_should_be_displayed_in_the_User_list() throws Throwable {
		WebElement table = driver.findElement(By.id("example"));
		List<WebElement> rows = table.findElements(By.xpath("//table[@id='example']/tbody/tr"));
		for(int i=1;i<=rows.size();i++) {
			String cell = driver.findElement(By.xpath("//table[@id='example']/tbody/tr["+i+"]/td[3]")).getText();
			Assert.assertTrue(cell.contains("Zanfina"));
		}
	}
}
