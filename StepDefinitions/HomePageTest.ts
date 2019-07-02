  import { Given, When, Then } from 'cucumber';
  import { browser, element, by, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
  import * as chai from 'chai';
  import { HomePageElements, ElementFInd } from './HomePage';
  let expect = chai.expect;


  let hpe = new HomePageElements();
  Given('Open the browser and enter the {string} in address bar.', async (url)=> {
    // date =  new Date();
    // console.log(date);
    await browser.get(url);
    browser.waitForAngularEnabled(false);
  });

  When('Retreive the count of all the links in the home page', async ()=> {
    let allLinks = element.all(by.tagName('a'));
  await allLinks.getText().then(function(findAllLink) {
  var numberofLinks = findAllLink.length;
  console.log(numberofLinks);
  })  
    // count links, with then() resolve promise and log count result
      await element.all(by.css('a')).count().then(async(cnt)=>{
        console.log('Total links = '+cnt);
    });
  });

Then('Check whether the links are broken or workning', async () => {
  hpe.httpGet("https://www.emersonecologics.com").then(function (result) {
           expect(result.statusCode).to.equals(200);
           expect(result.bodyString).to.contain('Apache');
       });
  });




  Given('Open the browser and enter the {string}.', async (url) => {
    await browser.get(url);
    //browser.waitForAngularEnabled(false);
  });


  When('Validate the page {string}.', async (title) => {
    let pageTitle = await browser.getTitle();
    console.log(pageTitle);
    expect(pageTitle).to.contain(title);

  });


  When('Select Shop menu option then select category.', async () => {
    let pageTitle1 = await browser.getTitle();
    console.log(pageTitle1);
    
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeShop), 10000);
    await browser.actions().mouseMove(hpe.homeShop).perform();
    //browser.sleep(10000);
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeCategory), 10000);
    await browser.actions().mouseMove(hpe.homeCategory).perform();
    //hpe.homeCategory.click();
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeSubCategory), 10000);
    await hpe.homeSubCategory.click();
    
  });

  When('Select the AminoAcids option under category.', async () => {
    await browser.wait(ExpectedConditions.presenceOf(element(by.tagName('product-card'))), 5000);
    await element.all(by.tagName('product-card')).each(async (item) => {
      await item.element(by.css('h3 a')).getText().then(async (text) => {
        console.log(text);
        if (text == 'L-Theanine 100 mg') {
         await item.element(by.css("a[ng-href*='THEA9']")).click();
          // browser.sleep(5000);
        //element(by.css("a[ng-href*='THEA9']"))
        }
      })
    })

  });

Then('validate the item code of the Amino Acids product.', function (itemCode) {
  browser.wait(ExpectedConditions.visibilityOf(hpe.vendorText),5000)
  hpe.valueText.each(async (item1) => {
    await item1.hpe.vendorText.getText().then(function (value) {
      console.log(value);
      expect(value).to.equal(itemCode);
      
    })

  })
    //browser.wait(ExpectedConditions.presenceOf(hpe.valueText), 10000);
    // hpe.valueText.getText().then(function (value) {
    //   console.log(value);
      
   // })

  });


