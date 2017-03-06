package com.easytox.automation.steps.labAdmin.verifyLabUserList;

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

	@When("^Verify keyword search by entering Username/Name/Contact/email/Role/Lab of any title and verify that it is found in search results LUL$")
	public void verify_keyword_search_by_entering_Username_Name_Contact_email_Role_Lab_of_any_title_and_verify_that_it_is_found_in_search_results() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".fa-users")).click();
		Thread.sleep(5000);
		
		
		WebElement searchBox = driver.findElement(By.cssSelector("#example_filter > label > input"));
		searchBox.clear();
		
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.cssSelector("#example_filter > label")));
		action.click();
		action.sendKeys("test");
		action.build().perform();
	}

	@Then("^Matching records with entered data should be displayed in the case list LUL$")
	public void matching_records_with_entered_data_should_be_displayed_in_the_case_list() throws Throwable {
		List<WebElement> cells = driver.findElements(By.cssSelector("#example tbody tr > td"));
		
		for (WebElement cell : cells) {
			if(cell.getText().equals("test")) {
				Assert.assertTrue(cell.getText().equals(""));
			}
		}
	}

}
