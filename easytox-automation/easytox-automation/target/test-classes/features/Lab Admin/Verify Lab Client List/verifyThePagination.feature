@bvt @smoke @uat
Feature: Verifing lab client list

@positive
Scenario: Verify the pagination 

Given Enter valid Username and Password click on 'Login' button LA
When Navigate back and forth by selecting page numbers 'Prev/1,2,3/Next' LCL
Then User should be navigate to the selected page LCL

When Checking the message of no of records displayed on the current page bottom left corner of the screen LCL
Then A text message 'Showing x to y of z entries' should be displayed on the bottom left corner of the list LCL