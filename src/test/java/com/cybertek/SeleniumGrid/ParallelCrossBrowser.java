package com.cybertek.SeleniumGrid;


import com.cybertek.utilities.BrowserUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.Key;

public class ParallelCrossBrowser {
WebDriver driver;
    public static final String URL ="http://52.202.79.238:4444/wd/hub";
    @BeforeMethod
    public void setUp() throws MalformedURLException {
        DesiredCapabilities caps=DesiredCapabilities.firefox();
        caps.setPlatform(Platform.ANY);
//        caps.setCapability("version", "latest");
driver= new RemoteWebDriver(new URL(URL), caps);



}


@Test
    public void parallelTest(){
        driver.get("https://www.google.com/");
    driver.findElement(By.name("q")).sendKeys("Java programming"+ Keys.ENTER);
    BrowserUtils.waitFor(2);
    System.out.println(driver.getTitle());
    Assert.assertTrue(driver.getTitle().startsWith("Java programming"));



}

}
