

Feature: Home page

  Background:
    Given user on the login page


  Scenario: login as a team lead
   When user logs in as a team lead
   Then homepage should be displayed
   And the Title of member should be "team-leader"


  Scenario: login as a team member
   When user logs in as a team member
   Then homepage should be displayed
   And the Title of member should be "student"


    Scenario Outline: login as different members
      When user logs in as a "<type>"
      Then homepage should be displayed
      And the Title of member should be "<title>"
    Examples:
      | type        | title       |
      | team_lead   | team-leader |
      | team_member | student     |