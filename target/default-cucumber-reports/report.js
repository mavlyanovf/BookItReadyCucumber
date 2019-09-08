$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\API_Cucumber\\API_POST_Cucumber.feature");
formatter.feature({
  "name": "API Cucmber Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding new employee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "I post a new Employee with 1100 id",
  "keyword": "When "
});
formatter.match({
  "location": "API_TestsStepDefenitions.i_post_a_new_Employee_with_id(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response Json should contain Employee info",
  "keyword": "And "
});
formatter.match({
  "location": "API_TestsStepDefenitions.response_Json_should_contain_Employee_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request with \"1100\" id",
  "keyword": "When "
});
formatter.match({
  "location": "API_TestsStepDefenitions.i_send_a_GET_request_with_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "employee Json response Data should match the posted Json data",
  "keyword": "And "
});
formatter.match({
  "location": "API_TestsStepDefenitions.employee_Json_response_Data_should_match_the_posted_Json_data()"
});
formatter.result({
  "status": "passed"
});
});