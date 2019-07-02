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
const protractor_1 = require("protractor");
const loadJsonFile = require("load-json-file");
const ExcelUtil_1 = require("../utils/ExcelUtil");
class ReadingDataJson {
    //txtSearch: ElementFinder;
    constructor() {
        this.txtName = protractor_1.element(protractor_1.by.css('name'));
        this.txtEmail = protractor_1.element(protractor_1.by.css('email'));
        //this.txtSearch = element(by.css("input[type='search']"));
    }
    selectOpt(opt) {
        protractor_1.element(protractor_1.by.css("[id='exampleFormControlSelect1']option")).click().then(() => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.tagname('option')).getText().then((option) => __awaiter(this, void 0, void 0, function* () {
                console.log(option);
                if (option == opt) {
                    opt.click();
                }
            }));
        }));
    }
    readDataFromJson() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadJsonFile("./StepDefinitions/data.json").then((x) => {
                console.log(x);
                //this.searchText.sendKeys((<any>x).searchValue);
                //this.txtName      
            });
        });
    }
    readDataFromExcel() {
        return __awaiter(this, void 0, void 0, function* () {
            let sheet = ExcelUtil_1.ExcelUtil.readExcelSheet("./StepDefinitions/data.xlsx");
            // let userName = sheet.searchValue;
            // let eMail = sheet.courseTitle;
            //console.log(sheet);     
            //console.log(sheet.searchValue);
            // console.log(sheet.courseTitle);
            protractor_1.element(protractor_1.by.css("input[type='search']")).sendKeys(sheet.searchValue);
            // this.txtName.sendKeys(sheet.searchValue);
            // this.txtEmail.sendKeys(eMail);
        });
    }
}
exports.ReadingDataJson = ReadingDataJson;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZERhdGFKc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluaXRpb25zL3JlYWREYXRhSnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkNBQXFGO0FBQ3JGLCtDQUFnRDtBQUVoRCxrREFBK0M7QUFHL0MsTUFBYSxlQUFlO0lBRzFCLDJCQUEyQjtJQUUzQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QywyREFBMkQ7SUFDN0QsQ0FBQztJQUNBLFNBQVMsQ0FBQyxHQUFPO1FBRWhCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQU8sRUFBRTtZQUMvRSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFNLE1BQU0sRUFBQyxFQUFFO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQ2pCO29CQUNFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDWDtZQUVKLENBQUMsQ0FBQSxDQUFDLENBQUE7UUFFSixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVLLGdCQUFnQjs7WUFDcEIsTUFBTSxZQUFZLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixpREFBaUQ7Z0JBQ2pELG9CQUFvQjtZQUN0QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVLLGlCQUFpQjs7WUFDckIsSUFBSSxLQUFLLEdBQWUscUJBQVMsQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNoRixvQ0FBb0M7WUFDcEMsaUNBQWlDO1lBQ2pDLDBCQUEwQjtZQUMxQixpQ0FBaUM7WUFDakMsa0NBQWtDO1lBQ2xDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNwRSw0Q0FBNEM7WUFDNUMsaUNBQWlDO1FBQ25DLENBQUM7S0FBQTtDQUNGO0FBNUNELDBDQTRDQyJ9