package com.cybertek.step_definitions;

import com.cybertek.pages.MapPage;
import com.cybertek.pages.SignInPage;
import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.ConfigurationReader;
import com.cybertek.utilities.Driver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;


public class LoginPageStepDefinitions {



//fixed
    @When("user logs in using {string} and {string}")
    public void user_logs_in_using_and(String email, String password) {
        System.out.println("User login with username: " +email +" and password: "+password);
        SignInPage signInPage=new SignInPage();
        signInPage.logIn(email, password);
        BrowserUtils.waitForPageToLoad(5);
    }

    //fixed
    @Given("user on the login page")
    public void user_on_the_login_page() {
        System.out.println("I am opening the login page");
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    //    fixed
    @When("user logs in as a team lead")
    public void user_logs_in_as_a_team_lead() {
        System.out.println("User login with team lead username: "
                +ConfigurationReader.getProperty("dark_side_team_lead_username")
                +" and password: "+ConfigurationReader.getProperty("dark_side_team_lead_password"));

        SignInPage signInPage= new SignInPage();
        signInPage.logIn(ConfigurationReader.getProperty("dark_side_team_lead_username"),
                ConfigurationReader.getProperty("dark_side_team_lead_password"));
    }

//fixed
    @When("user logs in as a team member")
    public void user_logs_in_as_a_team_member() {
        System.out.println("User login with student username: "
                +ConfigurationReader.getProperty("dark_side_student_username")
                +" and password: "+ConfigurationReader.getProperty("dark_side_student_password"));

        SignInPage signInPage= new SignInPage();
        signInPage.logIn(ConfigurationReader.getProperty("dark_side_student_username"),
                ConfigurationReader.getProperty("dark_side_student_password"));
    }

//fixed
@When("user logs in as a {string}")
public void user_logs_in_as_a(String type) {
    if (type.equals("team_lead")) {
        type = "team_lead";
    } else if (type.equals("team_member")) {
        type = "student";
    }

    System.out.println("User login with " + type + " username: "
            + ConfigurationReader.getProperty("dark_side_" + type + "_username")
            + " and password: " + ConfigurationReader.getProperty("dark_side_" + type + "_password"));

    SignInPage signInPage = new SignInPage();
    signInPage.logIn(ConfigurationReader.getProperty("dark_side_" + type + "_username"),
            ConfigurationReader.getProperty("dark_side_" + type + "_password"));

}

}
