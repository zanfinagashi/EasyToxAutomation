package com.easytox.automation.steps.instruments;

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
	
	@When("^Click on '\\˅' down arrow icon on Sorting column I$")
	public void click_on_down_arrow_icon_on_Sorting_column() throws Throwable {
		driver.navigate().to("http://bmtechsol.com:8080/easytox/instruments/list");
		
		Thread.sleep(2000);
		element = driver.findElement(By.cssSelector("table > thead > tr > th:nth-child(2)"));
		element.click();
	}

	@Then("^Records should be displayed based on the asecending order of the selected field I$")
	public void records_should_be_displayed_based_on_the_asecending_order_of_the_selected_field() throws Throwable {
		Thread.sleep(1000);
		Assert.assertTrue(element.getAttribute("class").equals("sorting_asc"));
	}

	@When("^Click on '\\^' Up arrow icon on sorting column I$")
	public void click_on_Up_arrow_icon_on_sorting_column() throws Throwable {
		element.click();
	}

	@Then("^Records should be displayed based on the descending order of the selected field I$")
	public void records_should_be_displayed_based_on_the_descending_order_of_the_selected_field() throws Throwable {
		Thread.sleep(1000);
		Assert.assertTrue(element.getAttribute("class").equals("sorting_desc"));
	}
}
