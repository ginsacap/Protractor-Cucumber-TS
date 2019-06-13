import { Config, browser } from 'protractor';

export let config: Config = {
  seleniumAddress:"http://localhost:4444/wd/hub",
  capabilities: {
   browserName: 'chrome',
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),  
  specs: [
    '../Features/*.feature'
  ],

  cucumberOpts: {
    tags: "@Regression",
    require: ['./StepDefinitions/*.js'],
    //require:['path/to/step/definitions/**/*.steps.js'],
    strict: true 
    
  },
  onPrepare: function () {
    browser.manage().window().maximize();
  }
};