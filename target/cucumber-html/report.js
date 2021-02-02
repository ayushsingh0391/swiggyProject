$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Swiggy_Signup.feature");
formatter.feature({
  "name": "Signup functionality of Swiggy user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.scenario({
  "name": "Provide Sign up function for the user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is already at the swiggy page",
  "keyword": "Given "
});
formatter.match({
  "location": "Swiggy_Steps.the_user_is_already_at_the_swiggy_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up",
  "keyword": "When "
});
formatter.match({
  "location": "Swiggy_Steps.user_clicks_on_sign_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be redirected to sign up page",
  "keyword": "Then "
});
formatter.match({
  "location": "Swiggy_Steps.user_must_be_redirected_to_sign_up_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Provide filling of sign up details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User is already at the Signup details page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"Phone\" \"\u003cName\u003e\"\"\u003cEmail\u003e\"\"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks Continue button",
  "keyword": "And "
});
formatter.step({
  "name": "User shoud be able to sign up",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Phone",
        "Name",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "9729537731",
        "Ayush",
        "rajan.ayu@gmail.com",
        "India@12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Provide filling of sign up details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already at the Signup details page",
  "keyword": "Given "
});
formatter.match({
  "location": "Swiggy_Steps.user_is_already_at_the_signup_details_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html//div[@id\u003d\u0027overlay-sidebar-root\u0027]//div[@class\u003d\u0027_3vi_e\u0027]/div[@class\u003d\u0027_12S7_\u0027]//div[@class\u003d\u0027_3pYe-\u0027]//a[@class\u003d\u0027_3p4qh\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\n  (Driver info: chromedriver\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706),platform\u003dLinux 4.4.0-1119-aws x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ip-172-31-46-74\u0027, ip: \u0027172.31.46.74\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.4.0-1119-aws\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dLINUX, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:33894}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.41.578700 (2f1ed5f9343c13f73144538f15c00b370eda6706), userDataDir\u003d/tmp/.org.chromium.Chromium.bkwe4g}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d83.0.4103.97, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b2536ef607610719d9f3f7b833a64f3b\n*** Element info: {Using\u003dxpath, value\u003d/html//div[@id\u003d\u0027overlay-sidebar-root\u0027]//div[@class\u003d\u0027_3vi_e\u0027]/div[@class\u003d\u0027_12S7_\u0027]//div[@class\u003d\u0027_3pYe-\u0027]//a[@class\u003d\u0027_3p4qh\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\n\tat stepDefinition.Swiggy_Steps.user_is_already_at_the_signup_details_page(Swiggy_Steps.java:61)\n\tat ✽.User is already at the Signup details page(file:src/test/java/features/Swiggy_Signup.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "User enters \"Phone\" \"Ayush\"\"rajan.ayu@gmail.com\"\"India@12\"",
  "keyword": "When "
});
formatter.match({
  "location": "Swiggy_Steps.user_enters_something_somethingsomethingsomething(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "Swiggy_Steps.user_clicks_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User shoud be able to sign up",
  "keyword": "Then "
});
formatter.match({
  "location": "Swiggy_Steps.user_shoud_be_able_to_sign_up()"
});
formatter.result({
  "status": "skipped"
});
});