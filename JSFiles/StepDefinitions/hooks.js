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
cucumber_1.Before({ tags: "@Test" }, function () {
    protractor_1.browser.manage().window().maximize();
    //browser.get("http://juliemr.github.io/protractor-demo/");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5QztBQUN6QywyQ0FBcUM7QUFFckMsTUFBTSxPQUFPLEdBQVcsVUFBVSxDQUFDO0FBQ25DLGtCQUFlLE9BQU8sQ0FBQztBQUN2QixpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxFQUFFO0lBQ3JCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsMkRBQTJEO0lBRTNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVuQyxDQUFDLENBQUMsQ0FBQztBQUVILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUN2QztZQUNFLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN0QztJQUVILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBRXhDLE1BQU0ifQ==