@smoke
 Feature: Login


  Scenario: user login
    Given user on the login page
    When user logs in using "ucharlot7y@nbcnews.com" and "archibaldmelloy"
    And title should be "bookit"
    Then homepage should be displayed
