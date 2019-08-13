package com.cybertek.step_definitions;

import com.cybertek.pages.MapPage;
import com.cybertek.pages.MyTeamPage;
import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;
import java.util.List;

public class MapDetailsStepDefinitions {

//    fixed
    @Then("I should be able to see {string} room")
    public void i_should_be_able_to_see_room(String roomName) {
        MapPage mapPage = new MapPage();
        List<String> allRoomNames = BrowserUtils.getElementsText(mapPage.allRoomNames);
        System.out.println("All room names: " +allRoomNames);
        Assert.assertTrue(allRoomNames.contains(roomName));
    }
//fixed
    @Then("the user should be able to see following conference rooms:")
    public void the_user_should_be_able_to_see_following_conference_rooms(List<String> expectedRooms) {
        MapPage mapPage = new MapPage();
        List<String> allRoomNames = mapPage.getAllRoomNames();
        System.out.println("Actual room names: "+allRoomNames);
        for (int i = 0; i < expectedRooms.size(); i++) {
            Assert.assertTrue(allRoomNames.contains(expectedRooms.get(i)));
        }
    }

//    fixed
    @When("the user goes to the {string} page")
    public void the_user_goes_to_the_page(String pageName) {
        MyTeamPage myTeamPage = new MyTeamPage();
        switch (pageName) {
            case "map":
                myTeamPage.map.click();
                break;
            case "hunt":
                myTeamPage.hunt.click();
                break;
            case "my self":
                BrowserUtils.navigateToModule(Driver.getDriver(), "my", "self");
                break;
            case "my team":
                BrowserUtils.navigateToModule(Driver.getDriver(), "my", "team");
                break;

        }

    }

//fixed
    @Then("following team members should be displayed:")
    public void following_team_members_should_be_displayed(List<String> members) {
        System.out.println("expected names: "+members);
        MyTeamPage myTeamPage=new MyTeamPage();
        BrowserUtils.waitForPageToLoad(5);
        List<String> actualNames=BrowserUtils.getElementsText(myTeamPage.names);
        System.out.println("actual names: "+actualNames);
        for (int i = 0; i < members.size(); i++) {
            Assert.assertTrue(actualNames.contains(members.get(i)));
        }



    }



}