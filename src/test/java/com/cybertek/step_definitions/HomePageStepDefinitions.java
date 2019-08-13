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

public class HomePageStepDefinitions {

//    fixed
    @Then("location should be {string}")
    public void location_should_be(String expectedLocation) {
        MapPage mapPage=new MapPage();
        BrowserUtils.waitForPageToLoad(5);
        String actualLocation=mapPage.locationLocator.getText();
        Assert.assertEquals(expectedLocation, actualLocation);
    }
//fixed
    @Then("homepage should be displayed")
    public void homepage_should_be_displayed() {
    MapPage mapPage= new MapPage();
    String expectedPageName="map";
    BrowserUtils.waitForVisibility(mapPage.mapPageNameLocator, 5);
    String actualPageName=mapPage.mapPageNameLocator.getText();
   System.out.println("Actual page name: "+actualPageName);
        Assert.assertEquals(expectedPageName, actualPageName);

    }

    //    fixed
    @When("title should be {string}")
    public void title_should_be(String title) {
        String actualTitle= Driver.getDriver().getTitle();
        System.out.println("Actual title: "+actualTitle);
        System.out.println("Expected title: "+actualTitle);
        Assert.assertEquals(title, actualTitle);
    }



}
