"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const readDataJson_1 = require("./readDataJson");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
let rdj = new readDataJson_1.ReadingDataJson();
cucumber_1.Given('Open the browser and enter URL to get the Home Page', () => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(true);
    yield protractor_1.browser.get("https://angularjs.org/");
}));
cucumber_1.When('Click on header link on Angular page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(protractor_1.by.linkText("angular.io")).click();
}));
cucumber_1.When('Navigate to angular page after clicking on link.', () => __awaiter(this, void 0, void 0, function* () {
    let title = yield protractor_1.browser.getTitle();
    console.log(title);
    expect(title).to.equal('Angular');
}));
cucumber_1.Then('Enter search key in search box from JSON file', () => __awaiter(this, void 0, void 0, function* () {
    yield rdj.readDataFromExcel();
    protractor_1.browser.sleep(10000);
    //this.searchText.sendKeys((<any>x).courseTitle);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZEZyb21Kc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL3JlYWRGcm9tSnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLGlEQUFpRDtBQUNqRCwyQ0FBb0U7QUFDcEUsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsSUFBSSxHQUFHLEdBQUcsSUFBSSw4QkFBZSxFQUFFLENBQUM7QUFDaEMsZ0JBQUssQ0FBQyxxREFBcUQsRUFBRSxHQUFRLEVBQUU7SUFDckUsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxzQ0FBc0MsRUFBRSxHQUFRLEVBQUU7SUFDckQsTUFBTSxvQkFBTyxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxrREFBa0QsRUFBRSxHQUFTLEVBQUU7SUFDbEUsSUFBSSxLQUFLLEdBQVUsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQ0FBK0MsRUFBRSxHQUFRLEVBQUU7SUFDOUQsTUFBTSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixpREFBaUQ7QUFFbkQsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9