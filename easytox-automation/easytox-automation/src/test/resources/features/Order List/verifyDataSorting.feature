@bvt @smoke @uat
Feature: Verify data sorting

@postive
Scenario: Verify data sorting

Given User should be login to the lab
When Click on '˅' down arrow on any on Sorting column OL
Then Records should be displayed based on the asecending order of the selected field OL

When Click on '^' Up arrow icon on any Sorting column OL
Then Records should be displayed based on the descending order of the selected field OL