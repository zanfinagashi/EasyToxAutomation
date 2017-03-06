@bvt @smoke @uat
Feature: Verify lab user list

@positive
Scenario: Verify number of records displayed 

Given Enter valid Username and Password click on 'Login' button LA
When Verify the default number of records displayed LUL
Then Default number '10' should be displayed in the dropdown box LUL

When Click on dropdown that shows no of records to be displayed on the page LUL
Then User should be able to view and select the options from the list and the corresponding number of records should be displayed on the page LUL