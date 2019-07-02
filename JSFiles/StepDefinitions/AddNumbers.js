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
//let calc = new Calculator();
// Given('Open browser and enter URL', async ()=> {
//   await browser.get("http://juliemr.github.io/protractor-demo/");
//   });
cucumber_1.Given('Open browser and enter {string}', (URL) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(URL);
}));
cucumber_1.When('Enter two numbers {string}, {string} and {string}', (a, b, option) => __awaiter(this, void 0, void 0, function* () {
    //calc.getOptionClick(a, b, 'ADDITION');
    calc.txtFirst.sendKeys(a);
    calc.txtSecond.sendKeys(b);
    calc.btnGo.click();
    calc.lstOption.each((item) => __awaiter(this, void 0, void 0, function* () {
        item.getAttribute('value').then((value) => __awaiter(this, void 0, void 0, function* () {
            yield console.log(value);
        }));
    }));
}));
cucumber_1.Then('Verify the {string} after entering two numbers', (c) => __awaiter(this, void 0, void 0, function* () {
    //let eleRepeater: ElementArrayFinder = element.all(by.repeater('result in memory'));
    yield protractor_1.element(protractor_1.by.css("td:nth-child(3)")).getText().then((value) => {
        console.log(typeof (value));
        chai_1.expect(value).to.equal(c);
        try {
            if (value == c) {
                console.log("Expected Result:" + c + " -->  " + " Actual Result: " + value);
                console.log("Test Passed");
            }
            else {
                console.log("Test Failed");
                console.log("Expected Result:" + c + " -->  " + " Actual Result: " + value);
            }
        }
        catch (error) {
            console.log(error);
        }
        console.log(("Then is executed"));
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkTnVtYmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9BZGROdW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFGO0FBRXJGLCtCQUE4QjtBQUk5Qiw4QkFBOEI7QUFFOUIsbURBQW1EO0FBQ25ELG9FQUFvRTtBQUVwRSxRQUFRO0FBR1IsZ0JBQUssQ0FBQyxpQ0FBaUMsRUFBRSxDQUFPLEdBQUcsRUFBRSxFQUFFO0lBRXJELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxtREFBbUQsRUFBQyxDQUFPLENBQUMsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUU7SUFDNUUsd0NBQXdDO0lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUUsRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO1lBQzlDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsQ0FBTyxDQUFDLEVBQUUsRUFBRTtJQUVqRSxxRkFBcUY7SUFDckYsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSTtZQUNGLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7YUFFNUI7aUJBQ0k7Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQzdFO1NBRUY7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFcEI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9