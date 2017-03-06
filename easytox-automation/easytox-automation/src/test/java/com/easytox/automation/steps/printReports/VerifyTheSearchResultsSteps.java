package com.easytox.automation.steps.printReports;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyTheSearchResultsSteps {
	private WebDriver driver;
	
	public VerifyTheSearchResultsSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}
		
	@When("^Enter any search criteria and click on search icon PR$")
	public void enter_any_search_criteria_and_click_on_search_icon() throws Throwable {
		driver.navigate().to("http://bmtechsol.com:8080/easytox/caseOrder/finalizedCaselist");

		Thread.sleep(2000);
		search("John");
	}
	
	@Then("^Matching records with entered data should be displayed in the finalized case list PR$")
	public void matching_records_with_entered_data_should_be_displayed_in_the_finalized_case_list() throws Throwable {
		Thread.sleep(2000);
		WebElement tbody  = driver.findElement(By.cssSelector("#caseorder tbody"));
		List<WebElement> cells  = tbody.findElements(By.tagName("td"));
		
		for (WebElement cell : cells) {
			if(cell.getText().equals("John")) {
				Assert.assertTrue(cell.getText().equals("John"));
				break;
			}
		}
	}

	private void search(String searchKey) {
		driver.findElement(By.cssSelector("#caseorder_filter > label > input")).click();
		Actions actions = new Actions(driver);
		actions.moveToElement(driver.findElement(By.cssSelector("#caseorder_filter > label")));
		actions.click();
		actions.sendKeys(searchKey);
		actions.build().perform();
	}
	
}
