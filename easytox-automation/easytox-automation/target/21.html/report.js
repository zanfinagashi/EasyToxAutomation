$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Fax Queue/verifyDataSorting.feature");
formatter.feature({
  "line": 2,
  "name": "Verify data sorting",
  "description": "",
  "id": "verify-data-sorting",
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
  "name": "Verify data sorting",
  "description": "",
  "id": "verify-data-sorting;verify-data-sorting",
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
  "name": "Click on \u0027˅\u0027 down arrow icon on sorting column FQ",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Records should be displayed based on the asecending order of the selected sorting column FQ",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on \u0027^\u0027 Up arrow icon on sorting column FQ",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Records should be displayed based on the descending order of the selected sorting column FQ",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingANewCaseSteps.user_should_be_login_to_the_lab()"
});
formatter.result({
  "duration": 10904640272,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 33 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir18552_6265}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fa05b40fc827dee01d752fdd205a0072\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.GeneratedConstructorAccessor43.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.caseList.AddingANewCaseSteps.user_should_be_login_to_the_lab(AddingANewCaseSteps.java:32)\r\n\tat ✽.Given User should be login to the lab(features/Fax Queue/verifyDataSorting.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VerifyDataSortingSteps.click_on_down_arrow_icon_on_sorting_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyDataSortingSteps.records_should_be_displayed_based_on_the_asecending_order_of_the_selected_sorting_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyDataSortingSteps.click_on_Up_arrow_icon_on_sorting_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyDataSortingSteps.records_should_be_displayed_based_on_the_descending_order_of_the_selected_sorting_column()"
});
formatter.result({
  "status": "skipped"
});
});