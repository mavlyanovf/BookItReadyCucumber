
Feature: My details page


  Scenario: my information
    Given user on the login page
    And user logs in using "elaye8m@wikipedia.org" and "tabordullingham"
    When the user goes to the "my self" page
    Then the user should see their information:
      | name   | Tabor Dullingham    |
      | role   | student-team-member |
      | team   | DevOps              |
      | batch  | #7                  |
      | campus | VA                  |

@test
  Scenario Outline: my information data driven test
    Given user on the login page
    And user logs in using "<user_email>" and "<user_password>"
    When the user goes to the "my self" page
    Then the user should see their information:
      | name   | <user_name>   |
      | role   | <user_role>   |
      | team   | <user_team>   |
      | batch  | <user_batch>  |
      | campus | <user_campus> |

    Examples:
      | user_email                  | user_password      | user_name           | user_role           | user_team | user_batch | user_campus |
      | elaye8m@wikipedia.org       | tabordullingham    | Tabor Dullingham    | student-team-member | DevOps    | #7         | VA          |
      | osurmeyersbf@illinois.edu   | jacquenettakelling | Jacquenetta Kelling | student-team-leader | Docker    | #8         | IL          |
      | wfarrell8n@usnews.com       | doniafisby         | Donia Fisby         | student-team-member | DevOps    | #7         | VA          |
      | mnewbatt8o@utexas.edu       | opalcave           | Opal Cave           | student-team-member | DevOps    | #7         | VA          |
      | wamiss8p@businesswire.com   | olagrills          | Ola Grills          | student-team-member | DevOps    | #7         | VA          |
      | marblaster82@patch.com      | rosanneloadman     | Rosanne Loadman     | student-team-member | Frostbite | #8         | VA          |
      | csummergill83@blinklist.com | edycaton           | Edy Caton           | student-team-member | Frostbite | #8         | VA          |
      | strayford84@e-recht24.de    | carlosmichie       | Carlos Michie       | student-team-member | Frostbite | #8         | VA          |
      | filieve85@amazon.de         | francescagowing    | Francesca Gowing    | student-team-member | Frostbite | #8         | VA          |
