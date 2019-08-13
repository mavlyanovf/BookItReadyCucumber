package com.cybertek.pages;

import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class MapPage {

    public MapPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy (xpath = "//h1[@class='title' and contains(text(), 'map')]")
    public WebElement mapPageNameLocator;

    @FindBy (xpath = "//h2[@class='subtitle']")
    public WebElement locationLocator;

    @FindBy (xpath = "//span[@_ngcontent-c6]")
    @CacheLookup
    public List<WebElement> allRoomNames;


    public List<String> getAllRoomNames(){
       return BrowserUtils.getElementsText(allRoomNames);
    }





}
