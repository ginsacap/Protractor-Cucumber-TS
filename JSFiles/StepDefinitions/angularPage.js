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
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let expect = chai_1.default.expect;
cucumber_1.Given('Open the browser and enter {string} to get the Home Page', (string) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.When('Click on header link', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(protractor_1.by.linkText("angular.io")).click();
}));
cucumber_1.When('Navigate to angular page', () => __awaiter(this, void 0, void 0, function* () {
    let title = yield protractor_1.browser.getTitle();
    console.log(title);
    expect(title).to.equal('Angular');
}));
cucumber_1.Then('Enter {string} in search box.', (string) => __awaiter(this, void 0, void 0, function* () {
    protractor_1.browser.sleep(5000);
    yield protractor_1.browser.findElement(protractor_1.by.css("input[type = 'search']")).sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvYW5ndWxhclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsZ0JBQUssQ0FBQywwREFBMEQsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ2hGLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFDdEMsTUFBTSxvQkFBTyxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywwQkFBMEIsRUFBRSxHQUFRLEVBQUU7SUFDekMsSUFBSSxLQUFLLEdBQVUsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3JELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9FLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==