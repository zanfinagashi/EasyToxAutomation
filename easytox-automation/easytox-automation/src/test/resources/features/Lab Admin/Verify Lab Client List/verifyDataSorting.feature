@bvt @smoke @uat
Feature: Verify lab client list

@positive
Scenario: Verify data sorting 

Given User should be login to the lab
When Click on '˅' down arrow on any on Sorting column LCL
Then Records should be displayed based on the asecending order of the selected field LCL

When Click on '^' Up arrow icon on any Sorting column LCL
Then Records should be displayed based on the descending order of the selected field LCL