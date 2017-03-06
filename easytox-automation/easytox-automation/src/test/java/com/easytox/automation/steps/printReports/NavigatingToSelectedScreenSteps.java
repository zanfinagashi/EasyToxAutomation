package com.easytox.automation.steps.printReports;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NavigatingToSelectedScreenSteps {
	private WebDriver driver;
	
	public NavigatingToSelectedScreenSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}
	
	@When("^Click on 'Print Reports' tab on the menu$")
	public void click_on_Print_Reports_tab_on_the_menu() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".account-area > li:nth-child(3)")).click();
	}

	@Then("^'Finalized Case List' screen should be displayed$")
	public void finalized_Case_List_screen_should_be_displayed() throws Throwable {
		Thread.sleep(2000);
		Assert.assertEquals(driver.getCurrentUrl(), "http://bmtechsol.com:8080/easytox/caseOrder/finalizedCaselist");
	}
}
