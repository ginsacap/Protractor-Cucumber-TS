"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class HomePageElements {
    //selectProduct: ElementFinder;
    constructor() {
        this.homeShop = protractor_1.element(protractor_1.by.css("a[id='shopMenuDropdownToggle']"));
        //this.homeCategory = element(by.css("a[href='CATEGORY']"));
        this.homeCategory = protractor_1.element(protractor_1.by.css("ul#mega-menu-shop-by > li:nth-child(2)"));
        this.homeSubCategory = protractor_1.element(protractor_1.by.linkText("Amino Acids"));
        this.valueText = protractor_1.element.all(protractor_1.by.css("span[class*='item-code-text']"));
        this.vendorText = protractor_1.element(protractor_1.by.css("p[class*='item-code ng-binding']"));
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
        this.waitForElement = protractor_1.element(protractor_1.by.css("p[text='FILTER YOUR RESULTS']"));
        //this.valueText = element(by.css("p > span.item-code.ng-binding"));
    }
    // A Protracterized httpGet() promise
    httpGet(siteUrl) {
        var http = require('https');
        var defer = new ptor_1.protractor.promise.Deferred();
        http.get(siteUrl, function (response) {
            var bodyString = '';
            response.setEncoding('utf8');
            response.on("data", function (chunk) {
                bodyString += chunk;
            });
            response.on('end', function () {
                defer.fulfill({
                    statusCode: response.statusCode,
                    bodyString: bodyString
                });
            });
        }).on('error', function (e) {
            defer.reject("Got http.get error: " + e.message);
        });
        return defer.promise;
    }
}
exports.HomePageElements = HomePageElements;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvSG9tZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNEU7QUFDNUUsZ0RBQW1EO0FBRW5ELE1BQWEsZ0JBQWdCO0lBTzNCLCtCQUErQjtJQUMvQjtRQUVFLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNsRSw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDdEUsa0ZBQWtGO1FBQ2xGLDBEQUEwRDtRQUMxRCx5QkFBeUI7UUFFekIsT0FBTztRQUVQLEtBQUs7UUFDTCwrRUFBK0U7UUFDL0UsMkZBQTJGO1FBQzVGLHlIQUF5SDtRQUN4SCw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQztRQUN2RSxvRUFBb0U7SUFHdEUsQ0FBQztJQUVELHFDQUFxQztJQUN0QyxPQUFPLENBQUMsT0FBTztRQUNkLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLGlCQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVMsUUFBUTtZQUUvQixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFFcEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU3QixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFTLEtBQUs7Z0JBQzlCLFVBQVUsSUFBSSxLQUFLLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDZixLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNWLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtvQkFDL0IsVUFBVSxFQUFFLFVBQVU7aUJBQ3pCLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUM7WUFDckIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQztDQVNBO0FBdEVELDRDQXNFQztBQU9ELDBDQUEwQztBQUMxQyxpREFBaUQ7QUFDakQsOENBQThDO0FBQzlDLGlGQUFpRjtBQUNqRixVQUFVO0FBRVYsb0NBQW9DO0FBQ3BDLHVEQUF1RDtBQUN2RCw2Q0FBNkM7QUFDN0MsMEJBQTBCO0FBQzFCLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsNkNBQTZDO0FBQzdDLHVEQUF1RDtBQUN2RCxhQUFhO0FBQ2IsOENBQThDO0FBQzlDLFVBQVUifQ==