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
const protractor_1 = require("protractor");
const chai_1 = require("chai");
// Given('Open browser and enter URL', async ()=> {
//   await browser.get("http://juliemr.github.io/protractor-demo/");
//   });
cucumber_1.Given('Open browser and enter {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.When('Enter two numbers {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(protractor_1.by.model('first')).sendKeys(string);
    yield protractor_1.browser.findElement(protractor_1.by.model('second')).sendKeys(string2);
    //browser.sleep(10000);
    //browser.wait(browser.findElement(by.id('gobutton'))).then
    yield console.log("When is executed");
}));
cucumber_1.Then('Verify the {string} after entering two numbers', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(protractor_1.by.id('gobutton')).click();
    //let eleRepeater: ElementArrayFinder = element.all(by.repeater('result in memory'));
    yield protractor_1.element(protractor_1.by.css("td:nth-child(3)")).getText().then((value) => __awaiter(this, void 0, void 0, function* () {
        console.log(typeof (value));
        chai_1.expect(value).to.equal(string);
        try {
            if (value == string) {
                console.log("Expected Result:" + string + " -->  " + " Actual Result: " + value);
                console.log("Test Passed");
            }
            else {
                console.log("Test Failed");
                console.log("Expected Result:" + string + " -->  " + " Actual Result: " + value);
            }
        }
        catch (error) {
            console.log(error);
        }
        console.log(("Then is executed"));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTnVtYmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9BZGROdW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFGO0FBRXJGLCtCQUE4QjtBQUU5QixtREFBbUQ7QUFDbkQsb0VBQW9FO0FBRXBFLFFBQVE7QUFHUixnQkFBSyxDQUFDLGlDQUFpQyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFFeEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQ3hFLE1BQU0sb0JBQU8sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxNQUFNLG9CQUFPLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsdUJBQXVCO0lBQ3ZCLDJEQUEyRDtJQUUzRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUd4QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLGdEQUFnRCxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDdEUsTUFBTSxvQkFBTyxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckQscUZBQXFGO0lBQ3JGLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxLQUFhLEVBQUUsRUFBRTtRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLElBQUk7WUFDRixJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUU1QjtpQkFDSTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDbEY7U0FFRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVwQjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==