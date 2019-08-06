package com.cybertek.step_definitions;

import cucumber.api.java.en.When;

public class LoginPageStepDefinitions {



    @When("user logs in using {string} and {string}")
    public void user_logs_in_using_and(String string, String string2) {
        System.out.println("User login with username" +string +" and password "+string2);

    }
}
