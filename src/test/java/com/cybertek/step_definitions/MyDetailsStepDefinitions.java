package com.cybertek.step_definitions;

import com.cybertek.pages.MapPage;
import com.cybertek.pages.MyTeamPage;
import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import cucumber.api.java.en.Then;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Map;
import java.util.TreeMap;


public class MyDetailsStepDefinitions {

//    fixed
    @Then("the user should see their information:")
    public void the_user_should_see_their_information(Map<String, String> userInfo) {
        Map<String, String>expectedMap= new TreeMap<>(userInfo);
        System.out.println(expectedMap);
        MyTeamPage myTeamPage=new MyTeamPage();
        Map<String, String>actualMap= new TreeMap<>(myTeamPage.getMemberInfo());
        System.out.println(actualMap);
        Assert.assertTrue(expectedMap.equals(actualMap));
    }
//fixed
    @Then("the Title of member should be {string}")
    public void the_Title_of_member_should_be(String memberTitle) {
        MyTeamPage myTeamPage = new MyTeamPage();
        BrowserUtils.navigateToModule(Driver.getDriver(), "my", "self");
        String actualMemeberTitle = myTeamPage.memberTitle.getText();
        Assert.assertTrue(actualMemeberTitle.contains(memberTitle));

    }

}
