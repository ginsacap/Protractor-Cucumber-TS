import { Given, When, Then } from 'cucumber';
import { browser, element, ElementFinder, by, ExpectedConditions } from 'protractor';
import { strict } from 'assert';
import * as chai from 'chai';
let expect = chai.expect;
import { ReadingDataJson } from "./readDataJson";
import { ReadFromExcelData } from './ReadFromExcel';
import { protractor } from 'protractor/built/ptor';
let rdj = new ReadingDataJson();
let readExcel = new ReadFromExcelData();
let expc = protractor.ExpectedConditions;
Given('Open the browser and enter the qaclickacademy {string}', function (string) {
  //browser.waitForAngularEnabled(false);
  let txtUserName: ElementFinder = element(by.name('name'));

  browser.get(string);
  browser.wait(expc.visibilityOf(txtUserName), 10000);
  txtUserName.sendKeys('Sankar');
  //browser.refresh(10000);
});

When('After getting the registration page read the data from excel', async ()=> {
    let pgTitle:string = await browser.getTitle();
  console.log(pgTitle);  
  expect(pgTitle).to.equal('ProtoCommerce');
  });

When('Enter the data from excel file to the form fields', async ()=> {
  //await readExcel.registrationForm();
  browser.wait(ExpectedConditions.presenceOf(element(by.css("input[type='search']"))));
  await rdj.readDataFromExcel();
  browser.sleep(10000);

});

When('Submit the form', async ()=> {
  
});

Then('Check whether the registration is successful or not', async ()=> {
  await readExcel.lblSuccess.getText().then(async (text) =>  
  {
    console.log(text);
    expect(text).to.equal('Success! The Form has been submitted successfully!.');

})
});