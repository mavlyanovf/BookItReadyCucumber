package com.cybertek.pages;

import com.cybertek.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;




public class SignInPage {
    public SignInPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(name = "email")
    public WebElement emailLocator;

    @FindBy(name = "password")
    public WebElement passwordLocator;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signInButtonLocator;

    public void logIn(String email, String password){
        this.emailLocator.sendKeys(email);
        this.passwordLocator.sendKeys(password);
        signInButtonLocator.click();
        MapPage mapPage=new MapPage();
        WebDriverWait wait;
        wait = new WebDriverWait(Driver.getDriver(), 15);
        wait.until(ExpectedConditions.textToBePresentInElement(mapPage.mapPageNameLocator, "map"));
//        wait.until(ExpectedConditions.urlContains("map"));
    }



}
