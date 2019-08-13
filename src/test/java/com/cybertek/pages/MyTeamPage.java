package com.cybertek.pages;

import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MyTeamPage {
    public MyTeamPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[contains(text(), 'map')]")
    @CacheLookup
    public WebElement map;

    @FindBy (xpath = "//a[contains(text(), 'hunt')]")
    @CacheLookup
    public WebElement hunt;

    @FindBy (xpath = "//p[.='name']/../p[1]")
    @CacheLookup
    public List<WebElement> names;


    @FindBy (xpath = "(//p[@class='title is-6'])[2]")
    @CacheLookup
    public WebElement memberTitle;





    public Map<String, String> getMemberInfo(){
    List<String>infoList= Arrays.asList( "name", "role", "team", "batch", "campus");
    Map<String, String > info=new HashMap<>();
             for (int i = 0; i < infoList.size(); i++) {
             if(infoList.get(i).equals("team")){
              BrowserUtils.waitFor(5);}
             info.put(infoList.get(i),
             Driver.getDriver().findElement(By.xpath("//*[.='"+infoList.get(i)+"']/../p[1]")).getText());
                     }
      return info;
    }

}
