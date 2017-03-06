$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Instruments/verifyPagination.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the pagination",
  "description": "",
  "id": "verify-the-pagination",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@somke"
    },
    {
      "line": 1,
      "name": "@uat"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Verify the pagination",
  "description": "",
  "id": "verify-the-pagination;verify-the-pagination",
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
  "name": "Navigate back and forth by selecting page numbers \u0027Prev/1,2,3/Next\u0027 I",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User should be navigate to the selected page I",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Checking the message of no of records displayed on the current page bottom left corner of the screen I",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "A text message “Showing x to y of z entries” should be displayed on the bottom left corner of the list I",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingANewCaseSteps.user_should_be_login_to_the_lab()"
});
formatter.result({
  "duration": 389692074364,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: cannot determine loading status\nfrom timeout: Timed out receiving message from renderer: -15.373\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 319.13 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir17248_13889}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c22bb509cb730ae81efd8e1b5a16c388\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:969)\r\n\tat com.easytox.automation.steps.caseList.AddingANewCaseSteps.user_should_be_login_to_the_lab(AddingANewCaseSteps.java:30)\r\n\tat ✽.Given User should be login to the lab(features/Instruments/verifyPagination.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 56
    },
    {
      "val": "2",
      "offset": 58
    },
    {
      "val": "3",
      "offset": 60
    }
  ],
  "location": "VerifyPaginationSteps.navigate_back_and_forth_by_selecting_page_numbers_Prev_Next(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyPaginationSteps.user_should_be_navigate_to_the_selected_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyPaginationSteps.checking_the_message_of_no_of_records_displayed_on_the_current_page_bottom_left_corner_of_the_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyPaginationSteps.a_text_message_Showing_x_to_y_of_z_entries_should_be_displayed_on_the_bottom_left_corner_of_the_list()"
});
formatter.result({
  "status": "skipped"
});
});