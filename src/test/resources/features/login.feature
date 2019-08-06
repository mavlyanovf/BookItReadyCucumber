Feature: Login

  @login
  Scenario: teacher login
    Given user on the login page
    When user logs in using "myemail@gmail.com" and "mypassword"
#    And title should be "my application title"
#    And there should be 4,5 menu options
   Then homepage should be displayed
