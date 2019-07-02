"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai = __importStar(require("chai"));
const HomePage_1 = require("./HomePage");
let expect = chai.expect;
let hpe = new HomePage_1.HomePageElements();
cucumber_1.Given('Open the browser and enter the {string} in address bar.', (url) => __awaiter(this, void 0, void 0, function* () {
    // date =  new Date();
    // console.log(date);
    yield protractor_1.browser.get(url);
    protractor_1.browser.waitForAngularEnabled(false);
}));
cucumber_1.When('Retreive the count of all the links in the home page', () => __awaiter(this, void 0, void 0, function* () {
    let allLinks = protractor_1.element.all(protractor_1.by.tagName('a'));
    yield allLinks.getText().then(function (findAllLink) {
        var numberofLinks = findAllLink.length;
        console.log(numberofLinks);
    });
    // count links, with then() resolve promise and log count result
    yield protractor_1.element.all(protractor_1.by.css('a')).count().then((cnt) => __awaiter(this, void 0, void 0, function* () {
        console.log('Total links = ' + cnt);
    }));
}));
cucumber_1.Then('Check whether the links are broken or workning', () => __awaiter(this, void 0, void 0, function* () {
    hpe.httpGet("https://www.emersonecologics.com").then(function (result) {
        expect(result.statusCode).to.equals(200);
        expect(result.bodyString).to.contain('Apache');
    });
}));
cucumber_1.Given('Open the browser and enter the {string}.', (url) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(url);
    //browser.waitForAngularEnabled(false);
}));
cucumber_1.When('Validate the page {string}.', (title) => __awaiter(this, void 0, void 0, function* () {
    let pageTitle = yield protractor_1.browser.getTitle();
    console.log(pageTitle);
    expect(pageTitle).to.contain(title);
}));
cucumber_1.When('Select Shop menu option then select category.', () => __awaiter(this, void 0, void 0, function* () {
    let pageTitle1 = yield protractor_1.browser.getTitle();
    console.log(pageTitle1);
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeShop), 10000);
    yield protractor_1.browser.actions().mouseMove(hpe.homeShop).perform();
    //browser.sleep(10000);
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeCategory), 10000);
    yield protractor_1.browser.actions().mouseMove(hpe.homeCategory).perform();
    //hpe.homeCategory.click();
    //browser.wait(ExpectedConditions.presenceOf(hpe.homeSubCategory), 10000);
    yield hpe.homeSubCategory.click();
}));
cucumber_1.When('Select the AminoAcids option under category.', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.tagName('product-card'))), 5000);
    yield protractor_1.element.all(protractor_1.by.tagName('product-card')).each((item) => __awaiter(this, void 0, void 0, function* () {
        yield item.element(protractor_1.by.css('h3 a')).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
            console.log(text);
            if (text == 'L-Theanine 100 mg') {
                yield item.element(protractor_1.by.css("a[ng-href*='THEA9']")).click();
                // browser.sleep(5000);
                //element(by.css("a[ng-href*='THEA9']"))
            }
        }));
    }));
}));
cucumber_1.Then('validate the item code of the Amino Acids product.', function (itemCode) {
    protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(hpe.vendorText), 5000);
    hpe.valueText.each((item1) => __awaiter(this, void 0, void 0, function* () {
        yield item1.hpe.vendorText.getText().then(function (value) {
            console.log(value);
            expect(value).to.equal(itemCode);
        });
    }));
    //browser.wait(ExpectedConditions.presenceOf(hpe.valueText), 10000);
    // hpe.valueText.getText().then(function (value) {
    //   console.log(value);
    // })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL0hvbWVQYWdlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFFLHVDQUE2QztBQUM3QywyQ0FBeUc7QUFDekcsMkNBQTZCO0FBQzdCLHlDQUEyRDtBQUMzRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBR3pCLElBQUksR0FBRyxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztBQUNqQyxnQkFBSyxDQUFDLHlEQUF5RCxFQUFFLENBQU8sR0FBRyxFQUFDLEVBQUU7SUFDNUUsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzREFBc0QsRUFBRSxHQUFRLEVBQUU7SUFDckUsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFdBQVc7UUFDbEQsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFBO0lBQ0EsZ0VBQWdFO0lBQzlELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLEdBQUcsRUFBQyxFQUFFO1FBQ3RELE9BQU8sQ0FBQyxHQUFH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