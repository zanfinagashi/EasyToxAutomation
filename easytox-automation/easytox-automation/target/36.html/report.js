$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Lab Admin/Verify Edit Lab/verifyTheEdit.feature");
formatter.feature({
  "line": 2,
  "name": "Verify edit lab",
  "description": "",
  "id": "verify-edit-lab",
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
  "name": "Verify the edit",
  "description": "",
  "id": "verify-edit-lab;verify-the-edit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@positvie"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Enter valid Username and Password click on \u0027Login\u0027 button LA",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Lab admin user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on \u0027Lab List\u0027 on the menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "\u0027Lab List\u0027 results screen should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on User List Icon under \u0027action\u0027 column",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Lab User List should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on Edit icon",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Update Lab Admin User screen should be displayed successfully and the following information should be displayed on the screen User Information, Personal Information",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User information is not editable",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User information should be disabled and grayed out",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Personal information is editable and click on \u0027Update\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Personal information should be editable and and all the information should be updated successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyTheEditSteps.enter_valid_Username_and_Password_click_on_Login_button()"
});
formatter.result({
  "duration": 243009762517,
  "error_message": "java.lang.RuntimeException: org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat com.easytox.automation.driver.DriverBase.getDriver(DriverBase.java:46)\r\n\tat com.easytox.automation.steps.labAdmin.verifyEditLab.VerifyTheEditSteps.\u003cinit\u003e(VerifyTheEditSteps.java:18)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.GeneratedMethodAccessor22.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n\tat ✽.When Enter valid Username and Password click on \u0027Login\u0027 button LA(features/Lab Admin/Verify Edit Lab/verifyTheEdit.feature:7)\r\nCaused by: org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Zanfina-PC\u0027, ip: \u0027192.168.1.108\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:138)\r\n\tat com.easytox.automation.driver.DriverType$2.getWebDriverObject(DriverType.java:75)\r\n\tat com.easytox.automation.driver.DriverFactory.instantiateWebDriver(DriverFactory.java:98)\r\n\tat com.easytox.automation.driver.DriverFactory.getDriver(DriverFactory.java:44)\r\n\tat com.easytox.automation.driver.DriverBase.getDriver(DriverBase.java:44)\r\n\tat com.easytox.automation.steps.labAdmin.verifyEditLab.VerifyTheEditSteps.\u003cinit\u003e(VerifyTheEditSteps.java:18)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.GeneratedMethodAccessor22.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:400)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\nCaused by: java.lang.IllegalStateException: The process has not exited yet therefore no result is available ...\r\n\tat org.apache.commons.exec.DefaultExecuteResultHandler.getException(DefaultExecuteResultHandler.java:76)\r\n\tat org.openqa.selenium.os.UnixProcess.checkForError(UnixProcess.java:171)\r\n\tat org.openqa.selenium.os.CommandLine.checkForError(CommandLine.java:185)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:177)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:166)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:78)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\t... 52 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VerifyTheEditSteps.lab_admin_user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.click_on_Lab_List_on_the_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.lab_List_results_screen_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.click_on_User_List_Icon_under_action_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.lab_User_List_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.click_on_Edit_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.update_Lab_Admin_User_screen_should_be_displayed_successfully_and_the_followinginformation_should_be_displayed_on_the_screen_User_Information_Personal_Information()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.user_information_is_not_editable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.user_information_should_be_disabled_and_grayed_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.personal_information_is_editable_and_click_on_Update_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VerifyTheEditSteps.personal_information_should_be_editable_and_and_all_the_information_should_be_updated_successfully()"
});
formatter.result({
  "status": "skipped"
});
});