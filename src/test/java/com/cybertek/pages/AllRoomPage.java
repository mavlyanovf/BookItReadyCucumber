package com.cybertek.pages;

import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AllRoomPage {

    public AllRoomPage(){
        PageFactory.initElements(Driver.getDriver(), this);
           }

    @FindBy(xpath = "//span[@class='room-name has-text-centered']")
    public List<WebElement> light_side_room_names;

    @FindBy(xpath = "//span[@class='room-name has-text-centered']")
    public WebElement light_side_room;

    @FindBy(xpath = "//p[contains(text(),'capacity')]")
    public WebElement capacity6;
    @FindBy(xpath = "//p[contains(text(),'tv')]")
    public WebElement equipmentTv;

    @FindBy(xpath = "//p[contains(text(),'whiteboard')]")
    public WebElement equipmentWhiteBoard;

    @FindBy(xpath = "//span[.='google']")
    public WebElement google;

    public WebElement getRoom(String roomName){
        return Driver.getDriver().findElement(By.linkText(roomName));
    }

}
