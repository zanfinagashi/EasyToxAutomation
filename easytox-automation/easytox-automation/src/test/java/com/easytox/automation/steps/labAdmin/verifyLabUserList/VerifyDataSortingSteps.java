package com.easytox.automation.steps.labAdmin.verifyLabUserList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyDataSortingSteps {
	private WebDriver driver;
	private WebElement element;
	
	public VerifyDataSortingSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}
	
	@When("^Click on '˅' down arrow on any on Sorting column LUL$")
	public void click_on_down_arrow_on_any_on_Sorting_column() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".fa-users")).click();
		
		Thread.sleep(2000);
		element = driver.findElement(By.cssSelector("#example > thead > tr > th:nth-child(2)"));
		element.click();
	}

	@Then("^Records should be displayed based on ascending order of selected field LUL$")
	public void records_should_be_displayed_based_on_ascending_order_of_selected_field() throws Throwable {
		Thread.sleep(2000);
		Assert.assertEquals(element.getAttribute("class"), "sorting_asc");
	}
	
	@When("^Click on '\\^' up arrow on any on Sorting column LUL$")
	public void click_on_up_arrow_on_any_on_Sorting_column() throws Throwable {
		  element.click();
	}

	@Then("^Records should be displayed based on descending order of selected field LUL$")
	public void records_should_be_displayed_based_on_descending_order_of_selected_field() throws Throwable {
		Thread.sleep(2000);
		Assert.assertEquals(element.getAttribute("class"), "sorting_desc");
	}
}
