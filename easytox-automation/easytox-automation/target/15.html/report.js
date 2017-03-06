$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Case List/verifyNoOfRecordsDisplayed.feature");
formatter.feature({
  "line": 2,
  "name": "Verify number of records displayed",
  "description": "",
  "id": "verify-number-of-records-displayed",
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
  "name": "Verify number of records displayed",
  "description": "",
  "id": "verify-number-of-records-displayed;verify-number-of-records-displayed",
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
  "name": "User should be login to the lab",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify the default number of records displayed CL",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Default number \"10\" should be displayed in the dropdown box CL",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on dropdown that shows no of records to be displayed on the page CL",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should be able to view and select the options from the list and the corresponding number of records should be displayed on the page CL",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingANewCaseSteps.user_should_be_login_to_the_lab()"
});
formatter.result({
  "duration": 9316513558,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 48 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir19872_16535}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 6c87213e44d98a601630b60ddf9d511e\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.caseList.AddingANewCaseSteps.user_should_be_login_to_the_lab(AddingANewCaseSteps.java:32)\r\n\tat ✽.Given User should be login to the lab(features/Case List/verifyNoOfRecordsDisplayed.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VerifyNoOfRecordsDisplayedSteps.verify_the_default_number_of_records_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 16
    }
  ],
  "location": "VerifyNoOfRecordsDisplayedSteps.default_number_should_be_displayed_in_the_dropdown_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyNoOfRecordsDisplayedSteps.click_on_dropdown_that_shows_no_of_records_to_be_displayed_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyNoOfRecordsDisplayedSteps.user_should_be_able_to_view_and_select_the_options_from_the_list_and_the_corresponding_number_of_records_should_be_displayed_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
});