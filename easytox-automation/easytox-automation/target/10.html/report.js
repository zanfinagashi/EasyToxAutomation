$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Case List/addingANewCase.feature");
formatter.feature({
  "line": 2,
  "name": "Adding a new case",
  "description": "",
  "id": "adding-a-new-case",
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
  "name": "Adding a new case",
  "description": "",
  "id": "adding-a-new-case;adding-a-new-case",
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
  "name": "Click on \"+\" icon beside the Search Box CL",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "\"Create New Case\" screen should be displayed CL",
  "keyword": "Then "
});
formatter.match({
  "location": "AddingANewCaseSteps.user_should_be_login_to_the_lab()"
});
formatter.result({
  "duration": 6434825114,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"j_username\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 82 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\Zanfina\\AppData\\Local\\Temp\\scoped_dir9884_477}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4787e61c5348932500ba05329cd43955\n*** Element info: {Using\u003dname, value\u003dj_username}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.easytox.automation.steps.caseList.AddingANewCaseSteps.user_should_be_login_to_the_lab(AddingANewCaseSteps.java:32)\r\n\tat ✽.Given User should be login to the lab(features/Case List/addingANewCase.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 10
    }
  ],
  "location": "AddingANewCaseSteps.click_on_icon_beside_the_Search_Box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Create New Case",
      "offset": 1
    }
  ],
  "location": "AddingANewCaseSteps.screen_should_be_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
});