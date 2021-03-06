package com.easytox.automation.steps.labAdmin.verifyLabUserList;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import com.easytox.automation.driver.DriverBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class VerifyThePaginationSteps {
	private WebDriver driver;
	private int activePage = 1;
	
	public VerifyThePaginationSteps() {
		DriverBase.instantiateDriverObject();
		driver = DriverBase.getDriver();
	}
	
	@When("^Navigate back and forth by selecting page numbers 'Prev/(\\d+),(\\d+),(\\d+)/Next' LUL$")
	public void navigate_back_and_forth_by_selecting_page_numbers_Prev_Next(int arg1, int arg2, int arg3) throws Throwable {
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".fa-users")).click();
		
		Thread.sleep(2000);
		WebElement next = driver.findElement(By.cssSelector(".next > a"));
		WebElement prev = driver.findElement(By.cssSelector(".prev > a"));
		
		while(!driver.findElement(By.cssSelector(".next")).getAttribute("class").contains("disabled")) {
			next.click();
			activePage = Integer.parseInt(driver.findElement(By.cssSelector(".pagination .active")).getText());
			Thread.sleep(500);
		}
		
		while(!driver.findElement(By.cssSelector(".prev")).getAttribute("class").contains("disabled")) {
			prev.click();
			activePage = Integer.parseInt(driver.findElement(By.cssSelector(".pagination .active")).getText());
			Thread.sleep(500);
		}
	}

	@Then("^User should be navigate to the selected page LUL$")
	public void user_should_be_navigate_to_the_selected_page() throws Throwable {
		Assert.assertEquals(Integer.parseInt(driver.findElement(By.cssSelector(".pagination .active")).getText()), activePage);
	}

	@When("^Checking the message of no of records displayed on the current page bottom left corner of the screen LUL$")
	public void checking_the_message_of_no_of_records_displayed_on_the_current_page_bottom_left_corner_of_the_screen() throws Throwable {
		Assert.assertFalse(driver.findElement(By.cssSelector("#example_info")).getText().equals(null));
	}

	@Then("^A text message 'Showing x to y of z entries' should be displayed on the bottom left corner of the list LUL$")
	public void a_text_message_Showing_x_to_y_of_z_entries_should_be_displayed_on_the_bottom_left_corner_of_the_list() throws Throwable {
		String msg = driver.findElement(By.cssSelector("#example_info")).getText();
		Assert.assertTrue(msg.matches("Showing (\\d)+ to (\\d)+ of (\\d)+ entries"));
	}
	
}
