import { Given, When, Then } from 'cucumber';
import { element, browser, by, ElementFinder, ElementArrayFinder } from 'protractor';
import chai from 'chai';
import { expect } from 'chai';

// Given('Open browser and enter URL', async ()=> {
//   await browser.get("http://juliemr.github.io/protractor-demo/");

//   });


Given('Open browser and enter {string}', async (string) => {

  await browser.get(string);
});

When('Enter two numbers {string} and {string}', async (string, string2) => {
  await browser.findElement(by.model('first')).sendKeys(string);
  await browser.findElement(by.model('second')).sendKeys(string2);
  //browser.sleep(10000);
  //browser.wait(browser.findElement(by.id('gobutton'))).then

  await console.log("When is executed");


});
Then('Verify the {string} after entering two numbers', async (string) => {
  await browser.findElement(by.id('gobutton')).click();
  //let eleRepeater: ElementArrayFinder = element.all(by.repeater('result in memory'));
  await element(by.css("td:nth-child(3)")).getText().then(async (value: string) => {
    console.log(typeof (value));
    expect(value).to.equal(string);
    try {
      if (value == string) {
        console.log("Expected Result:" + string + " -->  " + " Actual Result: " + value);
        console.log("Test Passed");

      }
      else {
        console.log("Test Failed");
        console.log("Expected Result:" + string + " -->  " + " Actual Result: " + value);
      }

    } catch (error) {
      console.log(error);

    }
    console.log(("Then is executed"));
  })
});


