@bvt @smoke @uat
Feature: Verify lab user list

@positive
Scenario: Verify data sorting 

Given Enter valid Username and Password click on 'Login' button LA
When Click on '˅' down arrow on any on Sorting column LUL
Then Records should be displayed based on ascending order of selected field LUL

When Click on '^' up arrow on any on Sorting column LUL
Then Records should be displayed based on descending order of selected field LUL