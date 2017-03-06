$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Accession Prefix/selectPrefixType.feature");
formatter.feature({
  "line": 2,
  "name": "Access seleniumframework.com website",
  "description": "Use selenium java with cucumber-jvm and navigate to website",
  "id": "access-seleniumframework.com-website",
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
  "line": 6,
  "name": "Accession Prefix",
  "description": "",
  "id": "access-seleniumframework.com-website;accession-prefix",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the user is on Accession Prefix page user should be able to view the options and select them",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "selected Prefix as Case Type AP",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should be able to select case type and enter prefix, sequence number check default and can click on Add AP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "selected Prefix as Location AP",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to select Location and enter prefix, sequence number, check default and can click on Add AP",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "selected Prefix as Pathologist AP",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user should be able to select Pathologist and enter prefix, sequence number check default and can click on Add AP",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user should be able to select prefix type,enter prefix, sequence number check default and can click on Add AP",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the added prefix should display in the list with Default AP",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "there is a prefix added with default AP",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the newly added prefix should display in the list with Default And the default from the previous one should be gone AP",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "the user is not selected Prefix type AP",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Add button should not be enabled AP",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectPrefixTypeSteps.the_user_is_on_Accession_Prefix_page_user_should_be_able_to_view_the_options_and_select_them()"
});
formatter.result({
  "duration": 5608478964,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 35 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir14752_26953}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 89b4d416ee56e1152879ecc8e2d07a76\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.accessionPrefix.SelectPrefixTypeSteps.user_should_be_login_to_the_lab(SelectPrefixTypeSteps.java:125)\r\n\tat com.easytox.automation.steps.accessionPrefix.SelectPrefixTypeSteps.the_user_is_on_Accession_Prefix_page_user_should_be_able_to_view_the_options_and_select_them(SelectPrefixTypeSteps.java:30)\r\n\tat ✽.When the user is on Accession Prefix page user should be able to view the options and select them(features/Accession Prefix/selectPrefixType.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.selected_Prefix_as_Case_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.user_should_be_able_to_select_case_type_and_enter_prefix_sequence_number_check_default_and_can_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.selected_Prefix_as_Location()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.user_should_be_able_to_select_Location_and_enter_prefix_sequence_number_check_default_and_can_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.selected_Prefix_as_Pathologist()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.user_should_be_able_to_select_Pathologist_and_enter_prefix_sequence_number_check_default_and_can_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.the_user_should_be_able_to_select_prefix_type_enter_prefix_sequence_number_check_default_and_can_click_on_Add()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.the_added_prefix_should_display_in_the_list_with_Default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.there_is_a_prefix_added_with_default()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.the_newly_added_prefix_should_display_in_the_list_with_Default_And_the_default_from_the_previous_one_should_be_gone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.the_user_is_not_selected_Prefix_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelectPrefixTypeSteps.add_button_should_not_be_enabled()"
});
formatter.result({
  "status": "skipped"
});
});