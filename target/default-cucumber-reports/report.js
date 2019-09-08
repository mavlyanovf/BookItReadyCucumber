$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\homepage\\homepage.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "login as a team lead",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user logs in as a team lead",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_as_a_team_lead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Title of member should be \"team-leader\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_Title_of_member_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "login as a team member",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user logs in as a team member",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_as_a_team_member()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Title of member should be \"student\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_Title_of_member_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "login as different members",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user logs in as a \"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "the Title of member should be \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "type",
        "title"
      ]
    },
    {
      "cells": [
        "team_lead",
        "team-leader"
      ]
    },
    {
      "cells": [
        "team_member",
        "student"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "login as different members",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user logs in as a \"team_lead\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Title of member should be \"team-leader\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_Title_of_member_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "login as different members",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user logs in as a \"team_member\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_as_a(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Title of member should be \"student\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyDetailsStepDefinitions.the_Title_of_member_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\homepage\\mapdetails.feature");
formatter.feature({
  "name": "Map page details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Light side room",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I should be able to see \"princeton\" room",
  "keyword": "Then "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.i_should_be_able_to_see_room(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Light side all rooms",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user should be able to see following conference rooms:",
  "rows": [
    {
      "cells": [
        "harvard"
      ]
    },
    {
      "cells": [
        "yale"
      ]
    },
    {
      "cells": [
        "princeton"
      ]
    },
    {
      "cells": [
        "stanford"
      ]
    },
    {
      "cells": [
        "duke"
      ]
    },
    {
      "cells": [
        "berkeley"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_should_be_able_to_see_following_conference_rooms(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Team member test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "the user goes to the \"my team\" page",
  "keyword": "When "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.the_user_goes_to_the_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following team members should be displayed:",
  "rows": [
    {
      "cells": [
        "Rosanne"
      ]
    },
    {
      "cells": [
        "Edy"
      ]
    },
    {
      "cells": [
        "Carlos"
      ]
    },
    {
      "cells": [
        "Francesca"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MapDetailsStepDefinitions.following_team_members_should_be_displayed(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src\\test\\resources\\features\\login\\login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "user login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
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
  "name": "user logs in using \"ucharlot7y@nbcnews.com\" and \"archibaldmelloy\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStepDefinitions.user_logs_in_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title should be \"bookit\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinitions.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});