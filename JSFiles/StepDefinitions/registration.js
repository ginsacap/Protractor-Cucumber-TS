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
let expect = chai.expect;
const readDataJson_1 = require("./readDataJson");
const ReadFromExcel_1 = require("./ReadFromExcel");
const ptor_1 = require("protractor/built/ptor");
let rdj = new readDataJson_1.ReadingDataJson();
let readExcel = new ReadFromExcel_1.ReadFromExcelData();
let expc = ptor_1.protractor.ExpectedConditions;
cucumber_1.Given('Open the browser and enter the qaclickacademy {string}', function (string) {
    //browser.waitForAngularEnabled(false);
    let txtUserName = protractor_1.element(protractor_1.by.name('name'));
    protractor_1.browser.get(string);
    protractor_1.browser.wait(expc.visibilityOf(txtUserName), 10000);
    txtUserName.sendKeys('Sankar');
    //browser.refresh(10000);
});
cucumber_1.When('After getting the registration page read the data from excel', () => __awaiter(this, void 0, void 0, function* () {
    let pgTitle = yield protractor_1.browser.getTitle();
    console.log(pgTitle);
    expect(pgTitle).to.equal('ProtoCommerce');
}));
cucumber_1.When('Enter the data from excel file to the form fields', () => __awaiter(this, void 0, void 0, function* () {
    //await readExcel.registrationForm();
    protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(protractor_1.element(protractor_1.by.css("input[type='search']"))));
    yield rdj.readDataFromExcel();
    protractor_1.browser.sleep(10000);
}));
cucumber_1.When('Submit the form', () => __awaiter(this, void 0, void 0, function* () {
}));
cucumber_1.Then('Check whether the registration is successful or not', () => __awaiter(this, void 0, void 0, function* () {
    yield readExcel.lblSuccess.getText().then((text) => __awaiter(this, void 0, void 0, function* () {
        console.log(text);
        expect(text).to.equal('Success! The Form has been submitted successfully!.');
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL3JlZ2lzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBcUY7QUFFckYsMkNBQTZCO0FBQzdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsaURBQWlEO0FBQ2pELG1EQUFvRDtBQUNwRCxnREFBbUQ7QUFDbkQsSUFBSSxHQUFHLEdBQUcsSUFBSSw4QkFBZSxFQUFFLENBQUM7QUFDaEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxpQ0FBaUIsRUFBRSxDQUFDO0FBQ3hDLElBQUksSUFBSSxHQUFHLGlCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFDekMsZ0JBQUssQ0FBQyx3REFBd0QsRUFBRSxVQUFVLE1BQU07SUFDOUUsdUNBQXVDO0lBQ3ZDLElBQUksV0FBVyxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUUxRCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BELFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IseUJBQXlCO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDhEQUE4RCxFQUFFLEdBQVEsRUFBRTtJQUMzRSxJQUFJLE9BQU8sR0FBVSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUwsZUFBSSxDQUFDLG1EQUFtRCxFQUFFLEdBQVEsRUFBRTtJQUNsRSxxQ0FBcUM7SUFDckMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsVUFBVSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDOUIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFdkIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFRLEVBQUU7QUFFbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxREFBcUQsRUFBRSxHQUFRLEVBQUU7SUFDcEUsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFPLElBQUksRUFBRSxFQUFFO1FBRXZELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztJQUVqRixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9