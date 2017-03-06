@bvt @smoke @uat
Feature: Verify lab user list

@positive
Scenario: Verify the search results

Given Enter valid Username and Password click on 'Login' button LA	
When Verify keyword search by entering Username/Name/Contact/email/Role/Lab of any title and verify that it is found in search results LUL
Then Matching records with entered data should be displayed in the case list LUL