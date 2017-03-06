$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Accession Prefix/checkingMessageOfNoOfResultsDisplayed.feature");
formatter.feature({
  "line": 2,
  "name": "Checking the message of no of results displayed on current page",
  "description": "",
  "id": "checking-the-message-of-no-of-results-displayed-on-current-page",
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
  "name": "Checking the message of no of results displayed on current page",
  "description": "",
  "id": "checking-the-message-of-no-of-results-displayed-on-current-page;checking-the-message-of-no-of-results-displayed-on-current-page",
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
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user searches the results AP",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the text “Showing x to y of z entries” should be displayed on the bottom left corner of the list AP",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "duration": 8062117263,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir18940_6017}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 3a185a4cf22a208636ba2fe65f789e5a\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.accessionPrefix.CheckingMessageOfNoOfResultsDisplayedSteps.user_should_be_login_to_the_lab(CheckingMessageOfNoOfResultsDisplayedSteps.java:52)\r\n\tat com.easytox.automation.steps.accessionPrefix.CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page(CheckingMessageOfNoOfResultsDisplayedSteps.java:27)\r\n\tat ✽.Given the user is on Accession Prefix page(features/Accession Prefix/checkingMessageOfNoOfResultsDisplayed.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_searches_the_results_AP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_text_Showing_x_to_y_of_z_entries_should_be_displayed_on_the_bottom_left_corner_of_the_list_AP()"
});
formatter.result({
  "status": "skipped"
});
});