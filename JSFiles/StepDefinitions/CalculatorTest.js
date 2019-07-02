"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const CalculatorPage_1 = require("./CalculatorPage");
const chai_1 = require("chai");
const protractor_1 = require("protractor");
let elem = new CalculatorPage_1.ElementLocators();
cucumber_1.Given('Open browser and enter url', function () {
    //console.log("Execution of Calculator is started");
    protractor_1.browser.waitForAngularEnabled(false);
    protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
});
cucumber_1.When('Enter numbers {string} and {string}', (a, b) => __awaiter(this, void 0, void 0, function* () {
    yield elem.waitForElement(elem.txtFirst, 10000);
    yield protractor_1.element(protractor_1.by.model('first')).sendKeys(a);
    yield protractor_1.element(protractor_1.by.model('second')).sendKeys(b);
    //  await elem.txtFirst.sendKeys(a);
    //  await elem.txtSecond.sendKeys(b);
}));
cucumber_1.When('Select the {string} Click on Go button', (option) => __awaiter(this, void 0, void 0, function* () {
    //console.log(option);
    yield protractor_1.element.all(protractor_1.by.css("select[ng-model='operator']> option")).each((item) => __awaiter(this, void 0, void 0, function* () {
        yield item.getAttribute('value').then((value) => __awaiter(this, void 0, void 0, function* () {
            // await console.log("Value from the page is:"+ value);
            // await console.log("Value from Feature file is:"+ option);               
            if (value == option) {
                item.click();
            }
        }));
    }));
    elem.btnGo.click();
}));
cucumber_1.Then('Capture the value from the table and Validate the {string}', (result) => __awaiter(this, void 0, void 0, function* () {
    //  
    yield elem.waitForElement(elem.tblValue, 10000);
    yield protractor_1.element.all(protractor_1.by.repeater('result in memory')).each(function (item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield item.element(protractor_1.by.css('td:nth-child(3)')).getText().then((text) => __awaiter(this, void 0, void 0, function* () {
                yield console.log(text);
                yield chai_1.expect(result, "Value should be equal to the actual value").to.equal(text);
            }));
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvQ2FsY3VsYXRvclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QyxxREFBbUQ7QUFDbkQsK0JBQThCO0FBQzlCLDJDQUFrRDtBQUVsRCxJQUFJLElBQUksR0FBRyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztBQUN4QixnQkFBSyxDQUFDLDRCQUE0QixFQUFFO0lBQ2xDLG9EQUFvRDtJQUNwRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDLENBQUM7QUFHWixlQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDekQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckMsb0NBQW9DO0lBQ3JDLHFDQUFxQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVYsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDdEQsc0JBQXNCO0lBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU0sSUFBSSxFQUFFLEVBQUU7UUFDcEYsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLEtBQUssRUFBQyxFQUFFO1lBQ3JELHVEQUF1RDtZQUN2RCwyRUFBMkU7WUFDcEUsSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDSixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDREQUE0RCxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDbEYsSUFBSTtJQUNILE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQWdCLElBQUk7O1lBQzFFLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUMsRUFBRTtnQkFDekUsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixNQUFNLGFBQU0sQ0FBQyxNQUFNLEVBQUMsMkNBQTJDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpGLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBRUYsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9