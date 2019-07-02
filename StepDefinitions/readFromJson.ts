import { Given, When, Then } from 'cucumber';
import { ReadingDataJson } from "./readDataJson";
import { browser, by, ElementFinder, protractor } from 'protractor';
import chai from 'chai';
let expect = chai.expect;
import { async } from 'q';

let rdj = new ReadingDataJson();
Given('Open the browser and enter URL to get the Home Page', async ()=> {
  browser.waitForAngularEnabled(true);
  await browser.get("https://angularjs.org/");
});

When('Click on header link on Angular page', async ()=> {
  await browser.findElement(by.linkText("angular.io")).click();
});

When('Navigate to angular page after clicking on link.', async () => {
  let title:string = await browser.getTitle();
  console.log(title);
  expect(title).to.equal('Angular'); 
});

Then('Enter search key in search box from JSON file', async ()=> {
  await rdj.readDataFromExcel();
  browser.sleep(10000);
  //this.searchText.sendKeys((<any>x).courseTitle);
  
});