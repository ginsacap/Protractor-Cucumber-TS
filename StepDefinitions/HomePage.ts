import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { protractor } from "protractor/built/ptor";

export class HomePageElements{
  homeShop: ElementFinder;
  homeCategory: ElementFinder;
  homeSubCategory: ElementFinder;
  waitForElement: ElementFinder;
  valueText: ElementArrayFinder;
  vendorText:ElementFinder;
  //selectProduct: ElementFinder;
  constructor(){
    
    this.homeShop = element(by.css("a[id='shopMenuDropdownToggle']"));
    //this.homeCategory = element(by.css("a[href='CATEGORY']"));
    this.homeCategory = element(by.css("ul#mega-menu-shop-by > li:nth-child(2)"));
    this.homeSubCategory = element(by.linkText("Amino Acids")); 
    this.valueText = element.all(by.css("span[class*='item-code-text']"));
    this.vendorText = element(by.css("p[class*='item-code ng-binding']"));
    // this.selectProduct = element(by.tagName('product-card')).each(async (item) => {
    //   item.element('h3 a').getText().then(async (text) => {
    //     console.log(text);
        
    //   })

    // })
    //this.homeSubCategory = element(by.css("ul.subcategories > li:nth-child(1)"));
    //this.homeCategory = element(by.css("a[class*='ee-sub-menu-dropdown'][text='CATAGORY']"));
   // this.homeSubCategory= element(by.repeater('subCategory in category.subCategory')).element(by.linkText('Amino Acids'));
    //this.homeSubCategory = element(by.repeater('ee-sub-menu-dropdown-toggle'));
    //this.homeSubCategory = element(by.repeater('ee-sub-menu-dropdown-toggle'));
    this.waitForElement = element(by.css("p[text='FILTER YOUR RESULTS']"));
    //this.valueText = element(by.css("p > span.item-code.ng-binding"));
    
    
  }

  // A Protracterized httpGet() promise
 httpGet(siteUrl) {
  var http = require('https');
  var defer = new protractor.promise.Deferred();

  http.get(siteUrl, function(response) {

      var bodyString = '';

      response.setEncoding('utf8');

      response.on("data", function(chunk) {
          bodyString += chunk;
      });

      response.on('end', function() {
          defer.fulfill({
              statusCode: response.statusCode,
              bodyString: bodyString
          });
      });

  }).on('error', function(e) {
      defer.reject("Got http.get error: " + e.message);
  });

  return defer.promise;
}

// it('should return 200 and contain proper body', function() {
//   httpGet("http://localhost:80").then(function(result) {
//       expect(result.statusCode).toBe(200);
//       expect(result.bodyString).toContain('Apache');
//   });
// });

}

export interface ElementFInd{
    item:any
}
  

// //const httpGet = require("./httpGet");
// const allLinks = element.all(by.tagName("a"));
// await allLinks.count().then(link_tally => {
//       console.log(`This page contains ${link_tally} links with proper tags.`);
//     });

//     allLinks.each((link:any) => {
//       link.getAttribute("href").then(async(url) => {
//           console.log(`Checking: ${url}`);
//           return (url);
//         }).then(({ status, body }) => {
//           expect(status).to.equal(200);
//           expect(status).to.lessThan(400);
//           // expect(body.length).toBeGreaterThan(0);
//         })
//         .catch(error => fail(error.stack));
//     });