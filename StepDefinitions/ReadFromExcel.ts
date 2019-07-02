import { ExcelUtil } from '../utils/ExcelUtil';
import { ElementFinder, element, by } from 'protractor';
import { IWorkSheet } from 'ts-xlsx';



export class ReadFromExcelData{

  searchText: ElementFinder;
   txtName : ElementFinder;
   txtEmail : ElementFinder;
   txtPassword : ElementFinder;
   chkSelectOption : ElementFinder;
   //lstGender : ElementFinder;
   rdbStatus: ElementFinder;
   dtDate : ElementFinder;
   btnSubmit : ElementFinder;
  lblSuccess: ElementFinder;
  
  constructor()
  {
    this.searchText = element(by.css("input[type = 'search']"));
    this.txtName = element(by.name('name'));
    this.txtEmail = element(by.name('email'));
    this.txtPassword = element(by.css("input[type='password']"));
    this.chkSelectOption = element(by.css("input[type='checkbox']"));
    this.rdbStatus = element.all(by.name("inlineRadioOptions")).first();
    this.btnSubmit = element(by.buttonText("Submit"));
    this.dtDate = element(by.css("input[type='date']"));
    this.lblSuccess = element(by.css("div[class*='success']"));            
  
  }

  async registrationForm()  {
    let workSheet = <registration>ExcelUtil.readExcelSheet("./StepDefinitions/data.xlsx");
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
     
  }
}


interface registration{
  name: string,
  email: string,
  password:string,
  date: any
}