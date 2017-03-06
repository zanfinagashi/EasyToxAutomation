$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Lab Admin/Verify Lab Admin/verifyAddUserToLab.feature");
formatter.feature({
  "line": 2,
  "name": "Verify adding lab admin user",
  "description": "",
  "id": "verify-adding-lab-admin-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@uat"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify add user to lab",
  "description": "",
  "id": "verify-adding-lab-admin-user;verify-add-user-to-lab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter valid Username and Password click on \u0027Login\u0027 button LA",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on lab name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "\u0027Update lab\u0027 screen should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on \u0027User+\u0027 icon on the right corner of the Update lab screen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\u0027Add Lab Admin User\u0027 screen should be diplayed",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter User Information, Personal Information and Lab  Information and click Add User",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "New user is added successfully and newly added user is listed in the Lab admin User List screen",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyTheEditSteps.enter_valid_Username_and_Password_click_on_Login_button()"
});
