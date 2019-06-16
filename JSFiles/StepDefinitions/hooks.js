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
const VERSION = 2016030600;
exports.default = VERSION;
cucumber_1.Before({ tags: "@Regression" }, function () {
    protractor_1.browser.manage().window().maximize();
    console.log("Execution started");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Execution Completed");
        if (scenario.result.status === "failed") {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
// After({tags:"@Regression"}, function () {
//   console.log("Execution Completed");
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5QztBQUN6QywyQ0FBcUM7QUFDckMsTUFBTSxPQUFPLEdBQVcsVUFBVSxDQUFDO0FBQ25DLGtCQUFlLE9BQU8sQ0FBQztBQUN2QixpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxFQUFFO0lBQzNCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRW5DLENBQUMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ3ZDO1lBQ0UsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO0lBRUwsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILDRDQUE0QztBQUM1Qyx3Q0FBd0M7QUFFeEMsTUFBTSJ9