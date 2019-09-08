Feature: API Cucmber Test

  @api
  Scenario: Adding new employee

    When I post a new Employee with 1100 id
#    Then Status code is 201
    And Response Json should contain Employee info
    When I send a GET request with "1100" id
#    Then Status code is 200
    And employee Json response Data should match the posted Json data