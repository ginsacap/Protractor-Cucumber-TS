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
const ExcelUtil_1 = require("../utils/ExcelUtil");
const protractor_1 = require("protractor");
class ReadFromExcelData {
    constructor() {
        this.searchText = protractor_1.element(protractor_1.by.css("input[type = 'search']"));
        this.txtName = protractor_1.element(protractor_1.by.name('name'));
        this.txtEmail = protractor_1.element(protractor_1.by.name('email'));
        this.txtPassword = protractor_1.element(protractor_1.by.css("input[type='password']"));
        this.chkSelectOption = protractor_1.element(protractor_1.by.css("input[type='checkbox']"));
        this.rdbStatus = protractor_1.element.all(protractor_1.by.name("inlineRadioOptions")).first();
        this.btnSubmit = protractor_1.element(protractor_1.by.buttonText("Submit"));
        this.dtDate = protractor_1.element(protractor_1.by.css("input[type='date']"));
        this.lblSuccess = protractor_1.element(protractor_1.by.css("div[class*='success']"));
    }
    registrationForm() {
        return __awaiter(this, void 0, void 0, function* () {
            let workSheet = ExcelUtil_1.ExcelUtil.readExcelSheet("./StepDefinitions/data.xlsx");
            console.log(workSheet);
            console.log(workSheet.name);
            // this.searchText.sendKeys(workSheet.name);
            // this.txtEmail.sendKeys(workSheet.email);
            // this.txtPassword.sendKeys(workSheet.password);
            // this.chkSelectOption.click();
            // element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
            // this.rdbStatus.click();
            // this.dtDate.sendKeys(workSheet.date);
            // this.btnSubmit.click().then(async () => {
            // await this.lblSuccess.getText().then(async (text) => {
            //     console.log(text);
            //   })
            // })
        });
    }
}
exports.ReadFromExcelData = ReadFromExcelData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZEZyb21FeGNlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9SZWFkRnJvbUV4Y2VsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrREFBK0M7QUFDL0MsMkNBQXdEO0FBS3hELE1BQWEsaUJBQWlCO0lBYTVCO1FBRUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBRTdELENBQUM7SUFFSyxnQkFBZ0I7O1lBQ3BCLElBQUksU0FBUyxHQUFpQixxQkFBUyxDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsNENBQTRDO1lBQzVDLDJDQUEyQztZQUMzQyxpREFBaUQ7WUFDakQsZ0NBQWdDO1lBQ2hDLDhGQUE4RjtZQUM5RiwwQkFBMEI7WUFDMUIsd0NBQXdDO1lBQ3hDLDRDQUE0QztZQUM1Qyx5REFBeUQ7WUFDekQseUJBQXlCO1lBQ3pCLE9BQU87WUFDUCxLQUFLO1FBRVAsQ0FBQztLQUFBO0NBQ0Y7QUE3Q0QsOENBNkNDIn0=