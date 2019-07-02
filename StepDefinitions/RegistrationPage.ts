// import { Given, When, Then } from 'cucumber';
// import { browser, element, by } from 'protractor';
// import { ReadingDataJson } from "./readDataJson";
// import * as chai from 'chai';
// //import { expect } from 'chai';
// let expect = chai.expect;
// let rdj = new ReadingDataJson();
// Given('Open the browser and enter the qaclickacademy {string}', function (string) {
//   browser.waitForAngularEnabled(false);
//   browser.get(string);
//   //browser.refresh(10000);
// });

// When('After getting the registration page read the data from excel', async ()=> {
//     let pgTitle:string = await browser.getTitle();
//   console.log(pgTitle);  
//   expect(pgTitle).to.equal('ProtoCommerce');
  
//   });

// When('Enter the data from excel file to the form fields', async ()=> {
//   element(by.name("name")).sendKeys("Mystudents");
// element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
// element(by.id("exampleInputPassword1")).sendKeys("password2");
// element(by.css("input[type='checkbox']")).click();
// element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();  
// element.all(by.name("inlineRadioOptions")).first().click()
// element(by.css("input[type='date']")).sendKeys('05/08/219');
// });



// Then('Check whether the registration is successful or not', async ()=> {
//   await element(by.buttonText("Submit")).click().then(async()=>
// {
// await element(by.css("div[class*='success']")).getText().then(async(text)=>
// {
// console.log(text);
// })
// })
// });