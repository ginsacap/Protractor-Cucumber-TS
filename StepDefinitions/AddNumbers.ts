import { Given, When, Then } from 'cucumber';
import { element, browser, by, ElementFinder, ElementArrayFinder } from 'protractor';
import chai from 'chai';
import { expect } from 'chai';
import { } from './CalculatorPage';
import { url } from 'inspector';
import { BasePage } from './BasePage';
//let calc = new Calculator();

// Given('Open browser and enter URL', async ()=> {
//   await browser.get("http://juliemr.github.io/protractor-demo/");

//   });


Given('Open browser and enter {string}', async (URL) => {

  await browser.get(URL);
});

When('Enter two numbers {string}, {string} and {string}',async (a,b,option) => {
  //calc.getOptionClick(a, b, 'ADDITION');
  calc.txtFirst.sendKeys(a);
  calc.txtSecond.sendKeys(b);
  calc.btnGo.click();
  calc.lstOption.each(async (item) => {
    item.getAttribute('value').then(async (value) => {
      await console.log(value);
    })
  })  
  
});
Then('Verify the {string} after entering two numbers', async (c) => {
  
  //let eleRepeater: ElementArrayFinder = element.all(by.repeater('result in memory'));
  await element(by.css("td:nth-child(3)")).getText().then((value: string) => {
    console.log(typeof (value));
    expect(value).to.equal(c);
    try {
      if (value == c) {
        console.log("Expected Result:" + c + " -->  " + " Actual Result: " + value);
        console.log("Test Passed");

      }
      else {
        console.log("Test Failed");
        console.log("Expected Result:" + c + " -->  " + " Actual Result: " + value);
      }

    } catch (error) {
      console.log(error);

    }
    console.log(("Then is executed"));
  })
});


