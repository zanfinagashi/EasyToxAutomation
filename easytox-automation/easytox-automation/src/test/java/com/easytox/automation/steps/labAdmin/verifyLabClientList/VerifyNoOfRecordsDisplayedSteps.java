package com.easytox.automation.steps.labAdmin.verifyLabClientList;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyNoOfRecordsDisplayedSteps {
	private WebDriver driver;
	private int noOfRecords;
	private Select select;
	
	public VerifyNoOfRecordsDisplayedSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}

	@When("^Verify the default number of records displayed LCL$")
	public void verify_the_default_number_of_records_displayed() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".fa-list-ul")).click();
		
		Thread.sleep(2000);
		select = new Select(driver.findElement(By.name("example_length")));
		noOfRecords = Integer.parseInt(select.getFirstSelectedOption().getText());
	}

	@Then("^Default number '(\\d+)' should be displayed in the dropdown box LCL$")
	public void default_number_should_be_displayed_in_the_dropdown_box(int arg1) throws Throwable {
		Assert.assertEquals(Integer.parseInt(select.getFirstSelectedOption().getText()), noOfRecords);
	}

	@When("^Click on dropdown that shows no of records to be displayed on the page LCL$")
	public void click_on_dropdown_that_shows_no_of_records_to_be_displayed_on_the_page() throws Throwable {
		driver.findElement(By.name("example_length")).click();
	}

	@Then("^User should be able to view and select the options from the list and the corresponding number of records should be displayed on the page LCL$")
	public void user_should_be_able_to_view_and_select_the_options_from_the_list_and_the_corresponding_number_of_records_should_be_displayed_on_the_page() throws Throwable {
		int noOfRows;
		
		for (int i = 1; i < 4; i++) {
			select.selectByIndex(i);
			noOfRows = driver.findElements(By.cssSelector("#example tbody tr")).size();
			Assert.assertTrue(noOfRows <= Integer.parseInt(select.getFirstSelectedOption().getText()));
			Thread.sleep(500);
		}
	}
}
