package com.easytox.automation.steps.labUser;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyDataSortingSteps {
	private WebDriver driver;
	private WebElement element;
	
	public VerifyDataSortingSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}

	@When("Click on '\\˅' down arrow icon on Sorting column LU$")
	public void click_on_down_arrow_icon_on_Sorting_column(String arg1) throws Throwable {
		clickElement(2);
	}

	@Then("^Records should be displayed based on the asecending order of the selected field LU$")
	public void records_should_be_displayed_based_on_the_asecending_order_of_the_selected_field() throws Throwable {
		Assert.assertTrue(element.getAttribute("class").equals("sorting_asc"));
	}

	@When("^Click on '\\^' Up arrow icon on sorting column LU$")
	public void click_on_Up_arrow_icon_on_sorting_column(String arg1) throws Throwable {
		clickElement(2);
	}

	@Then("^Records should be displayed based on the descending order of the selected field LU$")
	public void records_should_be_displayed_based_on_the_descending_order_of_the_selected_field() throws Throwable {
		Assert.assertTrue(element.getAttribute("class").equals("sorting_desc"));
	}

	@When("^Repeat Steps (\\d+) and (\\d+) on all the columns LU$")
	public void repeat_Steps_and_on_all_the_columns(int arg1, int arg2) throws Throwable {
		for (int i = 3; i <= 7; i++) {
			clickElement(i);
			Assert.assertTrue(element.getAttribute("class").equals("sorting_asc"));
			clickElement(i);
			Assert.assertTrue(element.getAttribute("class").equals("sorting_desc"));
		}
	}

	@Then("^Sorting should work on all the columns that has sorting facility LU$")
	public void sorting_should_work_on_all_the_columns_that_has_sorting_facility() throws Throwable {
		Assert.assertTrue(element.getAttribute("class").equals("sorting_desc"));
	}
	
	public void clickElement(int childIndex) throws InterruptedException {
		Thread.sleep(2000);
		element = driver.findElement(By.cssSelector("table > thead > tr > th:nth-child(" + childIndex + ")"));
		element.click();
	}
}
