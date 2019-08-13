$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/homepage.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login as different members",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
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
      "name": "@test"
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
      "name": "@test"
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
formatter.uri("src/test/resources/features/mydetails.feature");
formatter.feature({
  "name": "My details page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "my information data driven test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    }
  ]
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
      "name": "@test"
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
      "name": "@test"
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
      "name": "@test"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.cybertek.step_definitions.MyDetailsStepDefinitions.the_user_should_see_their_information(MyDetailsStepDefinitions.java:29)\r\n\tat ✽.the user should see their information:(src/test/resources/features/mydetails.feature:21)\r\n",
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
      "name": "@test"
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
      "name": "@test"
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
      "name": "@test"
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
      "name": "@test"
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
      "name": "@test"
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
      "name": "@test"
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
});