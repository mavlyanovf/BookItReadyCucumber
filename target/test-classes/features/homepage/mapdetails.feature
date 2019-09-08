
@smoke
Feature: Map page details

Background:
  Given user on the login page
  When user logs in using "strayford84@e-recht24.de" and "carlosmichie"

  Scenario: Light side room
     Then I should be able to see "princeton" room

  Scenario: Light side all rooms
      Then the user should be able to see following conference rooms:
        | harvard   |
        | yale      |
        | princeton |
        | stanford  |
        | duke      |
        | berkeley  |



  Scenario: Team member test
    When the user goes to the "my team" page
    Then following team members should be displayed:
      | Rosanne   |
      | Edy       |
      | Carlos    |
      | Francesca |
