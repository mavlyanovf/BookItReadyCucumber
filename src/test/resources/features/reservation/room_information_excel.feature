@reservation
  Feature: room information functionality

    Scenario: Room details
      Given user on the login page
      When user logs in using "osurmeyersbf@illinois.edu" and "jacquenettakelling"
      Then correct room information should be displayed for light side

