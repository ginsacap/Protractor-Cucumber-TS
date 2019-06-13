import { Given, When, Then } from "cucumber";
import { browser, element, by } from 'protractor';
import chai from "chai";
let expect = chai.expect;
Given('Open the browser and enter {string} to get the Home Page', async (string)=> {
  await browser.get(string);
});


When('Click on header link', async ()=> {
 await browser.findElement(by.linkText("angular.io")).click();
});

When('Navigate to angular page', async ()=> {
  let title:string = await browser.getTitle();
  console.log(title);
  expect(title).to.equal('Angular');
});

Then('Enter {string} in search box.', async (string) => {
  browser.sleep(5000);
  await browser.findElement(by.css("input[type = 'search']")).sendKeys(string);
});
