$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\reservation\\mydetails.feature");
formatter.feature({
  "name": "My details page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.scenario({
  "name": "my information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"elaye8m@wikipedia.org\" and \"tabordullingham\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Tabor Dullingham"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "DevOps"
      ]
    },
    {
      "cells": [
        "batch",
        "#7"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in using \"\u003cuser_email\u003e\" and \"\u003cuser_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.step({
  "name": "the user should see their information:",
  "keyword": "Then ",
  "rows": [
    {
      "cells": [
        "name",
        "\u003cuser_name\u003e"
      ]
    },
    {
      "cells": [
        "role",
        "\u003cuser_role\u003e"
      ]
    },
    {
      "cells": [
        "team",
        "\u003cuser_team\u003e"
      ]
    },
    {
      "cells": [
        "batch",
        "\u003cuser_batch\u003e"
      ]
    },
    {
      "cells": [
        "campus",
        "\u003cuser_campus\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_email",
        "user_password",
        "user_name",
        "user_role",
        "user_team",
        "user_batch",
        "user_campus"
      ]
    },
    {
      "cells": [
        "elaye8m@wikipedia.org",
        "tabordullingham",
        "Tabor Dullingham",
        "student-team-member",
        "DevOps",
        "#7",
        "VA"
      ]
    },
    {
      "cells": [
        "osurmeyersbf@illinois.edu",
        "jacquenettakelling",
        "Jacquenetta Kelling",
        "student-team-leader",
        "Docker",
        "#8",
        "IL"
      ]
    },
    {
      "cells": [
        "wfarrell8n@usnews.com",
        "doniafisby",
        "Donia Fisby",
        "student-team-member",
        "DevOps",
        "#7",
        "VA"
      ]
    },
    {
      "cells": [
        "mnewbatt8o@utexas.edu",
        "opalcave",
        "Opal Cave",
        "student-team-member",
        "DevOps",
        "#7",
        "VA"
      ]
    },
    {
      "cells": [
        "wamiss8p@businesswire.com",
        "olagrills",
        "Ola Grills",
        "student-team-member",
        "DevOps",
        "#7",
        "VA"
      ]
    },
    {
      "cells": [
        "marblaster82@patch.com",
        "rosanneloadman",
        "Rosanne Loadman",
        "student-team-member",
        "Frostbite",
        "#8",
        "VA"
      ]
    },
    {
      "cells": [
        "csummergill83@blinklist.com",
        "edycaton",
        "Edy Caton",
        "student-team-member",
        "Frostbite",
        "#8",
        "VA"
      ]
    },
    {
      "cells": [
        "strayford84@e-recht24.de",
        "carlosmichie",
        "Carlos Michie",
        "student-team-member",
        "Frostbite",
        "#8",
        "VA"
      ]
    },
    {
      "cells": [
        "filieve85@amazon.de",
        "francescagowing",
        "Francesca Gowing",
        "student-team-member",
        "Frostbite",
        "#8",
        "VA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"elaye8m@wikipedia.org\" and \"tabordullingham\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Tabor Dullingham"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "DevOps"
      ]
    },
    {
      "cells": [
        "batch",
        "#7"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"osurmeyersbf@illinois.edu\" and \"jacquenettakelling\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Jacquenetta Kelling"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-leader"
      ]
    },
    {
      "cells": [
        "team",
        "Docker"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "IL"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"wfarrell8n@usnews.com\" and \"doniafisby\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Donia Fisby"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "DevOps"
      ]
    },
    {
      "cells": [
        "batch",
        "#7"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.cybertek.step_definitions.MyDetailsStepDefinitions.the_user_should_see_their_information(MyDetailsStepDefinitions.java:29)\r\n\tat ✽.the user should see their information:(src\\test\\resources\\features\\reservation\\mydetails.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"mnewbatt8o@utexas.edu\" and \"opalcave\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Opal Cave"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "DevOps"
      ]
    },
    {
      "cells": [
        "batch",
        "#7"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"wamiss8p@businesswire.com\" and \"olagrills\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for text (\u0027map\u0027) to be present in element Proxy element for: DefaultElementLocator \u0027By.xpath: //h1[@class\u003d\u0027title\u0027 and contains(text(), \u0027map\u0027)]\u0027 (tried for 15 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.cybertek.pages.SignInPage.logIn(SignInPage.java:35)\r\n\tat com.cybertek.step_definitions.LoginPageStepDefinitions.user_logs_in_using_and(LoginPageStepDefinitions.java:24)\r\n\tat ✽.user logs in using \"wamiss8p@businesswire.com\" and \"olagrills\"(src\\test\\resources\\features\\reservation\\mydetails.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1[@class\u003d\u0027title\u0027 and contains(text(), \u0027map\u0027)]\"}\n  (Session info: chrome\u003d76.0.3809.100)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM9V0CS\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\FARRUKH\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:65357}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c3edcbe4a84aeebf0217457f17099bca\n*** Element info: {Using\u003dxpath, value\u003d//h1[@class\u003d\u0027title\u0027 and contains(text(), \u0027map\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$12.apply(ExpectedConditions.java:353)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$12.apply(ExpectedConditions.java:349)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.cybertek.pages.SignInPage.logIn(SignInPage.java:35)\r\n\tat com.cybertek.step_definitions.LoginPageStepDefinitions.user_logs_in_using_and(LoginPageStepDefinitions.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:67)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:22)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:367)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Ola Grills"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "DevOps"
      ]
    },
    {
      "cells": [
        "batch",
        "#7"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"marblaster82@patch.com\" and \"rosanneloadman\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Rosanne Loadman"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "Frostbite"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"csummergill83@blinklist.com\" and \"edycaton\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Edy Caton"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "Frostbite"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"strayford84@e-recht24.de\" and \"carlosmichie\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Carlos Michie"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "Frostbite"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"filieve85@amazon.de\" and \"francescagowing\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user goes to the \"my self\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see their information:",
  "rows": [
    {
      "cells": [
        "name",
        "Francesca Gowing"
      ]
    },
    {
      "cells": [
        "role",
        "student-team-member"
      ]
    },
    {
      "cells": [
        "team",
        "Frostbite"
      ]
    },
    {
      "cells": [
        "batch",
        "#8"
      ]
    },
    {
      "cells": [
        "campus",
        "VA"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_user_should_see_their_information(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\reservation\\room_information_excel.feature");
formatter.feature({
  "name": "room information functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.scenario({
  "name": "Room details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reservation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in using \"osurmeyersbf@illinois.edu\" and \"jacquenettakelling\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "correct room information should be displayed for light side",
  "keyword": "Then "
});
formatter.match({
  "location": "RoomDetailsStepDefinitions.correct_room_information_should_be_displayed_for_light_side()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca _ngcontent-c5\u003d\"\" class\u003d\"room center-vertically\" id\u003d\"room-212\" href\u003d\"/schedule/rooms/apple\"\u003e...\u003c/a\u003e is not clickable at point (1523, 473). Other element would receive the click: \u003cspan _ngcontent-c5\u003d\"\" class\u003d\"room-name has-text-centered\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d76.0.3809.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-PM9V0CS\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.100, chrome: {chromedriverVersion: 76.0.3809.68 (420c9498db8ce..., userDataDir: C:\\Users\\FARRUKH\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:49656}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: daa9988e52a4e2360a7ea04bd7039f65\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cybertek.step_definitions.RoomDetailsStepDefinitions.correct_room_information_should_be_displayed_for_light_side(RoomDetailsStepDefinitions.java:38)\r\n\tat ✽.correct room information should be displayed for light side(src\\test\\resources\\features\\reservation\\room_information_excel.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
});