@bvt @smoke @uat
Feature: Access seleniumframework.com website
 Use selenium java with cucumber-jvm and navigate to website

@positive
Scenario: Accession Prefix

When the user is on Accession Prefix page user should be able to view the options and select them

Given the user is on Accession Prefix page 
When selected Prefix as Case Type AP
Then user should be able to select case type and enter prefix, sequence number check default and can click on Add AP

Given the user is on Accession Prefix page 
When selected Prefix as Location AP
Then user should be able to select Location and enter prefix, sequence number, check default and can click on Add AP

Given the user is on Accession Prefix page 
When selected Prefix as Pathologist AP
Then user should be able to select Pathologist and enter prefix, sequence number check default and can click on Add AP

Given the user is on Accession Prefix page 
When the user should be able to select prefix type,enter prefix, sequence number check default and can click on Add AP
Then the added prefix should display in the list with Default AP

Given the user is on Accession Prefix page 
When there is a prefix added with default AP
Then the newly added prefix should display in the list with Default And the default from the previous one should be gone AP

Given the user is on Accession Prefix page 
When the user is not selected Prefix type AP	
Then Add button should not be enabled AP


