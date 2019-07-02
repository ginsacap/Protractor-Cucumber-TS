import { Config, browser } from 'protractor';
//import * as reporter from "cucumber-html-reporter";
let reporter = require("cucumber-html-reporter");


export let config: Config =
{
  directConnect:true,
  capabilities: {
   browserName: 'chrome',  
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  specs: [
    '../Features/Calculator.feature'
  ],
  
  suites: {
    practice:[
      './StepDefinitions/readFromJson.js',
      './StepDefinitions/timeouts.js'
    ]
  } ,

  cucumberOpts:
  {
    tags: ["@Test"],
    format: 'json:./cucumberreport.json',
    require: ['./StepDefinitions/CalculatorTest.js','./StepDefinitions/hooks.js','./StepDefinitions/CalculatorPage.js','./StepDefinitions/timeout.js'],
    //require:['path/to/step/definitions/**/*.steps.js'],
    strict: true
  },
  onComplete: () =>
  {
    let options =
    {
      theme: 'hierarchy',
      jsonFile: './cucumberreport.json',
      output: './cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata:
      {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
        // "Browser": 'browserName',
        "Platform": "Windows 8",
        "Parallel": "Scenarios",
        //"Executed": "Remote"
      }
    };
      
    reporter.generate(options);
  }
   
};