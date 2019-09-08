package com.cybertek.step_definitions;

import com.cybertek.POJO.EmployeeCreate;
import com.cybertek.POJO.EmployeeResponse;
import com.cybertek.utilities.ConfigurationReader;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.apache.commons.lang3.ObjectUtils;

import javax.security.auth.login.Configuration;

import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static org.testng.AssertJUnit.assertEquals;

public class API_TestsStepDefenitions {

Response response;

    EmployeeCreate newEmployee=new EmployeeCreate();
    EmployeeResponse employeeResponse;

    @When("I post a new Employee with {int} id")
    public void i_post_a_new_Employee_with_id(Integer employee_id) {

        newEmployee.setEmployee_id(employee_id);
        newEmployee.setLast_name("Haldin");
        newEmployee.setFirst_name("Jumagul");
        newEmployee.setSalary(50000);
        newEmployee.setManager_id(114);
        newEmployee.setDepartment_id(30);
        newEmployee.setJob_id("PU_CLERK");
        newEmployee.setPhone_number("590.423.6667");
        newEmployee.setHire_date("2008-07-17T04:00:00Z");
        newEmployee.setEmail("JUMAHAL");
        newEmployee.setCommission_pct(0);
        response=given().accept(ContentType.JSON).and().contentType(ContentType.JSON)
                .and().body(newEmployee)
                .when().post(ConfigurationReader.getProperty("hrapp.baserestapiurl")+"employees/");

        System.out.println("actual code 1 "+response.statusCode());

    }

    @Then("Status code is {int}")
    public void status_code_is(int statusCode) {
int statuscode=response.statusCode();
    assertEquals(statuscode, statusCode);
    }



    @Then("Response Json should contain Employee info")
    public void response_Json_should_contain_Employee_info() {
        employeeResponse=response.body().as(EmployeeResponse.class);

        System.out.println("Act" + employeeResponse.getEmployee_id()+" exp"+newEmployee.getEmployee_id());
       assertEquals(employeeResponse.getEmployee_id(), newEmployee.getEmployee_id());
       assertEquals(employeeResponse.getFirst_name(), newEmployee.getFirst_name());
    }

    @When("I send a GET request with {string} id")
    public void i_send_a_GET_request_with_id(String employee_id) {
       response=given().accept(ContentType.JSON).contentType(ContentType.JSON)
                .get(ConfigurationReader.getProperty("hrapp.baserestapiurl")+"employees/"+employee_id);

    }

    @Then("employee Json response Data should match the posted Json data")
    public void employee_Json_response_Data_should_match_the_posted_Json_data() {
        Map employeeInfo=response.body().as(Map.class);

        assertEquals(employeeInfo.get("employee_id"), employeeResponse.getEmployee_id());
    }



}
