@bvt @somke @uat
Feature: Verify number of records displayed

@positive
Scenario: Verify number of records displayed

Given User should be login to the lab
When Verify the default number of records displayed PR
Then Default number '10' should be displayed in the dropdown box PR

When Click on dropdown that shows no of records to be displayed on the page PR
Then User should be able to view and select the options from the list and the corresponding number of records should be displayed on the page PR