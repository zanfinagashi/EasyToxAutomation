$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Accession Prefix/sortingOrder.feature");
formatter.feature({
  "line": 2,
  "name": "Checking the sorting order of the displayed results",
  "description": "",
  "id": "checking-the-sorting-order-of-the-displayed-results",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@btv"
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
  "name": "Checking the sorting order of the displayed results",
  "description": "",
  "id": "checking-the-sorting-order-of-the-displayed-results;checking-the-sorting-order-of-the-displayed-results",
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
  "name": "clicked on Prefix column of the list AP",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the list should be displayed in the alphabetical order AP",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "clicked on Prefix type column of the list AP",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the list should be displayed in the alphabetical order AP",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "clicked on Sequence number column of the list AP",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the list should be displayed in the numerical order AP",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the user is on Accession Prefix page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "clicked on Default column of the list AP",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the list should be displayed in the order AP",
  "keyword": "Then "
});
formatter.match({
  "location": "CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page()"
});
formatter.result({
  "duration": 5947729856,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 46 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir4732_29531}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bd1e1db4dd05de34fed53e5cffeabcaa\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.accessionPrefix.CheckingMessageOfNoOfResultsDisplayedSteps.user_should_be_login_to_the_lab(CheckingMessageOfNoOfResultsDisplayedSteps.java:52)\r\n\tat com.easytox.automation.steps.accessionPrefix.CheckingMessageOfNoOfResultsDisplayedSteps.the_user_is_on_Accession_Prefix_page(CheckingMessageOfNoOfResultsDisplayedSteps.java:27)\r\n\tat ✽.Given the user is on Accession Prefix page(features/Accession Prefix/sortingOrder.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SortingOrderSteps.clicked_on_Prefix_column_of_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortingOrderSteps.the_list_should_be_displayed_in_the_alphabetical_order()"
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
  "location": "SortingOrderSteps.clicked_on_Prefix_type_column_of_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortingOrderSteps.the_list_should_be_displayed_in_the_alphabetical_order()"
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
  "location": "SortingOrderSteps.clicked_on_Sequence_number_column_of_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortingOrderSteps.the_list_should_be_displayed_in_the_numerical_order()"
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
  "location": "SortingOrderSteps.clicked_on_Default_column_of_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SortingOrderSteps.the_list_should_be_displayed_in_the_order()"
});
formatter.result({
  "status": "skipped"
});
});