import { Given, When, Then } from 'cucumber';
import { ElementLocators } from './CalculatorPage';
import { expect } from 'chai';
import { browser, element, by } from 'protractor';

let elem = new ElementLocators();
         Given('Open browser and enter url', function () {
           //console.log("Execution of Calculator is started");
           browser.waitForAngularEnabled(false);
           browser.get("http://juliemr.github.io/protractor-demo/");
         });

   
When('Enter numbers {string} and {string}', async (a, b) => {
  await elem.waitForElement(elem.txtFirst, 10000);
  await element(by.model('first')).sendKeys(a);
  await element(by.model('second')).sendKeys(b);

           //  await elem.txtFirst.sendKeys(a);
          //  await elem.txtSecond.sendKeys(b);
         });
   
  When('Select the {string} Click on Go button', async (option)=> {
           //console.log(option);
        await element.all(by.css("select[ng-model='operator']> option")).each(async(item) => {
        await item.getAttribute('value').then(async (value)=>{
        // await console.log("Value from the page is:"+ value);
        // await console.log("Value from Feature file is:"+ option);               
               if (value == option) {
                item.click();
               }                             
             })             
           })
           elem.btnGo.click();
         });

   
         Then('Capture the value from the table and Validate the {string}', async (result)=> {
          //  
           await elem.waitForElement(elem.tblValue, 10000);
           await element.all(by.repeater('result in memory')).each(async function (item) {             
             await item.element(by.css('td:nth-child(3)')).getText().then(async (text)=> {
               await console.log(text);
              await expect(result,"Value should be equal to the actual value").to.equal(text);
               
             });            
         })                   
         
         });
           

       