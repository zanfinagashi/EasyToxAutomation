package com.easytox.automation.steps.orderList;

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

	@When("^Click on 'Order List' on the menu$")
	public void click_on_Order_List_on_the_menu() throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".sidebar-menu > li")).click();
	}

	@Then("^'Order List' screen should be displayed$")
	public void order_List_screen_should_be_displayed() throws Throwable {
		Assert.assertEquals(driver.getCurrentUrl(), "http://bmtechsol.com:8080/easytox/orderFrom/list");
	}
}
