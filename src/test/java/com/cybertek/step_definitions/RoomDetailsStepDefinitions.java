package com.cybertek.step_definitions;

import com.cybertek.pages.AllRoomPage;
import com.cybertek.utilities.BrowserUtils;
import com.cybertek.utilities.Driver;
import com.cybertek.utilities.ExcelUtils;
import cucumber.api.java.en.Then;
import org.apache.poi.ss.usermodel.*;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RoomDetailsStepDefinitions {
    String path = "./src/test/resources/features/excel_files/roomcapacity.xlsx";
    FileInputStream fileInputStream  ;
    Workbook workbook  ;
    Sheet sheet;
    List<String>actualRoomNames;


    @Then("correct room information should be displayed for light side")
    public void correct_room_information_should_be_displayed_for_light_side() throws Exception {
//get the room names from excel file
//        click on each room
//        based on the room information from excel verify user information
      ExcelUtils excelUtils=new ExcelUtils(path, "sheet1");
        List<Map<String, String>>roomMapList=excelUtils.getDataList();

        for (Map<String, String> room : roomMapList) {
            System.out.println(room.get("name"));

            AllRoomPage allRoomPage = new AllRoomPage();
            allRoomPage.getRoom(room.get("name")).click();
        }



               }


}
