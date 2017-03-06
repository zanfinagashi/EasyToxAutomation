@bvt @somke @uat
Feature: Verify data sorting 

@positive
Scenario: Verify data sorting 

Given User should be login to the lab
When Click on '˅' down arrow icon on Sorting column I
Then Records should be displayed based on the asecending order of the selected field I

When Click on '^' Up arrow icon on sorting column I
Then Records should be displayed based on the descending order of the selected field I