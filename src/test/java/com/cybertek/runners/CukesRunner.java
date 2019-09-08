package com.cybertek.runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        plugin = {"html:target/default-cucumber-reports",  "json:target/cucumber.json", },
        features = {"src/test/resources/features"}, //to specify where are the features,
        //feature contains scenarios
        //every scenario is like a test
        //where is the implementation for features
        glue = {"com/cybertek/step_definitions"}
//        ,dryRun=true
        ,        tags = "@smoke"
)
public class CukesRunner {
}
