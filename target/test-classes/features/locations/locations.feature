@location
Feature: campus locations

  Background:
    Given user on the login page

  Scenario: VA - dark side
    When user logs in using "mnewbatt8o@utexas.edu" and "opalcave"
    Then location should be "dark-side"

  Scenario: VA - light side

    When user logs in using "filieve85@amazon.de" and "francescagowing"
    Then location should be "light-side"

  Scenario: Illinois
    When user logs in using "cdooheybw@biglobe.ne.jp" and "emilymoorcroft"
    Then location should be "il"

  Scenario Outline: Verify campus names
    Given user on the login page
    When user logs in using "<email>" and "<password>"
    Then location should be "<campus>"


    Examples:
      | email                       | password        | campus     |
      | elaye8m@wikipedia.org       | tabordullingham | dark-side  |
      | wfarrell8n@usnews.com       | doniafisby      | dark-side  |
      | mnewbatt8o@utexas.edu       | opalcave        | dark-side  |
      | wamiss8p@businesswire.com   | olagrills       | dark-side  |
      | marblaster82@patch.com      | rosanneloadman  | light-side |
      | csummergill83@blinklist.com | edycaton        | light-side |
      | strayford84@e-recht24.de    | carlosmichie    | light-side |
      | filieve85@amazon.de         | francescagowing | light-side |




